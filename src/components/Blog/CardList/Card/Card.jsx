import { Link } from 'react-router-dom';
import { posts } from "../../../../assets/Blog";


const Card = () => {

  return (
    <div className="flex flex-wrap gap-[10px] sm: gap-[10px] lg:gap-[10px] xl:gap-[10px]">
        {posts.map(post => (
            <div key={post.slug} className="container relative flex sm:flex-col lg:flex-row xl:flex-row item-center 
                                            gap-[30px] sm:mb-[30px] sm:text-center">
                <div className="flex-1 h-[250px] relative sm:flex-row sm:justify-center md:flex md:justify-center lg:block xl:block">
                    <img src={post.image} className="rounded-[0.5rem] w-full h-[15rem] sm: h-[14rem] lg:h-[15rem] object-cover" width={500} height={500} alt=""/>
                </div>
                <div className="flex-1 flex flex-col gap-[10px] text-center lg:text-left xl:text-left">
                    <div className="">
                        <span className="text-gray-500">{post.date} - </span>
                        <span className="text-pink-600 font-[600]">{post.category}</span>
                    </div>
                    <Link to={`/post/${post.slug}`} className="hover:underline">
                        <h1 className="text-xl font-bold">{post.title}</h1>
                    </Link>
                    <p className="font-light text-[12px] text-gray-400">
                       {post.description}
                    </p>
                    <div className="flex justify-center lg:justify-start xl:justify-start">
                        <Link to={`/post/${post.slug}`} className="border-b-2 border-gray-400 text-[12px] w-max hover:border-gray-600 transition-all">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
};

export default Card;
