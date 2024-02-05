
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SelectFormField } from "../../global/types/propsTypes/formField.type";
import Form from "../../global/components/form/Form";
import objectHelpers from "../../global/helpers/objectHelpers";
import costumerFields from "../utils/costumers/costumerFormFields";
import customers from "../mockData/costumers.data";

const CostumerForm = () => {

    // Get orderId param
    const { costumerId } = useParams()

    // Menu initial Order state values from db
    const [initialValues, setInitialValues] = useState<any[] | undefined>()

    // OnSubmit func
    const onSubmit = (data: any) => {

        // Merge inputs or initial data values to the register keys form 
        const mergedData = objectHelpers.mergeKeyAndValue({ keysArray: costumerFields, valuesArray: data, valuesArray2: initialValues })

        console.log('Form data:', mergedData);
    }

    // Get initial Order values from db
    useEffect(() => {
    
        if (costumerId) {
            const rowData = customers.filter((customer) => customer.id === +costumerId!)[0]
            if (rowData) {
                const values = Object.values(rowData).slice(1)
                setInitialValues(values)
            }
        }
    }, [costumerId])

    return (
        <Form
            formTitle={"costumer"}
            onSubmit={onSubmit}
            fields={costumerFields as unknown as SelectFormField[]}
            initialValues={initialValues && initialValues}
        />
    )
}

export default CostumerForm