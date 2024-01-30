
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SelectFormField } from "../../global/types/propsTypes/formField.type";
import Form from "../../global/components/form/Form";
import adOrders from "../mockData/adOrder.data";
import ordersFields from "../utils/orders/ordersFormFields";
import objectHelpers from "../../global/helpers/objectHelpers";

const OrderForm: FC<{ isNotNewOrder?: boolean }> = ({ isNotNewOrder }) => {

    // Get orderId param
    const { orderId } = useParams()

    // Menu initial Order state values from db
    const [initialValues, setInitialValues] = useState<any[] | undefined>()

    // OnSubmit func
    const onSubmit = (data: any) => {

        // Merge inputs or initial data values to the register keys form 
        const mergedData = objectHelpers.mergeKeyAndValue({ keysArray: ordersFields, valuesArray: data, valuesArray2: initialValues })

        console.log('Form data:', mergedData);
    }

    // Get initial Order values from db
    useEffect(() => {

        if (isNotNewOrder) {
            const rowData = adOrders.filter((order) => order.id === +orderId!)[0]
            if (rowData) {
                const values = Object.values(rowData).slice(1)
                setInitialValues(values)
            }
        }
    }, [isNotNewOrder, orderId])

    return (
        <Form
            formTitle={"ORDER"}
            onSubmit={onSubmit}
            fields={ordersFields as unknown as SelectFormField[]}
            initialValues={initialValues && initialValues}
        />
    )
}

export default OrderForm
