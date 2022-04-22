/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-27 22:33:00
 * @LastEditTime : 2022-04-22 15:58:19
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-travel-site\src\components\Header.tsx
 */
import { Link } from "gatsby";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";

const Header = () => {
  const [extendNavbar, setExtendNavbar] = useState<boolean>();

  return (
    <Nav>
      <NavTitle>
        <NavLink to="/">EXPLORIX</NavLink>
      </NavTitle>
      <NavMenu extendNavbar={extendNavbar}>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <Bars
        onClick={() => {
          setExtendNavbar((current) => !current);
        }}
      />
      <NavBtn>
        <Button to="/trips" $primary $round>
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`;

const NavTitle = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  margin-left: 1rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 2rem;
    margin: 0;
    text-align: center;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div<{ extendNavbar?: boolean }>`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 10rem 0;
    display: ${(props) => (props.extendNavbar ? "flex" : "none")};
    position: absolute;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 20%);
    backdrop-filter: blur(1rem);
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
