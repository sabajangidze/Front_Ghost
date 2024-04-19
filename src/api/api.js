import axios from "axios";
import Cookies from "universal-cookie";

export const BASE_URL = "http://ec2-52-206-220-161.compute-1.amazonaws.com/";

export const ENDPOINTS = {
  universities: "Universities",
  lecturers: "Lecturers",
  subjects: "Subjects",
  posts: "Posts",
  writers: "Writers",
  users: "Students",
  orders: "Orders",
  register: "Members",
  login: "Members/Login",
  sendEmail: "Members/Send",
  verifyEmail: "Members/Verify",
  resetPassword: "Members/ResetPassword",
  university: "University",
  status: "Status",
  activePosts: "Posts/Active",
};

const getAuthHeaders = () => {
  const cookies = new Cookies();
  const token = cookies.get("jwt_token");

  const AuthHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return AuthHeaders;
};


export const createAPIEndpoint = (endpoint, subEndpont = "") => {
  let url = BASE_URL + "api/" + endpoint + "/";

  return {
    get: () => axios.get(url + subEndpont, getAuthHeaders()),
    getById: (id) => {
      console.log(getAuthHeaders());
      return axios.get(url + id + "/" + subEndpont, getAuthHeaders());
    },
    post: (newRecord) =>
      axios.post(url + "new" + "/" + subEndpont, newRecord, getAuthHeaders()),
    put: (updatedRecord) =>
      axios.put(
        url + "update" + "/" + subEndpont,
        updatedRecord,
        getAuthHeaders()
      ),
    delete: (id) =>
      axios.delete(url + "remove" + "/" + subEndpont, getAuthHeaders()),
    patch: (updatedRecord) =>
      axios.patch(
        url + "update" + "/" + subEndpont,
        updatedRecord,
        getAuthHeaders()
      ),
  };
};

export const createStandartAPIEndpoint = (endpoint) => {
  let url = BASE_URL + "api/" + endpoint + "/";

  return {
    get: () => axios.get(url),
    getById: (id) => {
      return axios.get(url + id, getAuthHeaders());
    },
    post: (newRecord) => {
      return axios.post(url, newRecord, getAuthHeaders());
    },
    put: (updatedRecord) => axios.put(url, updatedRecord, getAuthHeaders()),
    delete: (id) => axios.delete(url, { id }, getAuthHeaders()),
    getByIdParam: async (id, param) => {
      try {
        const response = await axios.get(
          url + id + "/" + param,
          getAuthHeaders()
        );
        return response; // This now correctly represents the Axios response
      } catch (error) {
        console.error("There was an error with the API call:", error);
        throw error; // Rethrow the error for further handling if necessary
      }
    },
  };
};
