import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Pages/checkout';
import HomePage from './Pages/homePage';
import KitchenDashboardPending from './Pages/kitchenDashboardPending';
import KitchenDashboardCompleted from './Pages/kitchenDashboardCompleted';
import OrderSucces from './Pages/orderSucces';
import Navbar from './Components/Navbar'
import Images from './Components/Image';
import { useSelector, useDispatch } from 'react-redux';
// import * as actionCreators from './State/action-creators/actions';
// import {bindActionCreators} from "redux"
import axios from 'axios';
import { menuAction } from './State/action-creators/actions';


function App() {

  const store = useSelector(state => state) // const anything = useSelector(state "intial value" => state.store ".KeyName in the combine reducers") 
  //console.log(store);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    axios.get("http://localhost:4940/product").then((response)=>{dispatch(menuAction(response.data.data))
  })},[])


  return (
    <div className="App">
      <Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path="/KitchenDashboardPending" element={<KitchenDashboardPending/>} />
        <Route path="/KitchenDashboardCompleted" element={<KitchenDashboardCompleted/>} />
        <Route path="/ordersuccess" element={<OrderSucces/>} />
			</Routes>
    </div>
  );
}

export default App;
