// src/pages/blog/index.js

import React from "react";
import { Link, graphql } from "gatsby";

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`;

export default BlogIndex;
