import React from "react";
import { Form, Button, Card, Image } from "react-bootstrap";
import Item from "../Components/Item";
import { BsPatchMinus, BsPatchPlus } from "react-icons/bs";
import image from "../Assets/pizza.png";

type Props = {};

const Checkout = ({ itemX, changeQuantity }: any) => {
  return (
    <div className="row">
      <Form className="col-md-8">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="password" placeholder="Enter your mobile number" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="password" placeholder="Enter your mobile address" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>City</Form.Label>
          <Form.Control type="password" placeholder="Enter your mobile city" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Order now
        </Button>

        <Button variant="white" type="submit">
          Cancel
        </Button>
      </Form>
      {/* <div className="col-md-4"> */}
      <div className="col-md-4 d-flex justify-content-center mt-4">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Image src={image} height={110} />
            <Card.Title>{itemX?.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {itemX?.price}
            </Card.Subtitle>
            <Card.Text>{itemX?.ingredients}</Card.Text>

            <Button
              style={{
                backgroundColor: "white",
                border: "white",
                color: "black",
              }}
              onClick={() => changeQuantity && changeQuantity(itemX, -1)}
            >
              <BsPatchMinus size={25} />
            </Button>

            {itemX?.quantity}

            <Button
              style={{
                backgroundColor: "white",
                border: "white",
                color: "black",
              }}
              onClick={() => changeQuantity && changeQuantity(itemX, 1)}
            >
              <BsPatchPlus size={25} />
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
