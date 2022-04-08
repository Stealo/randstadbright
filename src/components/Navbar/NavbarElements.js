import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0px;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
white-space: nowrap; */

`;