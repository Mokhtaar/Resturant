import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Item from "./Item";
import { AppProps } from "../Types";
import { useSelector } from "react-redux";
import { ItemTypes } from "../Types";
import { Card, Image, Badge } from "react-bootstrap";
import image from "../Assets/pizza.png";
import { BsPatchMinus, BsPatchPlus } from "react-icons/bs";

const Cart = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cartItems = useSelector((state: any) => state.Reducer);

  return (
    <>
      <BsPatchPlus size={20} color={"#FF9200"} onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose} placement="end">
        {cartItems?.map((itemX: any) => (
          <div className="d-flex justify-content-center ">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="d-flex">
                <div>
                  <Image src={image} height={110} />
                </div>
                <div>
                  <Card.Title>{itemX?.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {itemX?.price}
                  </Card.Subtitle>
                  <Card.Text>{itemX?.description}</Card.Text>
                  <div className="d-flex">
                    <Button
                      style={{
                        backgroundColor: "white",
                        border: "white",
                        color: "black",
                      }}
                      //onClick={() => editQTY(-1)}
                    >
                      <BsPatchMinus size={25} />
                    </Button>

                    <Badge bg="secondary">{itemX.quantity}</Badge>

                    <Button
                      style={{
                        backgroundColor: "white",
                        border: "white",
                        color: "black",
                      }}
                      // onClick={() => addItem && addItem(itemX as CartTypes)}
                      //onClick={() => editQTY(1)}
                    >
                      <BsPatchPlus size={25} />
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
        <Button variant="danger" type="submit" size='sm'>
          Checkout
        </Button>
      </Offcanvas>
    </>
  );
};

export default Cart;
