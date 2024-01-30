import styled from "styled-components";

type ButtonStyledProps = {};

const ButtonStyled = styled.button<ButtonStyledProps>`
    position: relative;
    max-height: 50px;
    width: auto;
    display: flex;
    justify-content: center;
    color: #ce00f4;
    border: #cf00f44b 1px solid;
    padding: 10px 5px 5px 5px;
    margin-bottom: 10px;
    border-radius: 10px;
    transition: all 0.3s ease;
    font-size: 16px;
    &:hover {
        background: #e7e7e74e;
        size: 40px;
        box-shadow: 0 0px 7px -2px rgba(200, 2, 207, 0.533);
    }
    &:active {
        transform: scale(0.9);
    }
`;

export default ButtonStyled