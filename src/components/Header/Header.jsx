import React from "react";
import { Outlet } from "react-router-dom";
import { StyledHeader, Navbar, Line, StyledNavLink } from "./Header.styled";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Navbar>
          <li>
            <StyledNavLink to="/">Shop</StyledNavLink>
          </li>
          <Line />
          <li>
            <StyledNavLink to="/cart">Shophing Cart</StyledNavLink>
          </li>
        </Navbar>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Header;
