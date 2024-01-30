import { FC } from "react"

import Typography from "../Typography"
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter"

export interface TitleProps {
    typographyTitle: string
};

const Title: FC<TitleProps> = ({ typographyTitle }) => {
    return (
        <Typography
            sx={{ color: '#7a0090' }}
            component='h1'
            children={capitalizeFirstLetter(typographyTitle)}
        />
    )
}
export default Title