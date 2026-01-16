import React from "react"
import { ToastContext } from "./Toast"
import useToast from "../hooks/useToast"

export default function ToastContainer() {
    const { variant, paragraph } = React.useContext(ToastContext)

    const { bgColor, icon, iconColor, titleColor, paragraphColor } = useToast()
    const title = variant[0].toUpperCase() + variant.slice(1)

    return (
        <div className="toast" style={{backgroundColor: bgColor}}>
            <div className="icon" style={{color: iconColor}}>{icon}</div>
            <div className="toast-text">
                <p className="title" style={{color: titleColor}}>{title}</p>
                <p className="paragraph" style={{color: paragraphColor}}>{paragraph}</p>
            </div>
        </div>
    )
}