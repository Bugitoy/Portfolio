import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../../assets/Blog';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

const PostPage = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  const ImageComponent = ({ src, alt, borderRadius = 'rounded-none', marginBottom = 'mb-4' }) => {
    return (
      <img
        src={src}
        alt={alt}
        className={`${borderRadius} ${marginBottom} w-full h-[30rem] object-cover`}  // Apply TailwindCSS classes
      />
    );
  };

  const VideoComponent = ({ src, marginBottom = 'mb-4' }) => {
    return (
      <div className={`${marginBottom} relative pb-[56.25%] h-0 overflow-hidden`}>
        <iframe
          src={src}
          className="absolute top-0 left-0 w-full h-full border-none"
          allowFullScreen
        />
      </div>
    );
  };

  const CodeBlockComponent = ({ language, children, fontSize = 'text-base', marginBottom = 'mb-4' }) => {
    const [copy, setCopy] = useState(false);
    return (
      <div className={`w-full bg-[#282C34] rounded-xl overflow-hidden ${marginBottom}`}>
        <div className='flex bg-[#1d2025] justify-end pb-3 pt-4 px-6'>
          {
            copy?
            <button className='text-white'>
              Copied
            </button>
            :
            <button className='text-white' onClick={() => {
                navigator.clipboard.writeText({children});
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 1500);
            }}>
              Copy
            </button>
          }
        </div>
        <SyntaxHighlighter language={language} style={oneDark} customStyle={{padding: '16px', fontSize }} wrapLongLines={true}>
          {children}
        </SyntaxHighlighter>
      </div>
    );
  };

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Post not found</div>;
  }

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-3xl mx-auto p-6 rounded-lg shadow">
        <Link to="/blog" className="text-sm text-gray-600 mb-4 block">
          &larr; Back to Posts
        </Link>

        <h1 className="text-3xl font-bold mb-5">{post.title}</h1>
        
        {post.description && <p className="mb-5 text-gray-700">{post.description}</p>}

        <div className="prose max-w-none">
          <p className="mb-5">{post.body1}</p>

          <ImageComponent src={post.image} alt={post.title} borderRadius="rounded-lg" marginBottom="mb-6" />

          <p className="mb-5">{post.body2}</p>
          
          <CodeBlockComponent language="jsx" fontSize="text-lg" marginBottom="mb-6">
            {`function greet() { console.log("Hello, world!"); } greet();`}
          </CodeBlockComponent>

          <p className="mb-5">{post.body3}</p>

          <VideoComponent src="https://www.youtube.com/embed/dQw4w9WgXcQ" marginBottom="mb-6" />

          <p className="mb-5">{post.body4}</p>
          
          <ImageComponent src={post.image} alt={post.title} borderRadius="rounded-lg" marginBottom="mb-6" />

          <p className="mb-5">{post.body5}</p>
          
          <CodeBlockComponent language="jsx" fontSize="text-lg" marginBottom="mb-6">
          {`let randomNumber = Math.random();\nconsole.log(randomNumber); // Output: a random number between 0 and 1`}
          </CodeBlockComponent>


          <p className="mb-5">{post.body6}</p>

          <VideoComponent src="https://www.youtube.com/embed/dQw4w9WgXcQ" marginBottom="mb-6" />

          <p className="mb-5">{post.body7}</p>
          
          <ImageComponent src={post.image} alt={post.title} borderRadius="rounded-lg" marginBottom="mb-6" />

          <p className="mb-5">{post.body8}</p>
          
          <CodeBlockComponent language="jsx" fontSize="text-lg" marginBottom="mb-6">
            {`function greet() { console.log("Hello, world!"); } greet();`}
          </CodeBlockComponent>

          <p className="mb-5">{post.body9}</p>

          <VideoComponent src="https://www.youtube.com/embed/dQw4w9WgXcQ" marginBottom="mb-6" />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
