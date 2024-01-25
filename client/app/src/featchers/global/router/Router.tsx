import {
  Route,
  Routes,
} from "react-router-dom";

import HomePage from "../pages/Home";
import Orders from "../../newsPaper/pages/Orders";
import NewOrderForm from "../../newsPaper/pages/NewOrderPage";

const Router = () => {
  return (
    <>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/home" element={<HomePage />} />
        <Route path="/NewsPaper/pages" element={<div>/NewsPaper/pages</div>} />
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route path="/orders/neworderform" element={<NewOrderForm />} />
      </Routes>
    </>
  )



}

export default Router