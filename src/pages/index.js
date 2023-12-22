import React from "react"
import Layout from "../layouts/layout"
import Hero from "../sections/Hero"
import ValueProposition from "../sections/ValueProposition"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ValueProposition />

    </Layout>
  );
}


export const Head = () => <title>Home Page</title>
