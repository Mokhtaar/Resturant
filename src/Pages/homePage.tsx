import React from "react";
import { Nav } from "react-bootstrap";
import Item from "../Components/Item";
import { useState } from "react";
import Images from "../Components/Image";
import checkout from "../Pages/checkout";
import Cart from "../Components/Cart";
// import CartItems from "../Components/CartItems"



const HomePage = () => {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Popular 1",
      price: 1,
      ingredients: "x,y,x",
      category: "pizza",
      popular: true,
    },
    {
      id: 1,
      name: "Popular 2",
      price: 1,
      ingredients: "x,y,x",
      category: "drinks",
      popular: true,
    },
    {
      id: 1,
      name: "Popular 3",
      price: 1,
      ingredients: "x,y,x",
      category: "desserts",
      popular: true,
    },
    {
      id: 1,
      name: "Popular 4",
      price: 1,
      ingredients: "x,y,x",
      category: "pizza",
      popular: true,
    },
  ]);
  //   const [menu, setMenu] = useState( [
  //     mostPopular: [
  //       {
  //         id: 1,
  //         name: "Popular 1",
  //         price: 1,
  //         ingredients: "x,y,x",
  //         category: 'pizza',
  //         popular: true
  //       },
  //       { id: 2, name: "Popular 2", price: 2, ingredients: "x,y,x" },
  //       {
  //         id: 3,
  //         name: "Popular 3",
  //         price: 1,
  //         ingredients: "x,y,x",
  //       },
  //       { id: 4, name: "Popular 4", price: 2, ingredients: "x,y,x" },
  //     ],
  //     Desserts: [
  //       {
  //         id: 5,
  //         name: "Cake",
  //         price: 1,
  //         ingredients: "x,y,x",
  //       },
  //       {
  //         id: 6,
  //         name: "Chocolate",
  //         price: 2,
  //         ingredients: "x,y,x",
  //       },
  //       {
  //         id: 7,
  //         name: "Tiramisu",
  //         price: 1,
  //         ingredients: "x,y,x",
  //       },
  //       {
  //         id: 8,
  //         name: "Konafa",
  //         price: 2,
  //         ingredients: "x,y,x",
  //       },
  //     ],
  //     Pizza: [
  //       {
  //         id: 9,
  //         name: "Chicken",
  //         price: 1,
  //         ingredients: "x,y,x",
  //       },
  //       {
  //         id: 10,
  //         name: "Meet",
  //         price: 2,
  //         ingredients: "x,y,x",
  //       },
  //       {
  //         id: 11,
  //         name: "Beef",
  //         price: 1,
  //         ingredients: "x,y,x",
  //       },
  //       {
  //         id: 12,
  //         name: "Pepperoni",
  //         price: 2,
  //         ingredients: "x,y,x",
  //       },
  //     ],
  //     Drinks: [
  //       {
  //         id: 13,
  //         name: "Pepsi",
  //         price: 1,
  //         ingredients: "x,y,x",
  //       },
  //       {
  //         id: 14,
  //         name: "Coca",
  //         price: 2,
  //         ingredients: "x,y,x",
  //       },
  //       {
  //         id: 15,
  //         name: "Fanta",
  //         price: 1,
  //         ingredients: "x,y,x",
  //       },
  //       {
  //         id: 16,
  //         name: "Miranda",
  //         price: 2,
  //         ingredients: "x,y,x",
  //       },
  //     ],
  // ]);

  const [currentState, setCurrentState] = useState(
    menu.filter((item) => item.popular)
  );

  return (
    <>
      <Images />
      <Nav
        className="justify-content-center"
        //defaultActiveKey="link-2"
        onSelect={(selectedKey) => {
          if (selectedKey === "link-0") {
            setCurrentState(menu.filter((item) => item.popular));
          } else if (selectedKey === "link-1") {
            setCurrentState(menu.filter((item) => item.category === "pizza"));
          } else if (selectedKey === "link-2") {
            setCurrentState(
              menu.filter((item) => item.category === "desserts")
            );
          } else if (selectedKey === "link-3") {
            setCurrentState(menu.filter((item) => item.category === "drinks"));
          }
        }}
      >
        <Nav.Item>
          <Nav.Link eventKey="link-0">Most popular</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Pizzas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Desserts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Drinks</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="d-flex justify-content-center">
        {currentState.map((item) => (
          <Item key={item.id} itemX={item} />
        ))}
      </div>
      {/* <CartItems menuX={menu} /> */}
    </>
  );
};

export default HomePage;
