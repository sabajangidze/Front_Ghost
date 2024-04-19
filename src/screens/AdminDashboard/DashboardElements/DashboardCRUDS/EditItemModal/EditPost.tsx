import React, { useEffect, useState } from "react";
import User from "../../../../../types/User";
import Writer from "../../../../../types/Writer";
import Subject from "../../../../../types/Subject";
import PostStatus from "../../../../../types/PostStatus";
import { UpdatePost } from "../../../../../api/PutInformation";
import { FetchSubjects, FetchUsers, FetchWriters, GetPostById } from "../../../../../api/FetchInformation";

interface EditPostProps {
  id: string;
}

function EditPost({ id }: EditPostProps) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<PostStatus>(PostStatus.Open);
    const [subject, setSubject] = useState("");
    const [writer, setWriter] = useState("");
    const [user, setUser] = useState("");
  
    const [allSubjects, setAllSubjects] = useState<Subject[]>([]);
    const [allWriters, setAllWriters] = useState<Writer[]>([]);
    const [allUsers, setAllUsers] = useState<User[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await UpdatePost(id, name, description, status, subject, user, writer);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subjData = await FetchSubjects();
        setAllSubjects(subjData);
        const writData = await FetchWriters();
        setAllWriters(writData);
        const userData = await FetchUsers();
        setAllUsers(userData);

        const data = await GetPostById(id);
        console.log(data);
        setName(data.title);
        setDescription(data.description);
        setStatus(data.status);
        setSubject(data.subject.id);
        setWriter(data.writer.id);
        setUser(data.student.id);

      } catch (error) {
        console.error("Error fetching universities Or Lecturers:", error);
      }
    };

    fetchData();
  }, []);

  console.log(subject);
  console.log(user);
  console.log(writer);


  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="font-bold">შეცვალე პოსტი</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="დასახელება"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="აღწერა"
          className="input input-bordered w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="select select-bordered w-full"
          value={status}
          onChange={(e) => setStatus(Number(e.target.value))}
        >
          <option disabled>
            აირჩიე სტატუსი
          </option>
          <option value={PostStatus.Open} onClick={() => setStatus(PostStatus.Open)}>ღია</option>
          <option value={PostStatus.Assigned} onClick={() => setStatus(PostStatus.Assigned)}>აღებული</option>
          <option value={PostStatus.Completed} onClick={() => setStatus(PostStatus.Completed)}>დასრულებული</option>
        </select>

        <select
          className="select select-bordered w-full"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option disabled value="">
            აირჩიე საგანი
          </option>
          {allSubjects &&
            allSubjects.map((subject) => (
              <option
                key={subject.id}
                value={subject.id}
                onClick={() => setSubject(subject.id)}
              >
                {subject.name + ` ( ${subject.university.name} )`}
              </option>
            ))}
        </select>

        <select
          className="select select-bordered w-full"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        >
          <option disabled value="">
            აირჩიე მომხმარებელი
          </option>
          {allUsers &&
            allUsers.map((user) => (
              <option
                key={user.id}
                value={user.id}
                onClick={() => setUser(user.id)}
              >
                {user.userName + ` (${user.firstName + " " + user.lastName})`}
              </option>
            ))}
        </select>

        <select
          className="select select-bordered w-full"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
        >
          <option disabled value="">
            აირჩიე მწერალი
          </option>
          {allWriters &&
            allWriters.map((writer) => (
              <option
                key={writer.id}
                value={writer.id}
                onClick={() => setWriter(writer.id)}
              >
                {writer.firstName + " " + writer.lastName}
              </option>
            ))}
        </select>

        <button className="btn" type="submit">
          დადასტურება
        </button>
      </form>
    </div>
  );
}

export default EditPost;
