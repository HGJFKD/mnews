import {
  Route,
  Routes,
} from "react-router-dom";

import ROUTER from "./router";

import HomePage from "../pages/Home";
import Orders from "../../newsPaper/pages/Orders";
import OrderForm from "../../newsPaper/components/OrderForm";
import NewOrder from "../../newsPaper/pages/NewOrder";
import NotFoundPage from "../pages/NotFoundPage";
import Costumers from "../../newsPaper/pages/costumers/Costumers";
import CostumerForm from "../../newsPaper/components/CostumerForm";


const RouterDom = () => {

  return (
    <>
      <Routes >
        <Route path={ROUTER.Home} element={<HomePage />} />
        <Route path={ROUTER.Profile} element={<div>Profile</div>} />
        <Route path={ROUTER.Dashboard} element={<HomePage />} />
        <Route path={ROUTER.NewsPaper} element={<div>/NewsPaper/pages</div>} />
        <Route path={ROUTER.Consumers} element={<Costumers />} />
        <Route path={`${ROUTER.Consumer}:costumerId`} element={<CostumerForm/>} />
        <Route path={ROUTER.NewConsumer} element={<CostumerForm />} />
        <Route path={ROUTER.Orders} element={<Orders />} />
        <Route path={`${ROUTER.Order}:orderId`} element={<OrderForm />} />
        <Route path={ROUTER.NewOrder} element={<NewOrder />} />
        <Route path={ROUTER.Calendar} element={<div>Calendar</div>} />
        <Route path={ROUTER.Settings} element={<div>Settings</div>} />
        <Route path={ROUTER.ErrorPage} element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default RouterDom