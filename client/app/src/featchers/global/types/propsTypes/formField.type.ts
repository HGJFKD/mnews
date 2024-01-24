export interface InterfaceOption {
    selected: string;
    values: string[]
}

interface FormField {
    name: string;
    label: string;
    type: string;
    options?: InterfaceOption;
}


export default FormField