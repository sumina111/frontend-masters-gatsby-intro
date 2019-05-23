import React from 'react';
import { Link } from 'gatsby';
import usePhotos from '../hooks/use-photos';
import Pictures from '../components/pictures';

export default () => {
  const posts = usePhotos();

  return (
    <div>
      <p>choose one</p>
      {posts.map(post => (
        <Pictures key={post.slug} post={post} />
      ))}
      <Link to="/">&larr; back to home</Link>
    </div>
  );
};
