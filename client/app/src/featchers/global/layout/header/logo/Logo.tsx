import { Link } from "react-router-dom"
import IconLogo from "./components/IconLogo"
import LogoWrapper, { LogoWrapperProps } from "../../../styledComponents/logo/LogoWrapper.styled"
import { FC } from "react"


export const Logo: FC<LogoWrapperProps> = ({ open, issidebar }) => {
    return (
        <>
            <LogoWrapper open={open} issidebar={issidebar}>
                <Link to="/">
                    <div>
                        <i><IconLogo /></i>
                    </div>
                    <h2>Mnews</h2>
                </Link>
            </LogoWrapper>
        </>
    )
}
