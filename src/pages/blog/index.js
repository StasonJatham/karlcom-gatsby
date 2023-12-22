import React from "react"
import { Link, graphql } from "gatsby";
import Layout from "../../layouts/layout"
import {
  Chip,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <main className="bg-indigo-800 rounded-xl my-4 text-white p-6">
        <Typography variant="h1" className="mb-4">Blog</Typography>
        <ul className="flex gap-4">
          {posts.map((post) => (
            <li key={post.id} className="mb-2">
              <Link to={`/blog/${post.frontmatter.slug}`}>
                <Card className="transition duration-300 mt-6 w-96 hover:shadow-lg hover:-translate-y-2 hover:translate-x-2 ">
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      <Chip variant="outlined" value={post.frontmatter.date} className="border-white rounded-full text-white" />
                      {post.frontmatter.title}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button size="sm" variant="text" className="flex items-center gap-2">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        excerpt(pruneLength: 200)
        frontmatter {
          title
          slug
          date
        }
      }
    }
  }
`;

export default BlogIndex;
