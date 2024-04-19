import React, { useEffect, useState } from "react";
import Post from "../../../../types/Post";
import { FetchPosts } from "../../../../api/FetchInformation";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

function PostsTable() {
  const [posts, setPosts] = useState<Post[]>([]); // Use [] instead of null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  console.log(posts);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <TableHead />
        <tbody>
          {posts &&
            posts.map((post, index) => (
              <TableRow
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                status={post.status}
                subject={post.subject}
                student={post.student}
                writer={post.writer}
                created={post.created}
                isUrgent={post.isUrgent}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostsTable;
