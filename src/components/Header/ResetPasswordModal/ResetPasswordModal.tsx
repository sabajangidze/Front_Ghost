import React, { useState } from "react";
import { ENDPOINTS, createStandartAPIEndpoint } from "../../../api/api";

import { VscSmiley } from "react-icons/vsc";


import * as Yup from "yup";


function ResetPasswordModal() {

  const ChangePasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("მიუთითეთ პაროლი!")
      .min(6, "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო!"),
    repeatNewPassword: Yup.string()
      .required("გაიმეორეთ პაროლი!")
      .min(6, "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო!")
      .oneOf([Yup.ref("newPassword")], "გამეორებული პაროლი არ ემთხვევა!"),
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [disableSteps, setDisableSteps] = useState(false);

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  const [errors, setErrors] = useState<string[]>([]);

  const handleStep1Submit = async () => {
    setErrors([]);
    try{
      const response = await createStandartAPIEndpoint(ENDPOINTS.sendEmail).post({email});

      if(response.status === 200){
        setCurrentStep(2);
      }
    }catch(err){
      console.error(err);
      setErrors(["შეცდომაა, ან მეილი არ არსებობს ან სისტემა არ მუშაობს."])
    }
  }
  const handleStep2Submit = async () => {
    setErrors([]);
    try{
      const response = await createStandartAPIEndpoint(ENDPOINTS.verifyEmail).post({token:code, email});

      if(response.status === 200){
        setCurrentStep(3);
      }
    }catch(err){
      console.error(err);
      setErrors(["კოდი არასწორია!"])
    }
  }
  const handleStep3Submit = async () => {
    setErrors([]);
    try{
      const formData = {
        newPassword:newPassword,
        repeatNewPassword: repeatNewPassword
      }
      await ChangePasswordSchema.validate(formData);

      const response = await createStandartAPIEndpoint(ENDPOINTS.resetPassword).post({email:email, newPassword:newPassword});

      if(response.status === 200){
        setDisableSteps(true);
        setCurrentStep(4);
      }
    }catch(err){
      console.error(err);
      setErrors(["კოდი არასწორია!"])
    }
  }

  return (
    <dialog
      id="resetPassword_modal"
      className="modal modal-bottom sm:modal-middle w-full z-54"
    >
      <div className="modal-box flex flex-col items-center ">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-gray-300">
            ✕
          </button>
        </form>
        <div className="flex flex-col justify-center items-center w-full py-4 lg:justify-between lg:w-full lg:p-4">
          <div className="flex flex-col w-full">
            <h1 className="w-full text-center text-xl text-main-purple font-bold">
              პაროლის შეცვლა
            </h1>
            <ul className="steps w-full">
              <li
                className={`step ${
                  currentStep >= 1 && "step-primary"
                } text-main-purple ${disableSteps ? ' ' : 'hover:cursor-pointer'}`}
                onClick={() => {
                  if(!disableSteps)setCurrentStep(1);
                }}
              >
                ელ. ფოსტა
              </li>
              <li
                className={`step ${
                  currentStep >= 2 && "step-primary"
                } text-main-purple  ${disableSteps ? ' ' : 'hover:cursor-pointer'}`}
                onClick={() => {
                  if(!disableSteps)setCurrentStep(2);
                }}
              >
                დადასტურება
              </li>
              <li
                className={`step ${
                  currentStep >= 3 && "step-primary"
                } text-main-purple  ${disableSteps ? ' ' : 'hover:cursor-pointer'}`}
                onClick={() => {
                  if(!disableSteps)setCurrentStep(3);
                }}
              >
                ახალი პაროლი
              </li>
            </ul>
            {currentStep === 1 && (
              <>
                <div>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      className="grow text-main-purple"
                      placeholder="ჩაწერეთ თქვენი ელ. ფოსტა"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="w-4 h-4 opacity-70 text-main-purple"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                  </label>
                </div>
                <button
                  className="btn bg-main-purple text-white hover:bg-main-red"
                  onClick={handleStep1Submit}
                >
                  შემდეგი
                </button>
              </>
            )}
            {currentStep === 2 && (
              <>
                <div>
                  <h1 className="text-main-purple text-center text-sm">თქვენს ელ. ფოსტაზე <span className="font-bold">({email})</span> გამოგზავნილია კოდი, რომელიც უნდა ჩაწეროთ ქვემოთ:</h1>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      className="grow text-main-purple"
                      placeholder="ჩაწერეთ კოდი"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="w-4 h-4 opacity-70 text-main-purple"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                  </label>
                </div>
                <button
                  className="btn bg-main-purple text-white hover:bg-main-red"
                  onClick={handleStep2Submit}
                >
                  შემოწმება
                </button>
              </>
            )}
            {currentStep === 3 && (
              <>
                <div>
                  <h1 className="text-main-purple text-center text-lg font-bold">შექმენით ახალი პაროლი:</h1>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      className="grow text-main-purple"
                      placeholder="ჩაწერეთ ახალი პაროლი"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="w-4 h-4 opacity-70 text-main-purple"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      className="grow text-main-purple"
                      placeholder="გაიმეორეთ ახალი პაროლი"
                      value={repeatNewPassword}
                      onChange={(e) => setRepeatNewPassword(e.target.value)}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="w-4 h-4 opacity-70 text-main-purple"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                  </label>
                </div>
                <button
                  className="btn bg-main-purple text-white hover:bg-main-red"
                  onClick={handleStep3Submit}
                >
                  დადასტურება
                </button>
              </>
            )}
            {currentStep === 4 && (
              <>
                  <div className="text-main-purple text-center text-lg font-bold items-center flex flex-col justify-center">
                    <VscSmiley size={160} />
                    <h1 className="text-main-purple text-center text-lg font-bold">პაროლი შეცვლილია</h1>
                  </div>
              </>
            )}
            {errors && (<h1 className="text-main-red text-sm text-center">{errors.toString()}</h1>)}
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ResetPasswordModal;
