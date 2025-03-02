import { Link } from 'react-router-dom';
import { PlaceholderImage, posts } from "../../../../assets/Blog";

const FALLBACK_IMAGE = PlaceholderImage;

const Card = () => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="flex flex-wrap gap-[10px] sm:gap-[10px] lg:gap-[10px] xl:gap-[10px]">
      {posts.map(post => {
        // Find the first image block from the unified contents array.
        const firstImage = post.contents
          ? post.contents.find(content => content.type === 'image')
          : null;

        return (
          <div
            key={post.slug}
            className="container relative flex flex-col lg:flex-row gap-[30px] lg:gap-[50px] sm:mb-[30px] text-center lg:text-left xl:text-left"
          >
            {/* Image div */}
            <div className="flex-1 h-[250px] relative">
              <img
                src={firstImage ? firstImage.src : FALLBACK_IMAGE}
                alt={firstImage ? firstImage.alt : "No image available"}
                className="rounded-[0.5rem] w-full h-[15rem] sm:h-[14rem] lg:h-[15rem] object-cover"
                width={500}
                height={500}
              />
            </div>

            {/* Text div */}
            <div className="flex-1 flex flex-col gap-[10px]">
              <div>
                <span className="text-gray-500">{post.date} - </span>
                <span className="text-pink-600 font-[600]">{post.category}</span>
              </div>

              <Link to={`/post/${post.slug}`} className="hover:underline">
                <h1 className="text-xl font-bold">{post.title}</h1>
              </Link>

              <p className="font-light text-[12px] text-gray-400">
                <span className="block lg:hidden">
                  {truncateText(post.description, 15)}
                </span>
                <span className="hidden lg:block">
                  {truncateText(post.description, 41)}
                </span>
              </p>

              <div className="flex justify-center lg:justify-start xl:justify-start">
                <Link
                  to={`/post/${post.slug}`}
                  className="border-b-2 border-gray-400 text-[12px] w-max hover:border-gray-600 transition-all mb-[2rem]"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
