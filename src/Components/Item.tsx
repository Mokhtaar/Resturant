import React, { useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { AppProps } from "../Types";
import image from "../Assets/pizza.png";
import { BsPatchMinus, BsPatchPlus } from "react-icons/bs";


//type Props = {};

const Item = ({ itemX }: AppProps) => {
  let [count, setCount] = useState(0);
  return (
    <div className="d-flex justify-content-center mt-4">
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
            onClick={() => setCount((count -= 1))}
          >
            <BsPatchMinus size={25} />
          </Button>
          {count}
          <Button
            style={{
              backgroundColor: "white",
              border: "white",
              color: "black",
            }}
            onClick={() => setCount((count += 1))}
          >
            <BsPatchPlus size={25} />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;

///y axis justify-content-center
///x axis align-items-center
