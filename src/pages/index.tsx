/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-02-25 15:53:00
 * @LastEditTime : 2022-04-02 16:15:12
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-travel-site\src\pages\index.tsx
 */
import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Trips from "../components/Trips";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Email from "../components/Email";
import "animate.css";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Trips heading="Our Favorite Destinations" />
      <Testimonials />
      <Stats />
      <Email />
    </Layout>
  );
};

export default IndexPage;
