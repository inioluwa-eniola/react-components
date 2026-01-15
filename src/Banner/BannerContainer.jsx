import React from "react"
import useBanner from "../hooks/useBanner"

export default function BannerContainer({ children }) {
const { bgColor } = useBanner()
    return (
        <div className="banner" style={{ backgroundColor: bgColor }}>
            { children }
        </div>
    )
}