import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import Item from "../Components/Item";
import { useState } from "react";
import Images from "../Components/Image";
import Checkout from "../Pages/checkout";
// import Cart from "../Components/Cart";
import { ItemTypes } from "../Types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../State/action-creators/actions";


const HomePage = () => {

  const menu = useSelector((state: any) => state.menuReducer)

  // const [menu, setMenu] = useState([
  //   {
  //     id: 1,
  //     name: "Beef",
  //     price: 1,
  //     ingredients: "x,y,x",
  //     category: "pizza",
  //     popular: true,
  //     quantity: 0,
  //   },
  //   {
  //     id: 2,
  //     name: "Coca",
  //     price: 1,
  //     ingredients: "x,y,x",
  //     category: "drinks",
  //     popular: true,
  //     quantity: 0,
  //   },
  //   {
  //     id: 3,
  //     name: "Cake",
  //     price: 1,
  //     ingredients: "x,y,x",
  //     category: "desserts",
  //     popular: false,
  //     quantity: 0,
  //   },
  //   {
  //     id: 4,
  //     name: "Pepperoni",
  //     price: 1,
  //     ingredients: "x,y,x",
  //     category: "pizza",
  //     popular: true,
  //     quantity: 0,
  //   },
  //   {
  //     id: 5,
  //     name: "Pepsi",
  //     price: 1,
  //     ingredients: "x,y,x",
  //     category: "drinks",
  //     popular: true,
  //     quantity: 0,
  //   },
  //   {
  //     id: 6,
  //     name: "Tiramisu",
  //     price: 1,
  //     ingredients: "x,y,x",
  //     category: "desserts",
  //     popular: false,
  //     quantity: 0,
  //   },
  // ]);



  

  // const changeQunatity = (item: ItemTypes, num: number) => {
  //   if (num === -1 && item.quantity === 0) return;
  //   setMenu((prevMenu) =>
  //     prevMenu.map((product) =>
  //       product.id === item.id
  //         ? { ...product, quantity: product.quantity + num }
  //         : product
  //     )
  //   );
  // };

  const [filteredMenu, setFilteredMenu] = useState(
    menu.filter((product: ItemTypes) => product.popular === true)
  );
  const [currentMenu, setCurrentMenu] = useState("popular");

  useEffect(() => {
    if (currentMenu === "popular") {
      setFilteredMenu(menu.filter((product: ItemTypes) => product.popular === true));
    } else {
      setFilteredMenu(
        menu.filter((product: ItemTypes) => product.category?.name === currentMenu)
      );
    }
  }, [menu]);

  useEffect(() => {
    if (currentMenu === "popular") {
      setFilteredMenu(menu.filter((product: ItemTypes) => product.popular === true));
    } else {
      setFilteredMenu(menu.filter((product: ItemTypes) => product.category?.name === currentMenu));
    }
  }, [currentMenu]);
  return (
    <>
      <Images />
      <Nav
        className="justify-content-center"
        defaultActiveKey="link-0"
        onSelect={(selectedKey) => {
          if (selectedKey === "link-1") {
            setCurrentMenu("Pizza");
          } else if (selectedKey === "link-2") {
            setCurrentMenu("Desserts");
          } else if (selectedKey === "link-3") {
            setCurrentMenu("Drinks");
          }
          else setCurrentMenu("popular");
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
        {filteredMenu.map((item: ItemTypes) => (
          <Item key={item.id} itemX={item}/>
        ))}
      </div>
    </>
  );
};

export default HomePage;