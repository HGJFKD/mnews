import styled from "styled-components";

interface SelectGroupProps {
  isSelected: boolean
}

export const SelectGroup = styled.div<SelectGroupProps>`
  position: relative;
  margin: 18px 0;
  border-bottom: 1px solid #6e0082;
  transition: border-bottom-color 0.5s;

  &:focus-within {
    border-bottom-color: #e15ff9;

    > label {
      top: -4px;
      left: 5px;
      color: #e15ff9;
      font-size: 12px;
    }
  }

  > label {
    position: absolute;
    top: ${({ isSelected }) => (isSelected ? "-4px" : "50%")};
    left: 5px;
    transform: translateY(-50%);
    font-size: ${({ isSelected }) => (isSelected ? "12px" : "16px")};
    color: ${({ isSelected }) => (isSelected ? "#e15ff9" : "#6e0082")};
    pointer-events: none;
    transition: 0.5s;
  }
`;

export const Select = styled.select`
    width: 320px;
    height: 40px;
    font-size: 16px;
    color: #6e0082;
    padding: 0 5px;
    background: transparent;
    border: none;
    outline: none;
`

export const Option = styled.option`
    position: absolute;
    font-size: 16px;
    color: #6e0082;
    pointer-events: none;
    transition: 0.5s;
`