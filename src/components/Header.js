import React  from "react";
import Navbar from "react-bootstrap/Navbar";
import "../header.css";

const Header = () => {
  return (
    <div className="header">

        <Navbar>
        <Navbar.Brand href="#home">My Contact App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>

    </div>
  );
};

export default Header;