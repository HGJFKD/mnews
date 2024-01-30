import { FC } from "react"
import IconAndTitleBtn, { IconAndTitleBtnProps } from "../IconAndStyleBtn"
import Title, { TitleProps } from "../title/Title"
import SBtnAndTitle from "../../styledComponents/divs/BtnAndTitle.styled"

interface BtnAndTitleProps extends IconAndTitleBtnProps, TitleProps { }

const BtnAndTitle: FC<BtnAndTitleProps> = ({
    typographyTitle, title, to, icon, ...btnprops
}) => {
    return (
        <SBtnAndTitle>
            <IconAndTitleBtn
                title={title}
                to={to}
                icon={icon}
                {...btnprops}
            />
            <Title typographyTitle={typographyTitle} />
        </SBtnAndTitle>
    )
}

export default BtnAndTitle