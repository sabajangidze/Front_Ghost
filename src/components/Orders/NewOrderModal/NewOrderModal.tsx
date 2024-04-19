import React, { useEffect, useState } from "react";
import DragNDrop from "../../Inputs/DragNDrop/DragNDrop";

import * as Yup from "yup";
import { Link } from "react-router-dom";
import Autocomplete from "../../Inputs/Autocomplete/Autocomplete";
import {
  ENDPOINTS,
  createAPIEndpoint,
  createStandartAPIEndpoint,
} from "../../../api/api";
import Subject from "../../../types/Subject";
import { useAppSelector } from "../../../hooks/hooks";

function NewOrderModal() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [subjectId, setSubjectId] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const studentId = useAppSelector((state) => state.user.relationId);
  const universityId = useAppSelector((state) => state.user.universityId);

  console.log(uploadedFiles);

  const NewOrderSchema = Yup.object().shape({
    title: Yup.string()
      .required("დააწერეთ სათაური!")
      .min(5, "დასახელება უნდა იყოს მინიმუმ 5 სიმბოლო!"),
    description: Yup.string()
      .required("მოგვეცით აღწერა!")
      .min(10, "აღწერა უნდა იყოს მინიმუმ 10 სიმბოლო!"),
    subjectId: Yup.string().required("აირჩიეთ ჩამოთვლილთაგან ერთ-ერთი საგანი!"),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await createStandartAPIEndpoint(
          ENDPOINTS.universities
        ).getByIdParam(universityId, ENDPOINTS.subjects);

        setSubjects(response.data.subjects);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [universityId]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessages([]);
    try {
      await NewOrderSchema.validate(
        {
          title: title,
          description: description,
          subjectId: subjectId,
        },
        { abortEarly: false }
      ); // Add abortEarly: false to show all errors at once

      interface Record {
        title: string;
        description: string;
        subjectId: string;
        isUrgant: boolean; // Note: It seems like there might be a typo here. Did you mean isUrgent?
        status: number;
        studentId: string;
        files: File[];
        [key: string]: string | boolean | number | File[]; // This line is the index signature.
      }

      const record: Record = {
        title,
        description,
        subjectId,
        isUrgant: isUrgent,
        status: 1,
        studentId,
        files: uploadedFiles,
      };

      const formData = new FormData();
      for (const key in record) {
        if (record.hasOwnProperty(key)) {
          const value = record[key];
          if (Array.isArray(value)) {
            // Assuming here you want to append each file separately
            value.forEach((file) => formData.append(key, file));
          } else {
            // Convert everything else to string to ensure compatibility with FormData
            formData.append(key, value.toString());
          }
        }
      }

      const response = await createAPIEndpoint(ENDPOINTS.posts).post(formData);

      if (response.status === 200) {
        if (document) {
          (
            document.getElementById("newOrderModal-close") as HTMLFormElement
          ).click();
          (
            document.getElementById("successfulOrder_modal") as HTMLFormElement
          ).showModal();
        }
      }

      console.log(response);
    } catch (err) {
      console.error(err);
      // Update error messages state with an array of error messages
      if (err instanceof Yup.ValidationError) {
        setErrorMessages(err.errors);
      }
    }
  };

  return (
    <>
      <dialog
        id="newOrder_modal"
        className="modal modal-bottom sm:modal-middle sm:min-w-[70vw] z-50"
      >
        <div className="modal-box sm:min-w-[70vw]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-gray-300"
              id="newOrderModal-close"
            >
              ✕
            </button>
          </form>
          <form onSubmit={onSubmit}>
            <h1
              className="text-xl font-bold text-main-purple text-center mt-4 sm:text-2xl
            transition-all ease-in duration-100
            "
            >
              რითი შეგვიძლია თქვენი დახმარება?
            </h1>
            <div className="w-full text-center">
              <Link
                to={"/services/prices"}
                className="text-main-purple hover:text-main-red text-center min-w-full text-xs"
              >
                *იხილეთ ჩვენი ფასები და ტარიფები
              </Link>
            </div>
            <div className="my-8">
              <h2 className="text-main-purple font-bold">ზოგადი ინფორმაცია</h2>
              <input
                type="text"
                placeholder="დასახელება"
                className="input input-bordered w-full my-2 text-main-purple"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="textarea textarea-bordered w-full h-72 max-h-96 my-2 overflow-y-scroll text-main-purple"
                placeholder="აღგვიწერეთ თქვენი პრობლემა, გვითხარით ყველაფერი, რაშიც დახმარება გჭირდებათ"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="my-8">
              <h2 className="text-main-purple font-bold mb-2">
                აირჩიეთ საგანი საგნის კოდის მიხედვით
                <br />
                (ქვემოთ მოცემულია ყველა საგანი, რომელიც თქვენს უნივერსიტეტში
                ისწავლება)
              </h2>
              {subjects && (
                <Autocomplete
                  items={subjects.map((subject) => subject.id)}
                  label="აირჩიეთ საგანი"
                  value={subjectId}
                  onChange={setSubjectId}
                  displayItems={subjects.map(
                    (subject) => `${subject.name} (${subject.code})`
                  )}
                />
              )}
            </div>
            <div className="my-8">
              <h2 className="text-main-purple font-bold">
                დამატებითი ინფორმაცია
              </h2>
              <div className="form-control">
                <label className="label cursor-pointer max-w-20 flex justify-between">
                  <input
                    type="checkbox"
                    className="checkbox mr-2"
                    checked={isUrgent}
                    onClick={() => setIsUrgent(!isUrgent)}
                  />
                  <div
                    className="tooltip tooltip-right"
                    data-tip="თუ თქვენ ჩვენი სერვისი საჩქაროთ გჭირდებათ (იგულისხმება, რომ საქმე შესრულებული იქნება 6 საათში ან უფრო ნაკლებში),
                    ემატება საშუალოდ 8%-12%
                    "
                  >
                    <span className="label-text">საჩქაროა?</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="my-8">
              <h2 className="text-main-purple font-bold">საჭირო მასალები</h2>
              <DragNDrop
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
              />
            </div>
            {errorMessages && (
              <div className="my-8 text-main-red">
                {errorMessages.map((error) => (
                  <h4 className="font-bold text-center">{error}</h4>
                ))}
              </div>
            )}
            <button
              type="submit"
              className="btn bg-main-purple text-white w-full mt-2 hover:bg-main-red"
            >
              შეკვეთა
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default NewOrderModal;
