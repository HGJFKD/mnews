import { FC, SelectHTMLAttributes, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { Label } from "../../styledComponents/form/Input.styled";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { SelectGroup, Option, Select as SSelect } from "../../styledComponents/form/select.styled";
import { InterfaceOption } from "../../types/propsTypes/formField.type";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: InterfaceOption;
    register?: UseFormRegisterReturn;
}

const Select: FC<SelectProps> = ({ options, register, ...restProps }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIsSelected(event.target.value !== "");
    };

    return (
        <SelectGroup isSelected={isSelected}>
            <Label type='select'
            >{capitalizeFirstLetter(options?.selected!)}
            </Label>
            <SSelect onChange={handleSelectChange} {...restProps} {...register} >
                <Option value='1' disabled selected style={{ fontSize: '0px' }}>
                    {""}
                </Option>
                {options?.values?.map((value, i) => (
                    <Option key={i} value={i}>
                        {capitalizeFirstLetter(value)}
                    </Option>
                ))}
            </SSelect>
        </SelectGroup>
    );
};

export default Select;