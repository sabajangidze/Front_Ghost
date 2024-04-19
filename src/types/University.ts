import Subject from "./Subject";
import User from "./User";

export default interface University {
    id: string;
    name: string;
    subjects?: Subject[]
    students?: User[];
}