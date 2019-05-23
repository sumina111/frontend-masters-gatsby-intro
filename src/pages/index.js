import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
// import Insta from '../components/insta';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <div>
      <Hero />
      <Layout>
        <h2>Read my blog</h2>
        {/* {JSON.stringify(posts, null, 2)} */}
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        {/* <Insta /> */}
      </Layout>
    </div>
  );
};
