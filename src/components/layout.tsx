/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-27 22:36:05
 * @LastEditTime : 2022-04-01 20:18:03
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-travel-site\src\components\layout.tsx
 */
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { GlobalStyle } from "./styles/GlobalStyles";

const Layout = ({ children }: any) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
