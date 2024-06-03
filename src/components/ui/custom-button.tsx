import React, { ReactNode } from "react"

interface Props {
    className?: string;
    children: ReactNode;
}

const CustomButton = ({ className: classes, children }: Props) => {
    return (
        <>
            <button className={"p-2 " + classes}>{children}</button>
        </>
    )
}

export default CustomButton;