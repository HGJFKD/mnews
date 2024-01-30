import { FC, InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { InputGruop, Label, Input as SInput } from "../../styledComponents/form/Input.styled";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  register?: UseFormRegisterReturn;
  initialValues?: string;
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> { }

const Input: FC<InputProps & { labelProps?: LabelProps }> = ({ type, title, initialValues, labelProps, register, ...restProps }) => {
  return (
    <InputGruop>
      <SInput
        type={type}
        required
        defaultValue={initialValues}
        {...restProps}
        {...register}
      />
      <Label type={type!} form="" {...labelProps}>
        {capitalizeFirstLetter(title)}
      </Label>
    </InputGruop>
  );
};

export default Input;