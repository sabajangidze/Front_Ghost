import { ENDPOINTS, createAPIEndpoint } from "./api";

export const AddUniversity = async (uniName) => {
    try {
        const response = await createAPIEndpoint(ENDPOINTS.universities).post({ name: uniName });
        // Handle success response (e.g., show a success message)
        console.log('University added successfully:', response.data);
    } catch (error) {
        // Handle error (e.g., show an error message)
        console.error('Error adding university:', error);
    }
}

export const AddLecturer = async (firstName,lastName, phoneNumber, email) => {
    try {
        const response = await createAPIEndpoint(ENDPOINTS.lecturers).post({ firstName,lastName,phoneNumber,email });
        // Handle success response (e.g., show a success message)
        console.log('Lecturer added successfully:', response.data);
    } catch (error) {
        // Handle error (e.g., show an error message)
        console.error('Error adding Lecturer:', error);
    }
}

export const AddSubject = async (name,code, uniId, lectId) => {
    try {
        const response = await createAPIEndpoint(ENDPOINTS.subjects).post({ name, code, universityId: uniId, lecturerId: lectId });
        // Handle success response (e.g., show a success message)
        console.log('Subject added successfully:', response.data);
    } catch (error) {
        // Handle error (e.g., show an error message)
        console.error('Error adding Subject:', error);
    }
}

export const AddWriter = async (firstName, lastName, email, phoneNumber) => {
    try {
        const response = await createAPIEndpoint(ENDPOINTS.writers).post({ firstName, lastName, email, phoneNumber });
        // Handle success response (e.g., show a success message)
        console.log('Subject added successfully:', response.data);
    } catch (error) {
        // Handle error (e.g., show an error message)
        console.error('Error adding Subject:', error);
    }
}

export const AddPost = async (title, description, status, subjectId, studentId, writerId, isUrgent) => {
    try {
        console.log(title, description, status, subjectId, studentId, writerId, isUrgent);
        const response = null;
        if(writerId === "") response = await createAPIEndpoint(ENDPOINTS.posts).post({ title, description,isUrgant: Number(isUrgent),  status, subjectId, studentId, });
        else response = await createAPIEndpoint(ENDPOINTS.posts).post({ title, description,isUrgant: Number(isUrgent),  status, subjectId, studentId, writerId, });
        // Handle success response (e.g., show a success message)
        console.log('Post added successfully:', response.data);
    } catch (error) {
        // Handle error (e.g., show an error message)
        console.error('Error adding Subject:', error);
    }
}

export const AddUser = async (userName, email, firstName, lastName, phoneNumber, registrationDateUtc, universityId) => {
    try {
        console.log(userName, email, firstName, lastName, phoneNumber, registrationDateUtc, universityId);
        const response = await createAPIEndpoint(ENDPOINTS.users).post({ userName, email, firstName, lastName, phoneNumber, registrationDateUtc, universityId });
        // Handle success response (e.g., show a success message)
        console.log('user added successfully:', response.data);
    } catch (error) {
        // Handle error (e.g., show an error message)
        console.error('Error adding Subject:', error);
    }
}

export const AddOrder = async (amount, paymentDate, iBan, status, postId) => {
    try {
        console.log(amount, paymentDate, iBan, status, postId);
        const response = await createAPIEndpoint(ENDPOINTS.orders).post({ amount, paymentDate, iBan, status, postId });
        // Handle success response (e.g., show a success message)
        console.log('Order added successfully:', response.data);
    } catch (error) {
        // Handle error (e.g., show an error message)
        console.error('Error adding Subject:', error);
    }
}