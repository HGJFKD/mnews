import { FC, InputHTMLAttributes, ReactNode } from "react"

import { NavLinks } from "../styledComponents/sideBar/NavLinks.styled";
import { Icon } from "../styledComponents/globalStyles/Icon.styled";
import Button from "./Button";
import Typography from "./Typography";
import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";
export interface IconAndTitleBtnProps {
    title: string;
    to?: string;
    icon: ReactNode;
    btnprops?: InputHTMLAttributes<HTMLButtonElement>
}

const IconAndTitleBtn: FC<IconAndTitleBtnProps> = ({ title, to, icon, ...btnprops }) => {
    return (
        <Button {...btnprops}
            sx={{ marginTop: "10px", }}>
            <  NavLinks issub={"true"} to={to!} >
                <Icon>{icon}</Icon>
                <Typography
                    component="p"
                    children={capitalizeFirstLetter(title)}
                ></Typography>
            </NavLinks>
        </Button>

    )
}

export default IconAndTitleBtn