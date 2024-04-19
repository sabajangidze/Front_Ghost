import Post from "./Post";
import University from "./University";

export default interface User {
    id: string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    registrationDateUtc: string;
    university?: University;
    posts?: Post[]
}