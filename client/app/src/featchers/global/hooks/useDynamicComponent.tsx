import { useState } from "react";

const DynamicComponent = ({ component }: any) => {
    const [dynamicComponent, setDynamicComponent] = useState<any | null>(
        null
    );
    const setComponent = (component: any) => {
        setDynamicComponent(() => component);
    };

    return (
        <>{component}</>
    );
};



export default DynamicComponent