/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-02-25 15:53:00
 * @LastEditTime : 2022-03-31 19:57:58
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-travel-site\src\pages\index.tsx
 */
import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Trips from "../components/Trips";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Trips heading="Our Favorite Destinations" />
    </Layout>
  );
};

export default IndexPage;
