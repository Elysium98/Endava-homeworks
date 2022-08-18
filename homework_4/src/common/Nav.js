import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Nav = () => {
  return (
    <nav className="navStyles">
      <NavLink to="/" style={{ textDecoration: "none" }} end>
        <Button variant="contained"> Products</Button>
      </NavLink>
      <NavLink to="/deposit" style={{ textDecoration: "none" }}>
        <Button variant="contained"> Deposit</Button>
      </NavLink>
    </nav>
  );
};

export default Nav;
