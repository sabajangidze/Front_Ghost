import { ENDPOINTS, createAPIEndpoint } from "./api";

export const FetchUniversities = async () => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.universities).get();
                if (response.status === 200) {
                    return response.data.universities;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}
export const GetUniversityById = async (Id) => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.universities).getById(Id);
                if (response.status === 200) {
                    return response.data.university;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}
export const GetUniversitySubjects = async (Id) => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.universities, ENDPOINTS.subjects).getById(Id);
                if (response.status === 200) {
                    return response.data.subjects;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}
export const GetUniversityUsers = async (Id) => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.universities, ENDPOINTS.users).getById(Id);
                if (response.status === 200) {
                    return response.data.students;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}

export const FetchLecturers = async () => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.lecturers).get();
                if (response.status === 200) {
                    return response.data.lecturers;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}
export const GetLecturerById = async (Id) => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.lecturers).getById(Id);
                if (response.status === 200) {
                    return response.data.lecturer;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}

export const FetchSubjects = async () => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.subjects).get();
                if (response.status === 200) {
                    return response.data.subjects;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}
export const GetSubjectById = async (Id) => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.subjects).getById(Id);
                if (response.status === 200) {
                    return response.data.subject;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}

export const FetchWriters = async () => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.writers).get();
                if (response.status === 200) {
                    return response.data.writers;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}
export const GetWriterById = async (Id) => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.writers).getById(Id);
                if (response.status === 200) {
                    return response.data.writer;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}
export const GetWriterPosts = async (Id) => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.writers, ENDPOINTS.posts).getById(Id);
                if (response.status === 200) {
                    return response.data.posts;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}

export const FetchPosts = async () => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.posts).get();
                if (response.status === 200) {
                    return response.data.posts;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}
export const GetPostById = async (Id) => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.posts).getById(Id);
                if (response.status === 200) {
                    return response.data.post;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}

export const FetchUsers = async () => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.users).get();
                if (response.status === 200) {
                    return response.data.students;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}
export const GetUserById = async (Id) => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.users).getById(Id);
                if (response.status === 200) {
                    return response.data.student;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}
export const GetUserPosts = async (Id) => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.users, ENDPOINTS.posts).getById(Id);
                if (response.status === 200) {
                    return response.data.posts;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}

export const FetchOrders = async () => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.orders).get();
                if (response.status === 200) {
                    return response.data.orders;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}
export const GetOrderById = async (Id) => {
    try{
        const response = await createAPIEndpoint(ENDPOINTS.orders).getById(Id);
                if (response.status === 200) {
                    return response.data.order;
                } else {
                    console.error('Login failed:', response.statusText);
                }
    }
    catch(err){
        console.error(err);
    }
}

