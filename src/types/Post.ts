import PostStatus from "./PostStatus";
import Subject from "./Subject";
import User from "./User";
import Writer from "./Writer";

export default interface Post {
    id: string;
    title: string;
    description: string;
    status: PostStatus;
    subject: Subject;
    student: User;
    writer?: Writer;
    created: string;
    isUrgent: boolean;
    fileDtoModels?: File[];
}

interface File {
    url: string;
    fileName: string;
}