/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-28 14:43:55
 * @LastEditTime : 2022-03-28 15:36:38
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-travel-site\src\components\Button.tsx
 */
import styled from "styled-components";
import { Link } from "gatsby";

interface Props {
  primary?: boolean;
  big?: boolean;
  round?: boolean;
}

export const Button = styled(Link)<Props>`
  background: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "$#077BF1" : "#F26A2E")};
    transform: translateY(-2px);
  }
`;
