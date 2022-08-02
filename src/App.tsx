import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Pages/checkout';
import HomePage from './Pages/homePage';
import KitchenDashboardPending from './Pages/kitchenDashboardPending';
import KitchenDashboardCompleted from './Pages/kitchenDashboardCompleted';
import OrderSucces from './Pages/orderSucces';
import Navbar from './Components/Navbar'
import Images from './Components/Image';


function App() {
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
