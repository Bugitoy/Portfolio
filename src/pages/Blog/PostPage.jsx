import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../../assets/Blog';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PostPage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  // Component for images
  const ImageComponent = ({ src, alt, borderRadius = 'rounded-none', marginBottom = 'mb-4' }) => (
    <img
      src={src}
      alt={alt}
      className={`${borderRadius} ${marginBottom} w-full h-[30rem] object-cover`}
    />
  );

  // Component for videos
  const VideoComponent = ({ src, marginBottom = 'mb-4' }) => (
    <div className={`${marginBottom} relative pb-[56.25%] h-0 overflow-hidden`}>
      <iframe src={src} className="absolute top-0 left-0 w-full h-full border-none" allowFullScreen />
    </div>
  );

  // Component for code blocks
  const CodeBlockComponent = ({ language, children, marginBottom = 'mb-4' }) => {
    const [copy, setCopy] = useState(false);
    return (
      <div className={`w-full bg-[#282C34] rounded-lg overflow-hidden ${marginBottom}`}>
        <div className="flex bg-[#1d2025] justify-end pb-2 pt-2 px-4">
          {copy ? (
            <button className="text-white text-xs">Copied</button>
          ) : (
            <button
              className="text-white text-xs"
              onClick={() => {
                navigator.clipboard.writeText(children);
                setCopy(true);
                setTimeout(() => setCopy(false), 1500);
              }}
            >
              Copy
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{ padding: '10px' }}
          wrapLongLines={true}
          className="text-[0.5rem] lg:text-sm xl:text-sm"
        >
          {children}
        </SyntaxHighlighter>
      </div>
    );
  };

  // Function to render a content block based on its type
  const renderContent = (block, index) => {
    switch (block.type) {
      case 'text':
        return <p key={index} className="mb-5">{block.content}</p>;
      case 'image':
        return (
          <ImageComponent
            key={index}
            src={block.src}
            alt={block.alt || post.title}
            marginBottom="mb-6"
            borderRadius="rounded-lg"
          />
        );
      case 'video':
        return <VideoComponent key={index} src={block.src} marginBottom="mb-6" />;
      case 'code':
        return (
          <CodeBlockComponent key={index} language={block.language} marginBottom="mb-6">
            {block.content}
          </CodeBlockComponent>
        );
      default:
        return null;
    }
  };

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Post not found</div>;
  }

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-3xl mx-auto p-6 rounded-lg shadow">
        <Link to="/blog" className="text-sm text-gray-600 mb-4 block">&larr; Back to Posts</Link>
        <h1 className="text-3xl font-bold mb-5">{post.title}</h1>
        {post.description && <p className="mb-5 text-gray-600">{post.description}</p>}
        <div className="prose max-w-none">
          {post.contents && post.contents.map((block, index) => renderContent(block, index))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
