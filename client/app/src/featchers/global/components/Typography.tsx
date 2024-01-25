import { FC, ReactNode, CSSProperties } from "react";
import styled from "styled-components";

type TypographyStyledProps = {};

const TypographyStyled = styled.p<TypographyStyledProps>`
  padding: 2px 0px;
  min-height: 100%;
  text-align: center;

`;

type TypographyProps = {
  children?: ReactNode;
  component?: string;
  sx?: CSSProperties;
};

const Typography: FC<TypographyProps> = ({ children: children, component: component, sx }) => {
  return (
    <TypographyStyled as={component} style={sx}>
      {children}
    </TypographyStyled>
  );
};

export default Typography;
