import Lecturer from "./Lecturer";
import University from "./University";

export default interface Subject {
    id: string;
    name: string;
    code: string;
    university: University;
    lecturer: Lecturer;
}