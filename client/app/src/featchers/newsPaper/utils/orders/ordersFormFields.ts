import objectHelpers from "../../../global/helpers/objectHelpers";
import FormField from "../../../global/types/propsTypes/formField.type";
import customers from "../../mockData/costumers.data";

const customerNames = objectHelpers.extractFullName(customers)

const ordersFields: FormField[] = [
    { name: "username", label: "user name", type: "select", options: customerNames },
    {
        name: "adsize", label: "ad Size", type: "select",
        options: [
            'gate',
            'back',
            'double',
            'page',
            'half',
            'quarter',
            'eighth',
            'half past eight',
            'needed'
        ]
    },
    { name: "datepublished", label: "Date published", type: "date", },
    { name: "adlocation", label: "AD Location", type: "text" },
    { name: "prise", label: "prise", type: "number" },
    {
        name: "status", label: "status", type: "select",
        options: ['active', 'inactive', 'pending']
    },
    {
        name: "handleragent", label: "handler agent", type: "select",
        options: [
            "director",
            'sales Agent',
            'chief graphic artist',
            'sub graphic designer',
        ]
    }]

export default ordersFields