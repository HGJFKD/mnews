import { useState } from 'react'
import {
    FooterWrapper,
    Footer,
    SubFooter
} from '../../styledComponents/sideBar/FooterWrapper.styled'
import { Link } from 'react-router-dom'
import { MdOutlineJoinFull } from "react-icons/md";


const SideBarFooter = () => {

    const today = new Date()
    const [year] = useState(today.getFullYear())

    return (
        <>
            <FooterWrapper>
                <Footer>
                    <li>
                        <Link to="aboutUs">About us</Link>
                    </li>
                    <i><MdOutlineJoinFull /></i>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                    <i><MdOutlineJoinFull /></i>
                </Footer>
                <SubFooter>© 2020 - {year}</SubFooter>
            </FooterWrapper>
        </>
    )
}

export default SideBarFooter