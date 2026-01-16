import React from "react"
import { BiArchive } from "react-icons/bi";
import { TooltipContext } from "./Tooltip"

export default function TooltipArchive() {
    const { variant } = React.useContext(TooltipContext)
    return (
        <div className={`${variant}-archive`}><BiArchive /></div>
    )
}


