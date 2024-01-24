
import { FC, useState, AllHTMLAttributes } from "react";
import { Label } from "../../styledComponents/form/Input.styled";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { InterfaceOption } from "../../types/propsTypes/formField.type";
import { UseFormRegisterReturn } from "react-hook-form";
import { FaAngleDown } from "react-icons/fa"
import { ArrowIcon, CustomSelectContainer, OptionsContainer, SelectedOption, Option as SOption } from "../../styledComponents/form/select.styled";


interface SelectProps extends AllHTMLAttributes<HTMLDivElement> {
  options: InterfaceOption;
  register?: UseFormRegisterReturn;
}

const CustomSelect: FC<SelectProps> = ({ options, register, ...restProps }) => {

  const [selectedOption, setSelectedOption] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    setIsSelected(true)
  };

  return (
    <CustomSelectContainer
      isSelected={isSelected}
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <ArrowIcon isOpen={isOpen}><FaAngleDown /></ArrowIcon>
      <Label type='select'
      >{capitalizeFirstLetter(options.selected)}
      </Label>
      <SelectedOption>
        {selectedOption}
      </SelectedOption>
      <OptionsContainer
        {...restProps} {...register}
        open={isOpen}>
        {options.values.map((option, index) => (
          <SOption key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </SOption>
        ))}
      </OptionsContainer>
    </CustomSelectContainer>
  );
};

export default CustomSelect;
