/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-27 22:36:05
 * @LastEditTime : 2022-05-07 16:48:07
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-travel-site\src\components\layout.tsx
 */
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { GlobalStyle } from "./styles/GlobalStyles";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
