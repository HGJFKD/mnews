import FormField from "../../../global/types/propsTypes/formField.type";

const costumerFields: FormField[] = [
    { name: "firstname", label: "first name", type: "text" },
    { name: "lastname", label: "last name", type: "text" },
    { name: "email", label: "email", type: "text" },
    { name: "phone", label: "phone", type: "text" },
    {
        name: "category", label: "category", type: "select",
        options: ['regular', 'business']
    },
    { name: "discount", label: "discount", type: "number" },


]

export default costumerFields