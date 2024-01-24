
import { IoAddCircleOutline } from "react-icons/io5";
import IconAndTytleBtn from "../../global/components/IconAndStyleBtn";
import Table from "../../global/components/table/Table";
import { DataTable } from "../../global/components/table/data";


const Orders = () => {

  const OrdersData: DataTable[] = [{
    "Country Name": "Afghanistan",
    Capital: "Kabul",
    Currency: "Afghani"
  },
  {
    "Country Name": "Albania",
    Capital: "Tirane",
    Currency: "Lek"
  },
  {
    "Country Name": "Algeria",
    Capital: "Algiers",
    Currency: "Dinar"
  }]



  return (
    <div>

      <IconAndTytleBtn
        icon={<IoAddCircleOutline />}
        btnprops={{ type: 'submit' }}
        title="Add new order" to="/orsers/neworderform"
      />

      <Table data={OrdersData} />

    </div>
  )
}

export default Orders