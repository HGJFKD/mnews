import { FC, ReactNode, CSSProperties, InputHTMLAttributes } from "react";
import ButtonStyled from "../styledComponents/buttons/button.styled";

type ButtonProps = {
    children?: ReactNode;
    sx?: CSSProperties;
    btnprops?: InputHTMLAttributes<HTMLButtonElement>
};

const Button: FC<ButtonProps> = ({ children, sx, ...btnprops }) => {
    return (
        <ButtonStyled style={sx} {...btnprops}>
            {children}
        </ButtonStyled>
    );
};

export default Button;
