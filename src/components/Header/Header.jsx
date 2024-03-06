import React from "react";
import { Outlet } from "react-router-dom";
import { StyledHeader, Navbar, Li, StyledNavLink } from "./Header.styled";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Navbar>
          <Li>
            <StyledNavLink to="/">Shop</StyledNavLink>
          </Li>
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
