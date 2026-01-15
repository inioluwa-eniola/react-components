import React from "react"
import useBanner from "../hooks/useBanner" 

export default function BannerIconAndTitle() {
    const { icon, title, iconColor, titleColor } = useBanner()

    return (
        <div className="icon-and-title">
            <div className="icon" style={{color: iconColor}}>{icon}</div>
            <span style={{color: titleColor}}>{title}</span>
        </div>
    )

}