import React from "react"
import { BannerContext } from "./Banner"

const titleColors = {
    success: "#047857",
    warning: "#B45309",
    error: "#B45309",
    neutral: "#1C51B9"
}
export default function BannerDescription({ children }) {
    const { variant, lineHeight } = React.useContext(BannerContext)

    return (
        lineHeight === "multi-line" ? 
            <p style={{ color: titleColors[variant] }}>
                {children}
            </p> 
        : null
    )
}