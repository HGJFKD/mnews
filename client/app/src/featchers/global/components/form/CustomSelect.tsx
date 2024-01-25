import { FC, useState, AllHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";;
import { FaAngleDown } from "react-icons/fa"
import { Label } from "../../styledComponents/form/Input.styled";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { SelectFormField } from "../../types/propsTypes/formField.type";
import { ArrowIcon, CustomSelectContainer, OptionsContainer, SelectedOption, Option as SOption } from "../../styledComponents/form/select.styled";


interface SelectProps extends AllHTMLAttributes<HTMLDivElement> {
  field: SelectFormField;
  register?: UseFormRegisterReturn
  onDataChange?: (name: string, value: any) => void
}

const CustomSelect: FC<SelectProps> = ({ field, register, onDataChange, ...restProps }) => {

  const [selectedOption, setSelectedOption] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {

    setSelectedOption(option);
    setIsOpen(false);
    setIsSelected(true)

    onDataChange && onDataChange(field.name, option)
  };


  return (
    <CustomSelectContainer
      isSelected={isSelected}
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <ArrowIcon isOpen={isOpen}><FaAngleDown /></ArrowIcon>
      <Label type='select'
      >{capitalizeFirstLetter('Select ' + field.label)}
      </Label>
      <SelectedOption
        suppressContentEditableWarning={true}
        {...restProps}>
        {selectedOption}
      </SelectedOption>
      <OptionsContainer
        open={isOpen}>
        {field.options?.map((option, index) => (
          <SOption key={index} onClick={() => {
            handleOptionClick(option)
          }}
          >
            {option}
          </SOption>
        ))}
      </OptionsContainer>
    </CustomSelectContainer>
  );
};

export default CustomSelect;
