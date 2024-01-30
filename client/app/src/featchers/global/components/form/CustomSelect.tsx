import { FC, useState, AllHTMLAttributes, useEffect } from "react";
import { UseFormRegisterReturn } from "react-hook-form";;
import { FaAngleDown } from "react-icons/fa"

import { Label } from "../../styledComponents/form/Input.styled";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { SelectFormField } from "../../types/propsTypes/formField.type";
import { ArrowIcon, CustomSelectContainer, OptionsContainer, SelectedOption, Option as SOption } from "../../styledComponents/form/select.styled";
import InputSearch from "../inputs/InputSearch";

interface SelectProps extends AllHTMLAttributes<HTMLDivElement> {
  field: SelectFormField;
  register?: UseFormRegisterReturn
  initialValues?: string;
  onDataChange?: (name: string, value: any) => void
}

const CustomSelect: FC<SelectProps> = (
  { field, register, onDataChange, initialValues, ...restProps }) => {

  const { options } = field

  const [selectedOption, setSelectedOption] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (initialValues) {
      setSelectedOption(initialValues)
      setIsSelected(true)
    }
  }
    , [initialValues]);

  const handleOptionClick = (option: string) => {

    setSelectedOption(option);
    setIsSelected(true)
    onDataChange && onDataChange(field.name, option)
  };

  const handleInputChange = (inputValue: string) => {
    const filtered = options.filter(option =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <CustomSelectContainer
      isselected={isSelected}
      isopen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <ArrowIcon isopen={isOpen}><FaAngleDown /></ArrowIcon>
      <Label type='select'
      >{capitalizeFirstLetter('Select ' + field.label)}
      </Label>

      <SelectedOption
        suppressContentEditableWarning={true}
        defaultValue={initialValues}
        {...restProps}>
        {selectedOption}
      </SelectedOption>
      <OptionsContainer
        open={isOpen}>
        <InputSearch
          onInputChange={handleInputChange}
          setIsOpen={setIsOpen} />
        {filteredOptions.map((option, index) => (
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
