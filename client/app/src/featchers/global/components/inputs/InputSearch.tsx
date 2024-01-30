import { CiSearch } from "react-icons/ci";

import SearchInput from "../../styledComponents/form/searchInput.styled"
import { Icon } from "../../styledComponents/globalStyles/Icon.styled"
import { Input } from "../../styledComponents/form/Input.styled";
import { FC, useState } from "react";


interface SelectProps {

    onInputChange: (inputValue: string) => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputSearch: FC<SelectProps> = ({ onInputChange, setIsOpen }) => {

    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        onInputChange(term)
    };

    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.stopPropagation();
        setIsOpen(true);
    };

    return (
        <SearchInput>
            <Input
                type="text"
                placeholder="search"
                value={searchTerm}
                onChange={handleSearchChange}
                onClick={handleClick} />
            <Icon><CiSearch /></Icon>
        </SearchInput>
    )
}

export default InputSearch