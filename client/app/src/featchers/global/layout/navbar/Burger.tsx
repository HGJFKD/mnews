import { FC } from 'react';

import SideBar from '../sideBar/SideBar';
import openProps from '../../types/open';
import StyledBurger from '../../styledComponents/burger/burger.styled';

const Burger: FC<openProps> = ({ open, setOpen }) => {

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen!(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <SideBar open={open} />
        </>
    )
}

export default Burger