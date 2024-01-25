
import { IoAddCircleOutline } from "react-icons/io5";
import IconAndStyleBtn from "../../global/components/IconAndStyleBtn";
import Table from "../../global/components/table/Table";
import DataTable from "../../global/types/dataTable.type";
import adOrders from "../mockData/adOrder.data";


const Orders = () => {

  const OrdersData: DataTable[] = adOrders



  return (
    <div data-testid="cypress-test-div">

      <IconAndStyleBtn
        icon={<IoAddCircleOutline />}
        btnprops={{ className: "AddNewOrderBtn" }}
        title="Add new order" to="/orders/neworderform"
      />
      <Table data={OrdersData} />

    </div>
  )
}

export default Orders