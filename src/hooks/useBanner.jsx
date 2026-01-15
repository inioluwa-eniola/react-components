import React from "react"
import { BannerContext } from "../Banner/Banner"
import { FaCheckCircle } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";

const CONFIG = {
    success: {
        icon: <FaCheckCircle />,
        title: "Congratulations!",
        iconColor: "#34D399",
        titleColor: "#065F46",
        bgColor: "#ECFDF5",
    },

    warning: {
        icon: <IoIosWarning />,
        title: "Attention",
        iconColor: "#FBBF24",
        titleColor: "#92400E",
        bgColor: "#FFFBEB",
    },

    error: {
        icon: <IoIosCloseCircle />,
        title: "There is a problem with your application",
        iconColor: "#F87171",
        titleColor: "#92400E",
        bgColor: "#FEF2F2",
    },

    neutral: {
        icon: <FaInfoCircle />,
        title: "Update available",
        iconColor: "#60A5FA",
        titleColor: "#1E40AF",
        bgColor: "#EFF6FF",
    }
}

export default function useBanner() {
    const context = React.useContext(BannerContext)

    if(!context) {
        throw new Error("useBanner must be used inside <Banner>")
    }

    const { variant, lineHeight } = context
    const config = CONFIG[variant]

    if (!config) {
        throw new Error(`Unknown banner variant: ${variant}`)
    }

    return {
        variant, 
        lineHeight,
        ...config
    }
}