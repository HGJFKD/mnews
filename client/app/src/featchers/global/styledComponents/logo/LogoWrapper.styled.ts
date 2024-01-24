import styled from "styled-components";
import openProps from "../../types/open";

export interface LogoWrapperProps extends openProps {
    issidebar?: "true"
}

const LogoWrapper = styled.div<LogoWrapperProps>`
    width: 100%;
    height: 60px;
    padding: ${({issidebar}) => issidebar === "true" ? "50px 20px" : "0px 20px"};
    display: flex;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    > a {
        width: 100%;
        text-decoration: none;
        color: #fff;
        display: flex;
        align-items: center;
        > div {
            position: relative;
            width: 50px;
            height: 50px;
            overflow: hidden;
            margin: 10px 5px 10px 0px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            @media (min-width: 775px ) {
                background: #111411;
            };
            @media (max-width: 775px) {
                background: ${({ open }) => open ? "#111411" : "#fff"} 
            };
            > i {
                font-size: 45px;
            }
        }
        > h2 {   
            margin-left: ${({issidebar}) => issidebar === "true" ? "10px" : ''};
            @media (max-width: 775px) {
               color: ${({ open }) => open ? "#fff" : "#6e0081"} 
            }
        }
    }
`;

export default LogoWrapper