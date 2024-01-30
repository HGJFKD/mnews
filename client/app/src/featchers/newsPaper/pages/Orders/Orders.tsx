
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import IconAndStyleBtn from "../../../global/components/IconAndStyleBtn";
import Table from "../../../global/components/table/Table";
import DataTable from "../../../global/types/dataTable.type";
import adOrders from "../../mockData/adOrder.data";
import ROUTER from "../../../global/router/router";

const Orders = () => {

  const OrdersData: DataTable[] = adOrders

  const navigate = useNavigate()

  const handleClick = (
    item: DataTable
  ) => {
    navigate(`${ROUTER.Order}${item.id}`);
  }

  return (
    <div data-testid="cypress-test-div">
      <IconAndStyleBtn
        icon={<IoAddCircleOutline />}
        btnprops={{ className: "AddNewOrderBtn" }}
        title="Add new order" to="/orders/neworderform"
      />
      <Table
        data={OrdersData}
        handleClick={handleClick} />
    </div>
  )
}

export default Orders