interface FormFieldBase {
    name: string;
    label: string;
    type: string;
}
export interface SelectFormField extends FormFieldBase {
    type: "select";
    options: string[];
}

type FormField = FormFieldBase | SelectFormField;

export default FormField;