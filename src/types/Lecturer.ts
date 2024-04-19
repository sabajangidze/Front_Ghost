import Subject from "./Subject";

export default interface Lecturer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    subjects?: Subject[];
}