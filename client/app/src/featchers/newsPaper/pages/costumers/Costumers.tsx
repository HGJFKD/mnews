
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import DataTable from "../../../global/types/dataTable.type";
import customers from "../../mockData/costumers.data";
import Table from "../../../global/components/table/Table";
import BtnAndTitle from "../../../global/components/btnAndTitle/BtnAndTitle";
import ROUTER from "../../../global/router/router";

const Costumers = () => {

    const customersData: DataTable[] = customers

    const navigate = useNavigate()

    const handleClick = (
        item: DataTable
    ) => {
        navigate(`${ROUTER.Consumer}${item.id}`);
    }

    return (
        <div>
            <BtnAndTitle
                typographyTitle="Costumers"
                icon={<IoAddCircleOutline />}
                title="Add new costumer"
                to={ROUTER.NewConsumer} />
            <Table
                data={customersData}
                handleClick={handleClick} />
        </div>
    )
}

export default Costumers