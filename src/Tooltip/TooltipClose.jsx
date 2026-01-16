import React from "react"
import { IoClose } from "react-icons/io5";
import { TooltipContext } from "./Tooltip"

export default function TooltipClose() {
    const { variant } = React.useContext(TooltipContext)
    
    return(
        <button className={`${variant}-close`}><IoClose /></button>
    )
}