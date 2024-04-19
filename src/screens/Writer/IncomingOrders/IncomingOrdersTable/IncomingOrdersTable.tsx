import React, { useEffect, useState } from "react";
import TableHead from "./TableHead";
import Post from "../../../../types/Post";
import TableRow from "./TableRow";
import { ENDPOINTS, createAPIEndpoint } from "../../../../api/api";

function IncomingOrdersTable() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
        try{
            const response = await createAPIEndpoint(ENDPOINTS.activePosts).get();

            if(response.status === 200){
                setPosts(response.data.posts);
            }
        }
        catch(err){
            console.error(err);
        }
    }

    fetchPosts();
  },[])  

  console.log(posts);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-xs">
        {/* head */}
        <TableHead />
        <tbody>
          {posts &&
            posts.map((post, index) => <TableRow key={post.id} post={post} />)}
        </tbody>
      </table>
    </div>
  );
}

export default IncomingOrdersTable;
