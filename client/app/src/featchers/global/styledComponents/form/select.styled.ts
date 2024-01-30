import styled from "styled-components";
interface SelectGroupProps {
  isselected: boolean
  isopen: boolean
}

export const ArrowIcon = styled.span<{ isopen: boolean }>`
  position: absolute;
  top: 60%;
  right: 5px;
  color: ${({ isopen }) => (isopen ? '#e15ff9' : '#6e0082')};
  transform: translateY(-50%) rotate(${({ isopen }) => (isopen ? '0deg' : '-90deg')});
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
`;

export const CustomSelectContainer = styled.div<SelectGroupProps>`
  position: relative;
  cursor: pointer;
  width: 320px;
  height: 40px;
  margin: 18px 0; 
  border-bottom: 1px solid ${({ isopen }) => (isopen ? "#e15ff9" : "#6e0082")};
  transition: border-bottom-color 0.5s;
  > label {
    position: absolute;
    top: ${({ isselected, isopen }) => (isselected || isopen ? "-4px" : "50%")};
    left: 5px;
    transform: translateY(-50%);
    font-size: ${({ isselected, isopen }) => (isselected || isopen ? "12px" : "16px")};
    color: ${({ isselected, isopen }) => (isselected || isopen ? "#e15ff9" : "#6e0082")};
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
  &:active, :focus-within, ::before, ::after, :start{
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
  max-height:250px;
  overflow-y:auto;
  border-top: none;
  display: ${({ open }) => (open ? "block" : "none")};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.10);
  &::-webkit-scrollbar{
    max-width: 7px;
  }
  &::-webkit-scrollbar-track{
    background: #f9d6ff;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background: #e15ff9;
    animation: scrollbarDisappear 2s ease-in-out 2s ;
  }

  @keyframes scrollbarDisappear {
    to {
      background: transparent;
    }
  }
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