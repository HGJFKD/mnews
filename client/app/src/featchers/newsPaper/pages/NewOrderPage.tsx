
import FormField, { SelectFormField } from "../../global/types/propsTypes/formField.type";
import Form from "../../global/components/form/Form";

const NewOrderPage = () => {
    const fields: FormField[] = [
        { name: "username", label: "user name", type: "text" },
        { name: "adsize", label: "ad Size", type: "text" },
        { name: "datepublished", label: "Date published", type: "date" },
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

    const onSubmit = (data: any) => {
        console.log('Form data:', data);
    };

    return (
        <Form formTitle={"ORDER"} fields={fields as unknown as SelectFormField[]} onSubmit={onSubmit}
            initialValues={[
                "chaim",
                "chaim",
            ]}
        />

    )
}

export default NewOrderPage
