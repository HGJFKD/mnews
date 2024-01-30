import { FC, ReactNode } from 'react'

type DynamicComponentProps = {
    Component: JSX.ElementType
}
const DynamicComponent: FC<DynamicComponentProps> =
    ({ Component, ...rest }) => {
        return <Component {...rest} />;
    };

export default DynamicComponent