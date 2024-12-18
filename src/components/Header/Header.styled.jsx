import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 60px;
  padding: 0 20px;
  margin-bottom: 5px;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
`;

export const Line = styled.span`
  display: block;
  width: 1px;
  height: 30px;
  background-color: #333;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 8px 12px;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.active {
    text-decoration: underline;
  }
`;
