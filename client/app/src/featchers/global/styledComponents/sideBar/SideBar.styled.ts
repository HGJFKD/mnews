import styled from "styled-components";
import { ResponciveProps } from "../../types/propsTypes/ResponcivyTypes";

export const SideBarWrappet = styled.div<ResponciveProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 225px;
    height: 100vh;
    
    display: block;
    z-index: 10;
    transition: transform 0.3s ease-in-out;
    @media (max-width: 775px) {
        transform: ${({open}) => open? "translateX(0%)" : "translateX(-102%)"}
    }
    ;
    `
    
export const SideBarBody = styled.div`
    background: linear-gradient(0deg, #640075, #cf00f5);
    height: 100vh;
    overflow: hidden;
    @media (max-width: 775px) {
        box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
        0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
        
    }
`

export const UnorderList = styled.ul`
    position: relative;
    list-style: none;
    padding: 0;
    display: block;
    transition: all 0.5s ease;
`