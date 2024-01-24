import { FC, InputHTMLAttributes, ReactNode } from "react"

import { NavLinks } from "../styledComponents/sideBar/NavLinks.styled";
import { Icon } from "../styledComponents/globalStyles/Icon.styled";
import Button from "./Button";
import Typography from "./Typography";



type IconAndTytleBtnProps = {
    title: string;
    to: string;
    icon: ReactNode;
    btnprops: InputHTMLAttributes<HTMLButtonElement>
}

const IconAndTytleBtn: FC<IconAndTytleBtnProps> = ({ title, to, icon, ...btnprops }) => {
    return (
        <Button {...btnprops}
            sx={{ width: "100px", marginTop: "20px", }}>
            <  NavLinks issub={"true"} to={to} >
                <Icon>{icon}</Icon>
                <Typography
                    childern={title}
                ></Typography>
            </NavLinks>
        </Button>

    )
}

export default IconAndTytleBtn