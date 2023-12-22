import * as React from "react"
import { graphql } from "gatsby"
import '../../styles/markdown.css';
import Layout from "../../layouts/layout"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark
  return (
    <Layout>
      <main className="rounded-xl shadow-lg p-6">
        <div>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>

          <div className="toc"
            dangerouslySetInnerHTML={{ __html: tableOfContents }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      tableOfContents
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`