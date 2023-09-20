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
  const [currentPage, setCurrentPage] = useState<number>(0);

  const token: any = useContext(API_CONTEXT);
  // console.log(token?.data?.links?.Insta_access_token);
  useEffect(() => {
    const getPosts = async () => {
      try {
        // const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_KEY_CLIENT;
        const accessToken = token?.data?.links?.Insta_access_token;

        let url: string = `https://graph.instagram.com/me/media?fields=id,username,media_url,media_type,permalink,caption&access_token=${accessToken}`;

        fetch(url)
          .then((res) => res.json())
          .then((data) => setPosts(data?.data));
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };
    getPosts();
  }, [token]);

  const totalPosts = posts?.length;
  const itemsPerPage = 8;

  const totalPages = Math.ceil((totalPosts - 1) / itemsPerPage);

  const pageNumbers: number[] = Array.from({ length: totalPages }, (_, i) => i);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visiblePosts = posts?.slice(0, 24).slice(startIndex, endIndex);

  return (
    <div className="px-[1%] mb-5 mx-auto">
      <div className="w-full flex flex-col items-center">
        <h1 className="md:text-5xl text-3xl tracking-wider pb-4 text-white">
          Instagram Feed
        </h1>
      </div>
      <div className="w-100 text-center my-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] px-12 mt-12 justify-center items-center">
          {visiblePosts?.map((post) => (
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

        <div className="flex justify-center mb-12 gap-6 ">
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={
                currentPage === number
                  ? " font-bold bg-gray-500 rounded-full w-12 h-12 mt-6 "
                  : "mt-6"
              }
              onClick={() => setCurrentPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstaGallery;
