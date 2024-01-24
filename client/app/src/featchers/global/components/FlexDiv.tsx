import { FC, ReactNode, CSSProperties } from "react";
import styled from "styled-components";

type FlexDivStyledProps = {};

const FlexDivStyled = styled.p<FlexDivStyledProps>`
    display: flex;
    justify-content: center;
`;

type FlexDivProps = {
    childern?: ReactNode;
    componnet?: string;
    sx?: CSSProperties;
};

const FlexDiv: FC<FlexDivProps> = ({ childern, componnet, sx }) => {
    return (
        <FlexDivStyled as={componnet} style={sx}>
            {childern}
        </FlexDivStyled>
    );
};

export default FlexDiv;
