/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const getPosts = async () => {
      try {
        const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_KEY_CLIENT;
        let allPosts: Post[] = [];
        let hasNextPage = true;
        let cursor = null;

        while (hasNextPage) {
          let url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,thumbnail_url,permalink&access_token=${accessToken}`;

          if (cursor) {
            url += `&after=${cursor}`;
          }

          const { data } = await axios.get(url);

          if (data && data.data && data.data.length > 0) {
            allPosts = [...allPosts, ...data.data];
            if (
              data.paging &&
              data.paging.cursors &&
              data.paging.cursors.after
            ) {
              cursor = data.paging.cursors.after;
            } else {
              hasNextPage = false;
            }
          } else {
            hasNextPage = false;
          }
        }

        setPosts(allPosts);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };
    getPosts();
  }, []);

  const totalPosts = posts.length;
  const itemsPerPage = 9;

  const totalPages = Math.ceil(totalPosts / itemsPerPage);

  const pageNumbers: number[] = [];
  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i);
  }

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visiblePosts = posts.slice(startIndex, endIndex);

  return (
    <div className="px-[1%] mb-5 mx-auto">
      <div className="w-full flex flex-col items-center">
        <h1 className="md:text-5xl text-3xl tracking-wider pb-4 text-white">
          Instagram Feed
        </h1>
      </div>
      <div className="w-100 text-center my-3">
        <div className="grid grid-cols-3 gap-4 px-12 mt-12 justify-center">
          {visiblePosts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {post.media_type === "VIDEO" ? (
                <video
                  controls
                  className="rounded-sm hover:scale-110 transition-all duration-300"
                >
                  <source src={post.media_url} type="video/mp4" />
                </video>
              ) : (
                <img
                  className="rounded-sm hover:scale-110 transition-all duration-300 skeleton-photo"
                  src={post.media_url}
                  alt={post.caption}
                />
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
                  ? "btn btn-accent font-bold text-xl hover:btn-info mt-6 mb-48"
                  : "btn btn-neutral btn-sm mt-6"
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
