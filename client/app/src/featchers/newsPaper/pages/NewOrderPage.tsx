
import FormField from "../../global/types/propsTypes/formField.type";
import Form from "../../global/components/form/Form";

const NewOrderPage
    = () => {

        const fields: FormField[] = [
            { name: "username", label: "user name", type: "text" },
            { name: "adsize", label: "ad Size", type: "text" },
            { name: "datepublished", label: "Date published", type: "date" },
            { name: "adlocaiton", label: "AD Locaiton", type: "text" },
            { name: "prise", label: "prise", type: "number" },
            { name: "status", label: "status", type: "text" },
            {
                name: "handleragent", label: "handler agent", type: "select", options: {
                    selected: "select ...",
                    values:
                        ["director",
                            'sales Agent',
                            'chief graphic artist',
                            'sub graphic designer',
                        ]
                }

            }]

        const onSubmit = (data: any) => {
            console.log('Form data:', data);
        };

        return (
            <Form formTitle={"NEW ORDER"} fields={fields} onSubmit={onSubmit} />

        )
    }

export default NewOrderPage
