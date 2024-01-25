import { FC, InputHTMLAttributes, ReactNode } from "react"

import { NavLinks } from "../styledComponents/sideBar/NavLinks.styled";
import { Icon } from "../styledComponents/globalStyles/Icon.styled";
import Button from "./Button";
import Typography from "./Typography";



type IconAndTitleBtnProps = {
    title: string;
    to: string;
    icon: ReactNode;
    btnprops: InputHTMLAttributes<HTMLButtonElement>
}

const IconAndTitleBtn: FC<IconAndTitleBtnProps> = ({ title, to, icon, ...btnprops }) => {
    return (
        <Button {...btnprops}
            sx={{ width: "100px", marginTop: "20px", }}>
            <  NavLinks issub={"true"} to={to} >
                <Icon>{icon}</Icon>
                <Typography
                    children={title}
                ></Typography>
            </NavLinks>
        </Button>

    )
}

export default IconAndTitleBtn