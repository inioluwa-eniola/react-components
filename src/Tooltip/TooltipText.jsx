import React from "react"
import { TooltipContext } from "./Tooltip"

export default function TooltipText({ children }) {
    const { variant } = React.useContext(TooltipContext)

    return (
        <div className="tooltip-text">
            <p className={`${variant}-title`}>Archive notes</p>
            <p className={`${variant}-para`}>{children}</p>
        </div>
    )
}