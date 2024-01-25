import styled from "styled-components";
interface SelectGroupProps {
  isSelected: boolean
  isOpen: boolean
}

export const ArrowIcon = styled.span<{ isOpen: boolean }>`
  position: absolute;
  top: 60%;
  right: 5px;
  color: ${({ isOpen }) => (isOpen ? '#e15ff9' : '#6e0082')};
  transform: translateY(-50%) rotate(${({ isOpen }) => (isOpen ? '0deg' : '-90deg')});
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
`;

export const CustomSelectContainer = styled.div<SelectGroupProps>`
  position: relative;
  cursor: pointer;
  width: 320px;
  height: 40px;
  margin: 18px 0; 
  border-bottom: 1px solid ${({ isOpen }) => (isOpen ? "#e15ff9" : "#6e0082")};
  transition: border-bottom-color 0.5s;
  > label {
    position: absolute;
    top: ${({ isSelected, isOpen }) => (isSelected || isOpen ? "-4px" : "50%")};
    left: 5px;
    transform: translateY(-50%);
    font-size: ${({ isSelected, isOpen }) => (isSelected || isOpen ? "12px" : "16px")};
    color: ${({ isSelected, isOpen }) => (isSelected || isOpen ? "#e15ff9" : "#6e0082")};
    pointer-events: none;
    transition: 0.5s;
  }

  ${ArrowIcon} {

  }
`;

export const SelectedOption = styled.div`
  padding: 10px;
  font-size: 16px;
  color: #6e0082;
  cursor: pointer;
  border: none;
  &:active, :focus-within, ::before, ::after, :start, ::selection, :single-button{
    border: none;
  }
`;

export const OptionsContainer = styled.div<{ open: boolean }>`
  position: absolute;
  top: 102%;
  left: 0;
  width: 100%;
  z-index:99;
  background-color: #fff;
  border: 1px solid #e15ff9;
  border-top: none;
  display: ${({ open }) => (open ? "block" : "none")};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.10);
`;

export const Option = styled.div`
  padding: 10px;
  font-size: 16px;
  color: #6e0082;
  cursor: pointer;
  &:hover {
    background-color: #e15ff9;
    color: #fff;
  }
`;