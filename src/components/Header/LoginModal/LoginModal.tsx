import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IoPersonCircleSharp } from "react-icons/io5";
import { FaMobile } from "react-icons/fa6";
import { FaRepeat } from "react-icons/fa6";

import * as Yup from "yup";
import axios from "axios";
import {
  ENDPOINTS,
  createAPIEndpoint,
  createStandartAPIEndpoint,
} from "../../../api/api";
import Cookies from "universal-cookie";

import { JwtPayload, jwtDecode } from "jwt-decode";
import { useAppDispatch } from "../../../hooks/hooks";
import { setUser } from "../../../redux/slices/tokenSlice";
import ConfirmEmailModal from "../ConfirmEmailModal/ConfirmEmailModal";
import SuccessfulRegistrationModal from "../SuccessfulRegistrationModal/SuccessfulRegistrationModal";
import ResetPasswordModal from "../ResetPasswordModal/ResetPasswordModal";
import UserRoles from "../../../types/UserRoles";
import { getRole } from "../../../services/HelpersFunctions/GetPrimaryRole";
import { setRelationId, setUniversityId } from "../../../redux/slices/userSlice";

interface TokenPayload {
  aud?: string;
  email?: string;
  exp?: number;
  iss?: string;
  permissions?: string[];
  sub?: string;
  sid?: string;
}

// Define a type for the slice state
interface Token extends TokenPayload {}

