import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import HamburgerWrapper from '../../styledComponents/hamburger/HamburgerWrapper.styled'
import { FC } from "react";

type HamburgerProps = {
    on: boolean;
    toggle: () => void
}
export const Hamburger : FC<HamburgerProps> = ({ on, toggle }) => {
 
    return (
        <HamburgerWrapper
            onClick={toggle}
        > 
            {on ? (
                <i><GiHamburgerMenu/></i>
            ) : (
                <i><IoMdClose/></i>
            )}
        </HamburgerWrapper>
    )
}
