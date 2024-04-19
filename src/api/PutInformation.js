import { createAPIEndpoint, ENDPOINTS } from "./api";

export const UpdateUniversity = async (id, uniName) => {
    try {
        console.log(id,' ',uniName);
        const response = await createAPIEndpoint(ENDPOINTS.universities).put({ id,name: uniName });
        console.log('University updated successfully:', response.data);
    } catch (error) {
        console.error('Error updating university:', error);
    }
}

export const UpdateLecturer = async (id, firstName, lastName, phoneNumber, email) => {
    try {
        const response = await createAPIEndpoint(ENDPOINTS.lecturers).put({ id, firstName, lastName, phoneNumber, email });
        console.log('Lecturer updated successfully:', response.data);
    } catch (error) {
        console.error('Error updating university:', error);
    }
}

export const UpdateSubject = async (id, name, code, universityId, lecturerId) => {
    try {
        const response = await createAPIEndpoint(ENDPOINTS.subjects).put({ id, name, code, universityId, lecturerId });
        console.log('Lecturer updated successfully:', response.data);
    } catch (error) {
        console.error('Error updating university:', error);
    }
}

export const UpdateWriter = async (id, firstName, lastName, email, phoneNumber) => {
    try {
        const response = await createAPIEndpoint(ENDPOINTS.writers).put({ id, firstName, lastName, email, phoneNumber });
        console.log('Lecturer updated successfully:', response.data);
    } catch (error) {
        console.error('Error updating university:', error);
    }
}

export const UpdatePost = async (id, title, description, status, subjectId, studentId, writerId ) => {
    console.log(id, title, description, status, subjectId, studentId, writerId);
    try {
        const response = await createAPIEndpoint(ENDPOINTS.posts).put({ id, title, description, status, subjectId, studentId, writerId });
        console.log('Lecturer updated successfully:', response.data);
    } catch (error) {
        console.error('Error updating university:', error);
    }
}

export const UpdateUser = async (id, userName, email, firstName, lastName, phoneNumber, registrationDateUtc, universityId ) => {
    console.log(id, userName, email, firstName, lastName, phoneNumber, registrationDateUtc, universityId);
    try {
        const response = await createAPIEndpoint(ENDPOINTS.users).put({ id, userName, email, firstName, lastName, phoneNumber, registrationDateUtc, universityId });
        console.log('User updated successfully:', response.data);
    } catch (error) {
        console.error('Error updating university:', error);
    }
}