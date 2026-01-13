import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";



export default function Banner ( {variant, style} ) {
    let title;
    let icon;
    let colorObj = {}

    if (variant === "success") {
        title = "Congratulations!"
        icon = <FaCheckCircle />
        colorObj = {
            bgColor: "#ECFDF5",
            iconColor: "#34D399",
            titleColor: "#065F46",
            textColor: "#047857"
        }
    }

    if (variant === "warning") {
        title = "Attention"
        icon = <IoIosWarning />
        colorObj = {
            bgColor: "#FFFBEB",
            iconColor: "#FBBF24",
            titleColor: "#92400E",
            textColor: "#B45309"
        }
    }

    if (variant === "error") {
        title = "There is a problem with your application"
        icon = <IoIosCloseCircle />
        colorObj = {
            bgColor: "#FEF2F2",
            iconColor: "#F87171",
            titleColor: "#92400E",
            textColor: "#B45309"
        }
    }

    if (variant === "neutral") {
        title = "Update available"
        icon = <FaInfoCircle />
        colorObj = {
            bgColor: "#EFF6FF",
            iconColor: "#60A5FA",
            titleColor: "#1E40AF",
            textColor: "#1C51B9"
        }
    }

    return (
        <div className="banner" style={{backgroundColor: colorObj.bgColor}}>
            <div className="icons-and-title">
                <div className="icon" style={{color: colorObj.iconColor}}>{icon}</div>
                <span style={{color: colorObj.titleColor}}>{title}</span>
            </div>
            {style === "multi-line" ? 
                <p style={{color: colorObj.textColor}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac laoreet odio
                </p> : ""
            }
        </div>
    )
}