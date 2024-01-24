import styled from "styled-components";
import { ResponciveProps } from "../../types/propsTypes/ResponcivyTypes";

const NegativeSidbar = styled.div<ResponciveProps>`
  z-index: 2;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: all;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: opacity 224ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  @media (max-width: 775px) {
    pointer-events: ${({ open }) => (open ? "all" : "none")};
  }
  @media (min-width: 775px) {
    background-color: none;
    pointer-events: none;
  }
`;
export default NegativeSidbar;
