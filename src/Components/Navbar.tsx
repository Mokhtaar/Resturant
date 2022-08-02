import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import image from "../Assets/image.png";
import image2 from "../Assets/fast-delivery (1).png";
import { BsPatchMinus, BsPatchPlus } from "react-icons/bs";
import Cart from "./Cart"

type Props = {};

const NavBar = (props: Props) => {
  return (
    <Navbar className="BGcolor navbar navbar-dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">OBSD</Navbar.Brand>{" "}
        <Image src={image} width={30} height={30} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Menu</Nav.Link>
            <Nav.Link href="#link">Most popular</Nav.Link>
            <Image src={image2} width={30} height={30} />
          </Nav>
        </Navbar.Collapse>
        <Cart/>
        {/* <Button
          style={{
            backgroundColor: "#FF9200",
            border: "white",
            color: "black",
          }}
        ></Button> */}
      </Container>
    </Navbar>

  );
};

export default NavBar;
