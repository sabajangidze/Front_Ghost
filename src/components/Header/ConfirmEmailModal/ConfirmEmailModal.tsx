import React, { useEffect, useState } from "react";

import { MdEmail } from "react-icons/md";
import University from "../../../types/University";
import { FetchUniversities } from "../../../api/FetchInformation";
import { ENDPOINTS, createAPIEndpoint, createStandartAPIEndpoint } from "../../../api/api";
import { useAppSelector } from "../../../hooks/hooks";
import Cookies from "universal-cookie";

interface ConfirmEmailModalProps {
    email: string;
}

function ConfirmEmailModal({email}:ConfirmEmailModalProps) {
  const [errors, setErrors] = useState<string[]>([]);
  const [university, setUniversity] = useState("");
  const [code, setCode] = useState("");

 const studentId = useAppSelector((state) => state.user.relationId);

  const [allUniversities, setAllUniversities] = useState<University[]>([]);

  useEffect(() => {
    const fetchData = async () => {
        const uniData = await FetchUniversities();
        setAllUniversities(uniData);
    }
    
    fetchData();
  }, []);

  // console.log(university);
  // console.log(studentId);
  // console.log(allUniversities);

  const handleSubmit = async () => {
    try{
        const verifyResponse = await createStandartAPIEndpoint(ENDPOINTS.verifyEmail).post({token:code,email:email});
        const uniResponse = await createAPIEndpoint(ENDPOINTS.users, ENDPOINTS.university).patch({id:studentId,universityId:university})
        if(verifyResponse.status === 200 && uniResponse.status === 200){
            if(document){
                (
                    document.getElementById("confirmEmail-close") as HTMLFormElement
                  ).click();
                (
                    document.getElementById("successfulRegistration_modal") as HTMLFormElement
                  ).showModal();
            }
        }

        const cookies = new Cookies();
        cookies.remove('relation_id');
    }catch(err){
        console.error(err);
        setErrors(["კოდი არასწორია ან 3 წუთი გასულია!"]);
    }
  }

  return (
    <dialog
      id="confirmEmail_modal"
      className="modal modal-bottom sm:modal-middle z-50"
    >
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-gray-300"
          id="confirmEmail-close"
          >
            ✕
          </button>
        </form>
        <div className="flex justify-center items-center">
          <div className="mobile_wrapper text-main-purple py-4">
            <h1 className="text-xl text-center font-bold my-2">
              თქვენი ანგარიში შექმნილია,<br /> ახლა დაასტურეთ იგი
            </h1>
            <h3
              className="text-sm w-full text-center
            my-2
            "
            >
              თქვენ გაქვთ <span className="font-bold">3 წუთი,</span> რომ მოცემულ
              ელ. ფოსტაზე <span className="font-bold">({email})</span> გადახვიდეთ და ჩაწეროთ კოდი ქვემოთ
            </h3>
            <label className="input input-bordered flex items-center gap-2 my-4">
              <input
                type="text"
                className="grow text-sm"
                placeholder="ჩაწერეთ ელ. ფოსტაზე მოსული კოდი"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <MdEmail />
            </label>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">და</div>
            </div>
            <label className="form-control w-full mb-2">
              <div className="label">
                <span className="label-text">აირჩიეთ თქვენი უნივერსიტეტი:</span>
              </div>
              <select className="select select-bordered w-full"
              onChange={(e) => setUniversity(e.target.value)}
              >
                <option disabled selected>
                  უნივერსიტეტები
                </option>
                {allUniversities && 
                allUniversities.map((university, index) => (
                    <option 
                    key={university.id}
                    value={university.id}>
                        {university.name}
                    </option>
                ))
                }
              </select>
            </label>
            <label className="text-xs leading-[4px] text-main-red my-2">
              <span className="font-bold">*გაითვალისწინეთ,</span> რომ თქვენს მიერ არჩეული უნივერსიტეტის მიხედვით
              ჩვენ შევძლებთ თქვენთვის საუკეთესო მწერლის პოვნას, ასე რომ,
              მიუთითეთ თქვენი ნამდვილი სასწავლო ადგილი.
            </label>
            <button
              className="btn btn-block mt-8
            bg-main-purple text-white
            hover:bg-main-red
            "
            onClick={handleSubmit}
            >
              დადასტურება
            </button>
            {errors && <h1 className="text-xs">{errors.toString()}</h1>}
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ConfirmEmailModal;
