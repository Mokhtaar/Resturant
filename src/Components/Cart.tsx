import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsPatchPlus } from "react-icons/bs";
import Item from "./Item";
import { AppProps } from "../Types";

const Cart = ({ menuX }: AppProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <BsPatchPlus size={20} color={"#FF9200"} onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Item />
      </Offcanvas>
    </>
  );
};

export default Cart;
