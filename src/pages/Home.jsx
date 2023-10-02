import { data } from "autoprefixer";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const retrievePosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

function Home() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery("postsData", retrievePosts);
  // console.log({data:posts},error , isLoading);
  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <div className="flex h-96 my-6">
        <div className="flex-1">
          <p className="text-5xl font-medium p-2 text-start">
            Present food dishes according to your taste!
          </p>
          <p className="text-sm font-light p-2 text-start">
            when your stomach starts to sound, it's time to find your favorie
            food and eat as eagery as you want.
          </p>
          <div className=" flex w-[90%] h-1/4 bg-orange-dark m-auto mt-16 rounded-lg">
            <div className="flex-1 bg-green"></div>
            <div className="flex-auto bg-black"></div>
            <div className="flex-auto bg-gray"></div>
          </div>
        </div>
        <div className="flex-1">
          <div className="h-full bg-orange-dark rounded-lg"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
