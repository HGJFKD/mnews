
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import Table from "../../global/components/table/Table";
import DataTable from "../../global/types/dataTable.type";
import adOrders from "../mockData/adOrder.data";
import ROUTER from "../../global/router/router";
import BtnAndTitle from "../../global/components/btnAndTitle/BtnAndTitle";

const Orders = () => {

  const OrdersData: DataTable[] = adOrders

  const navigate = useNavigate()

  const handleClick = (
    item: DataTable
  ) => {
    navigate(`${ROUTER.Order}${item.id}`);
  }

  return (
    <div>
      <BtnAndTitle
        typographyTitle="orders"
        icon={<IoAddCircleOutline />}
        title="Add new order" to={ROUTER.NewOrder}
      />
      <Table
        data={OrdersData}
        handleClick={handleClick} />
    </div>
  )
}

export default Orders