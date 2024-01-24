import styled from "styled-components";

type SquareLogoProps = {
    opacity: string
    rotate: number
}

const StyledSquareLogo = styled.div<SquareLogoProps>`
    width: 20px;
    height: 20px;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
    position: absolute;
    border: 2.8px rgba(225,95,249, ${({ opacity }) => opacity}) solid;
    transform: translate(-50%, -50%) scale(1) rotate(${({ rotate }) => `${rotate}deg`});
`;

export default StyledSquareLogo;

