import { useEffect, useState } from "react";
import { Badge, Button, Card, Image } from "react-bootstrap";
import { AppProps, ItemTypes, StateType } from "../Types";
import image from "../Assets/pizza.png";
import { BsPatchMinus, BsPatchPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../State/action-creators/actions";

//type Props = {};

const Item = ({ itemX }: AppProps) => {
  const products = useSelector((state: StateType) => state.Reducer); // const anything = useSelector(state "intial value" => state.store ".KeyName in the combine reducers")
  const dispatch = useDispatch();
  let [count, setCount] = useState(0);

  const editQTY = (num: number) => {
    dispatch(addToCart(itemX as ItemTypes, num))
    {num === 1? setCount(count +=1): count>0? setCount(count-=1): setCount(0)}
  }
/////Update quantity
  // function editCart(num: number) {
  //   {
  //     num === 1 ? (setCount(count += 1)) : count > 0 ? (setCount(count -= 1)) : (setCount(0));
  //   }
  //   const productFind = products.find(
  //     (product: ItemTypes) => product.id === itemX?.id
  //   );
  //   if (!productFind) {
  //     if (itemX) {
  //       dispatch(addToCart([...products, { ...itemX, quantity: count }]));
  //     }
  //   } else {
  //     products.map((product) => {
  //       if (product.id === itemX?.id) {
  //         product.quantity = count;
  //       }
  //     });
  //     dispatch(addToCart(products))
  //   }
  //   console.log(products);
  // }




  return (
    <div className="d-flex justify-content-center mt-4">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Image src={image} height={110} />
          <Card.Title>{itemX?.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {itemX?.price}
          </Card.Subtitle>
          <Card.Text>{itemX?.description}</Card.Text>

          <Button
            style={{
              backgroundColor: "white",
              border: "white",
              color: "black",
            }}
            onClick={() => editQTY(-1)}
          >
            <BsPatchMinus size={25} />
          </Button>

          <Badge bg="secondary">{count}</Badge>

          <Button
            style={{
              backgroundColor: "white",
              border: "white",
              color: "black",
            }}
            // onClick={() => addItem && addItem(itemX as CartTypes)}
            onClick={() => editQTY(1)}
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