function LoginModal() {
  const [regEmail, setRegEmail] = useState("");
  const [regFirstName, setRegFirstName] = useState("");
  const [regLastName, setRegLastName] = useState("");
  const [regPhoneNumber, setRegphoneNumber] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  const [uniId, setUniId] = useState("");

  const [errors, setErrors] = useState<string[]>([]);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const RegisterSchema = Yup.object().shape({
    regEmail: Yup.string()
      .required("მიუთითეთ ელ. ფოსტა!")
      .min(1)
      .email("მიუთითეთ სწორი ელ. ფოსტა!"),
    regFirstName: Yup.string().required("მიუთითეთ სახელი!").min(1),
    regLastName: Yup.string().required("მიუთითეთ გვარი!").min(1),
    regPhoneNumber: Yup.string()
      .matches(
        /^[0-9+ ]+$/,
        'ტელ. ნომერი შეიცავს მხოლოდ ციფრებს, ასევე "+" და სიმბოლოებს'
      )
      .required("მიუთითეთ ტელ. ნომერი!")
      .length(9, "ტელეფონის ნომერი უნდა იყოს შემდეგ ფორმატში: 5XXxxXXxx"),
    regPassword: Yup.string()
      .required("მიუთითეთ პაროლი!")
      .min(6, "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო!"),
    regConfirmPassword: Yup.string()
      .required("გაიმეორეთ პაროლი!")
      .min(6, "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო!")
      .oneOf([Yup.ref("regPassword")], "გამეორებული პაროლი არ ემთხვევა!"),
  });

  const LoginSchema = Yup.object().shape({
    logEmail: Yup.string()
      .required("ჩაწერეთ ელ. ფოსტა!")
      .min(1)
      .email("ჩაწერეთ სწორი ელ. ფოსტა!"),
    logPassword: Yup.string().required("ჩაწერეთ პაროლი!").min(1),
  });

  const cookies = new Cookies();

  const handleRegisterSubmit = async (e: any) => {
    e.preventDefault();

    setErrors([]);

    const formData = {
      regEmail: regEmail,
      regFirstName: regFirstName,
      regLastName: regLastName,
      regPhoneNumber: regPhoneNumber,
      regPassword: regPassword,
      regConfirmPassword: regConfirmPassword,
    };

    try {
      // Validate form data
      await RegisterSchema.validate(formData);

      const regData = {
        email: regEmail,
        firstName: regFirstName,
        lastName: regLastName,
        password: regPassword,
        phoneNumber: regPhoneNumber,
        roleId: UserRoles.Student,
      };

      console.log(regData);

      const response = await createStandartAPIEndpoint(ENDPOINTS.register).post(
        regData
      );

      const emailResponse = await createStandartAPIEndpoint(
        ENDPOINTS.sendEmail
      ).post({ email: regEmail });

      console.log(response.data.studentId);
      cookies.set("relation_id", response.data.studentId);
      dispatch(setRelationId(response.data.studentId));

      if (response.status === 200 && emailResponse.status === 200) {
        if (document) {
          (
            document.getElementById("loginModal-close") as HTMLFormElement
          ).click();
          (
            document.getElementById("confirmEmail_modal") as HTMLFormElement
          ).showModal();
        }
      }
    } catch (error: any) {
      // Explicitly define the type of 'error'
      if (error.name === "ValidationError") {
        console.error("Validation Error:", error.errors);
        error.errors.forEach((errorMessage: string) => {
          setErrors((prevErrors) => [...prevErrors, errorMessage]);
        });
      } else {
        console.error("Error:", error);
      }
    }
  };

  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();

    setErrors([]);

    const formData = {
      logEmail: logEmail,
      logPassword: logPassword,
    };

    try {
      // Validate form data
      await LoginSchema.validate(formData);

      const logData = {
        email: logEmail,
        password: logPassword,
      };

      // console.log(logData);

      const response = await createStandartAPIEndpoint(ENDPOINTS.login).post(
        logData
      );

      if (response.status === 200) {
        console.log(response);

        interface CustomJwtPayload extends JwtPayload {
          sid: string;
          roles: string;
        }

        const token = response.data;

        const decoded = jwtDecode(token) as CustomJwtPayload;

        console.log(decoded);
        const expirationTime = decoded.exp
          ? new Date(decoded.exp * 1000)
          : new Date(); // Fallback to current time if 'exp' is undefined

        cookies.set("jwt_token", token, { expires: expirationTime });

        console.log(decoded.sid);
        cookies.set("relation_id", decoded.sid);

        if (getRole(decoded.roles as string) === UserRoles.Student) {
          const getUniversityIdFromStudentId = async (id: string) => {
            try {
              const uniResponse = await createAPIEndpoint(
                ENDPOINTS.users
              ).getById(id);

              if (uniResponse.status === 200) {
                // console.log(uniResponse.data);
                setUniId(uniResponse.data.student.university.id);
                cookies.set(
                  "university_id",
                  uniResponse.data.student.university.id
                );
                console.log(uniResponse.data);
                dispatch(
                  setUniversityId(
                    uniResponse.data.student.university.id as string
                  )
                );
              }
            } catch (e) {
              console.error(e);
            }
          };

          await getUniversityIdFromStudentId(decoded.sid as string);
        }

        dispatch(setUser(decoded as Partial<Token>));
        dispatch(setRelationId(decoded.sid as string));

        // navigate(0);
      }
    } catch (error: any) {
      // Explicitly define the type of 'error'
      if (error.name === "ValidationError") {
        console.error("Validation Error:", error.errors);
        error.errors.forEach((errorMessage: string) => {
          setErrors((prevErrors) => [...prevErrors, errorMessage]);
        });
      } else {
        console.error(error);
        setErrors(["ელ. ფოსტა ან პაროლი არასწორია!"]);
      }
    }
  };

  return (
    <>
      <dialog
        id="login_modal"
        className="modal modal-bottom sm:modal-middle z-50"
      >
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-gray-300"
              id="loginModal-close"
            >
              ✕
            </button>
          </form>
          <div className="flex justify-center items-center">
            <div className="mobile_wrapper text-main-purple py-4">
              <h1 className="text-xl text-center font-bold my-3">
                შესვლა სისტემაში
              </h1>
              <div
                role="tablist"
                className="tabs tabs-bordered grid grid-cols-2"
              >
                <input
                  type="radio"
                  name="tab_login"
                  role="tab"
                  className="tab w-1/2 mb-4 "
                  aria-label="ავტორიზაცია"
                  defaultChecked
                />
                <div
                  role="tabpanel"
                  className="tab-content bg-base-100 border-base-300 rounded-box p-6
                "
                >
                  <form action="" onSubmit={handleLoginSubmit}>
                    <label className="input input-bordered flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                      >
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                      </svg>
                      <input
                        type="text"
                        className="grow text-sm"
                        placeholder="ელ. ფოსტა"
                        onChange={(e) => setLogEmail(e.target.value)}
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <input
                        type="password"
                        className="grow text-sm"
                        placeholder="პაროლი"
                        onChange={(e) => setLogPassword(e.target.value)}
                      />
                    </label>
                    <span
                      className="text-xs hover:cursor-pointer hover:text-main-red"
                      onClick={() => {
                        if (document) {
                          (
                            document.getElementById(
                              "loginModal-close"
                            ) as HTMLFormElement
                          ).click();
                          (
                            document.getElementById(
                              "resetPassword_modal"
                            ) as HTMLFormElement
                          ).showModal();
                        }
                      }}
                    >
                      დაგავიწყდა პაროლი?
                    </span>
                    <br />
                    <button
                      type="submit"
                      className="btn btn-block mt-2 bg-main-purple text-white hover:bg-main-red"
                    >
                      შესვლა
                    </button>
                  </form>
                  {errors && (
                    <h2 className="my-4 text-md text-main-red">
                      {errors.toString()}
                    </h2>
                  )}
                </div>

                <input
                  type="radio"
                  name="tab_login"
                  role="tab"
                  className="tab mb-4"
                  aria-label="რეგისტრაცია"
                />
                <div
                  role="tabpanel"
                  className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                >
                  <form action="" onSubmit={handleRegisterSubmit}>
                    <label className="input input-bordered flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                      >
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                      </svg>
                      <input
                        type="text"
                        className="grow text-sm"
                        placeholder="ელ. ფოსტა"
                        onChange={(e) => setRegEmail(e.target.value)}
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-2">
                      <IoPersonCircleSharp />
                      <input
                        className="grow text-sm"
                        placeholder="სახელი"
                        onChange={(e) => setRegFirstName(e.target.value)}
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-2">
                      <IoPersonCircleSharp />
                      <input
                        className="grow text-sm"
                        placeholder="გვარი"
                        onChange={(e) => setRegLastName(e.target.value)}
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-2">
                      <FaMobile />
                      <input
                        className="grow text-sm"
                        placeholder="ტელეფონის ნომერი"
                        onChange={(e) => setRegphoneNumber(e.target.value)}
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <input
                        type="password"
                        className="grow text-sm"
                        placeholder="პაროლი"
                        onChange={(e) => setRegPassword(e.target.value)}
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-2">
                      <FaRepeat />
                      <input
                        type="password"
                        className="grow text-sm"
                        placeholder="გაიმეორეთ პაროლი"
                        onChange={(e) => setRegConfirmPassword(e.target.value)}
                      />
                    </label>
                    <Link to={"/"} className="text-xs">
                      რეგისტრაციით, ეთანხმებით წესებსა და პირობებს
                    </Link>
                    <button
                      type="submit"
                      className="btn btn-block mt-2
                bg-main-purple text-white
                hover:bg-main-red
                "
                    >
                      ანგარიშის შექმნა
                    </button>
                  </form>
                  {errors && (
                    <h2 className="my-4 text-md text-main-red">
                      {errors.toString()}
                    </h2>
                  )}
                </div>
              </div>
              <div className="w-full flex mt-4">
                <img
                  src={process.env.PUBLIC_URL + "/images/Logo-Black-Text.png"}
                  className="h-12"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </dialog>
      <ConfirmEmailModal email={regEmail} />
      <SuccessfulRegistrationModal />
      <ResetPasswordModal />
    </>
  );
}

export default LoginModal;
