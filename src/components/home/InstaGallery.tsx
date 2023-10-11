/* eslint-disable @next/next/no-img-element */
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
  console.log(posts);

  const loadMorePosts = () => {
    const endIndex = displayedPosts?.length + postsToLoad;
    if (endIndex <= posts?.length) {
      setDisplayedPosts(posts?.slice(0, endIndex));
      setCurrentPage(currentPage + 1);
    }
  };

  const loadLessPosts = () => {
    if (currentPage > 1) {
      const startIndex = (currentPage - 2) * postsToLoad;
      const endIndex = startIndex + initialPostsToDisplay;
      setDisplayedPosts(posts?.slice(startIndex, endIndex));
      setCurrentPage(currentPage - 1);
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
                  className="rounded-sm w-[450px] h-[500px] object-fit"
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

        {currentPage < Math.ceil(posts?.length / postsToLoad) && (
          <div className="flex justify-center mt-6">
            <button
              onClick={loadMorePosts}
              className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-gray-400 rounded-2xl group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Load More</span>
            </button>
          </div>
        )}
        {currentPage > 1 && (
          <div className="flex justify-center mt-4 mb-10">
            <button
              onClick={loadLessPosts}
              className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#00000055] border border-gray-400 rounded-2xl group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Load Less</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstaGallery;
