import React from 'react';
import { Link } from 'gatsby';
import ReadLink from '../components/read-link';

const Pictures = ({ post }) => (
  <article>
    <h3>
      <Link to={'product/' + post.slug}>{post.title}</Link>
    </h3>
    <p>{post.price}</p>
    <ReadLink to={'product/' + post.slug}>here</ReadLink>
  </article>
);

export default Pictures;
