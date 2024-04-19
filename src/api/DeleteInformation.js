import { ENDPOINTS, createAPIEndpoint } from "./api";

export const DeleteUniversity = async (Id) => {
  try {
    const response = await createAPIEndpoint(ENDPOINTS.universities).delete(Id);
    
    if (response.status === 200) {
      return response;
    } else {
      console.error("University Deletion failed:", response.statusText);
    }
  } catch (err) {
    console.error(err);
  }
};

export const DeleteLecturer = async (Id) => {
  try {
    const response = await createAPIEndpoint(ENDPOINTS.lecturers).delete(Id);
    
    if (response.status === 200) {
      return response;
    } else {
      console.error("Lecturer Deletion failed:", response.statusText);
    }
  } catch (err) {
    console.error(err);
  }
};

export const DeleteSubject = async (Id) => {
  try {
    const response = await createAPIEndpoint(ENDPOINTS.subjects).delete(Id);
    
    if (response.status === 200) {
      return response;
    } else {
      console.error("Subject Deletion failed:", response.statusText);
    }
  } catch (err) {
    console.error(err);
  }
};

export const DeleteWriter = async (Id) => {
  try {
    const response = await createAPIEndpoint(ENDPOINTS.writers).delete(Id);
    
    if (response.status === 200) {
      return response;
    } else {
      console.error("Subject Deletion failed:", response.statusText);
    }
  } catch (err) {
    console.error(err);
  }
};

export const DeletePost = async (Id) => {
  try {
    const response = await createAPIEndpoint(ENDPOINTS.posts).delete(Id);
    
    if (response.status === 200) {
      return response;
    } else {
      console.error("Subject Deletion failed:", response.statusText);
    }
  } catch (err) {
    console.error(err);
  }
};

export const DeleteUser = async (Id) => {
  try {
    const response = await createAPIEndpoint(ENDPOINTS.users).delete(Id);
    
    if (response.status === 200) {
      return response;
    } else {
      console.error("user Deletion failed:", response.statusText);
    }
  } catch (err) {
    console.error(err);
  }
};

export const DeleteOrder = async (Id) => {
  try {
    const response = await createAPIEndpoint(ENDPOINTS.orders).delete(Id);
    
    if (response.status === 200) {
      return response;
    } else {
      console.error("order Deletion failed:", response.statusText);
    }
  } catch (err) {
    console.error(err);
  }
};