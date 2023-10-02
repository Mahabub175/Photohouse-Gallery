/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { API_CONTEXT } from "../../utils/GlobalContext";
import { InstagramGallery } from "instagram-gallery";

interface Post {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  thumbnail_url: string;
  permalink: string;
}

const InstaGallery = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const initialPostsToDisplay = 12;
  const postsToLoad = 12;
  const [currentPage, setCurrentPage] = useState<number>(1);

  // const token: any = useContext(API_CONTEXT);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_KEY_CLIENT;
        const url = `https://graph.instagram.com/me/media?fields=id,username,media_url,media_type,permalink,caption&access_token=${accessToken}&pretty=1&limit=100`;
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data.data);
        setDisplayedPosts(data.data.slice(0, initialPostsToDisplay));
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };
    getPosts();
  }, []);

  // const loadMorePosts = () => {
  //   const endIndex = displayedPosts.length + postsToLoad;
  //   if (endIndex <= posts.length) {
  //     setDisplayedPosts(posts.slice(0, endIndex));
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  const totalPages = Math.ceil(posts.length / postsToLoad);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * postsToLoad;
    const endIndex = startIndex + postsToLoad;
    setDisplayedPosts(posts.slice(startIndex, endIndex));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <div className="px-[1%] mb-5 mx-auto">
      <div className="w-full flex flex-col items-center">
        <h1 className="md:text-5xl text-3xl tracking-wider pb-4 text-white">
          Instagram Feed
        </h1>
      </div>
      <div className="w-100 text-center my-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] px-12 mt-12 justify-center items-center">
          {displayedPosts.map((post) => (
            <a
              key={post?.id}
              href={post?.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              {post?.media_type === "VIDEO" ? (
                <video
                  controls
                  className="rounded-sm w-[645px] h-[650px] object-contain"
                >
                  <source src={post?.media_url} type="video/mp4" />
                </video>
              ) : (
                <div className="relative">
                  <img
                    className="rounded-sm skeleton-photo"
                    src={post?.media_url}
                    alt={post?.caption}
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 bg-black flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-500 hover:opacity-60 p-2">
                    <p className="text-xs"></p>
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>

        <div className="flex justify-center my-4 items-center">
          <div className="border-2 rounded-full w-[150px] py-2 px-6 flex justify-between items-center">
            <button
              onClick={handlePrevPage}
              className={
                currentPage === 1
                  ? " text-gray-500 font-semibold text-xl py-2 px-4 rounded-full mr-2 disabled -mt-2"
                  : " hover:text-gray-600 text-white  rounded-full duration-300 text-3xl font-extrabold -mt-2"
              }
            >
              {"<"}
            </button>
            <button
              onClick={handleNextPage}
              className={
                currentPage === totalPages
                  ? " text-gray-500 font-semibold text-xl py-2 px-4 rounded-full disabled -mt-2"
                  : "hover:text-gray-600 text-white font-extrabold text-3xl rounded-full duration-300 -mt-2"
              }
            >
              {">"}
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          {/* <button
            onClick={loadMorePosts}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
          >
            Load More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default InstaGallery;
