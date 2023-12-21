import React from "react"
import Layout from "../layouts/layout"
import Hero from "../sections/Hero"
import Services from "../sections/Services"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />

    </Layout>
  );
}


export const Head = () => <title>Home Page</title>
