import React, { useEffect, useState } from "react";
import Post from "../../../types/Post";
import {
  ENDPOINTS,
  createAPIEndpoint,
  createStandartAPIEndpoint,
} from "../../../api/api";
import { useAppSelector } from "../../../hooks/hooks";
import OrderCard from "../../../components/Orders/OrderCard/OrderCard";

import { FaBeerMugEmpty } from "react-icons/fa6";
import { GiEmptyHourglass } from "react-icons/gi";


function MyOrders() {
  const [posts, setPosts] = useState<Post[]>([]);

  const studentId = useAppSelector((state) => state.user.relationId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await createStandartAPIEndpoint(
          ENDPOINTS.users
        ).getByIdParam(studentId, ENDPOINTS.posts);

        setPosts(response.data.posts);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  console.log(posts);
  return (
    <div>
      <div className="header_space "></div>
      <div className="flex flex-col justify-center items-center">
        <div className="wrapper">
          <h1 className="text-lg font-bold text-main-purple lg:text-2xl text-center my-4">
            ჩემი შეკვეთებები:
          </h1>
          <div className="my-4">
            <h2 className="text-main-purple font-bold text-sm lg:text-lg
            my-6
            ">
              ბოლო 1 კვირაში:
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {posts &&
                posts.sort((post1, post2) => new Date(post2.created).getTime() - new Date(post1.created).getTime()).map((post,index) => {
                  if (
                    Date.now() - new Date(post.created).getTime() <=
                    7 * 24 * 60 * 60 * 1000
                  ) {
                    return <OrderCard key={post.id} post={post} index={index}/>;
                  }
                })}
            </div>
          </div>
          {posts &&
              posts.filter(
                (post) =>
                  Date.now() - new Date(post.created).getTime() <=
                  7 * 24 * 60 * 60 * 1000
              ).length === 0 && (
                <div className="flex flex-col justify-center items-center
                border-main-purple border-2 border-solid p-8 rounded-3xl group
                hover:bg-main-red cursor-pointer
                transition-all duration-100 ease-in
                ">
                  <FaBeerMugEmpty size={'100%'} className="w-32 h-32 text-main-purple my-4 group-hover:text-white" />
                  <h2 className="font-bold group-hover:text-white text-center">თქვენ ბოლო 1 კვირაში არაფერი შეგიკვეთიათ!</h2>
                </div>
              )}
          <div className="my-4">
            <h2 className="text-main-purple font-bold text-sm lg:text-lg
            my-6
            ">
              1 კვირაზე ძველები:
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {posts &&
                posts.sort((post1, post2) => new Date(post2.created).getTime() - new Date(post1.created).getTime()).map((post, index) => {
                  if (
                    Date.now() - new Date(post.created).getTime() >
                    7 * 24 * 60 * 60 * 1000
                  ) {
                    return <OrderCard key={post.id} post={post} index={index} />;
                  }
                })}
            </div>
            {posts &&
              posts.filter(
                (post) =>
                  Date.now() - new Date(post.created).getTime() >=
                  7 * 24 * 60 * 60 * 1000
              ).length === 0 && (
                <div className="flex flex-col justify-center items-center
                border-main-purple border-2 border-solid p-8 rounded-3xl group
                hover:bg-main-red cursor-pointer
                transition-all duration-100 ease-in
                ">
                  <GiEmptyHourglass size={'100%'} className="w-32 h-32 text-main-purple my-4 group-hover:text-white" />
                  <h2 className="font-bold group-hover:text-white text-center">თქვენ 1 კვირაზე ძველი შეკვეთები არ გაქვთ!</h2>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
