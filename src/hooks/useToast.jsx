import React from "react"
import { ToastContext } from "../Toast/Toast"
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiWarningCircle } from "react-icons/pi";
import { TbInfoCircle } from "react-icons/tb";
import { AiOutlineCloseCircle } from "react-icons/ai";


const CONFIG = {
    success: {
        bgColor:  "#ECFDF5",
        icon: <FaRegCircleCheck />,
        iconColor: "#34D399",
        titleColor: "#065F46",
        paragraphColor: "#047857",
    },

    warning: {
        bgColor: "#FFFBEB",
        icon: <PiWarningCircle />,
        iconColor: "#FBBF24",
        titleColor: "#92400E",
        paragraphColor: "#B45309",
    },

    information: {
        bgColor: "#EFF6FF",
        icon: <TbInfoCircle />,
        iconColor: "#60A5FA",
        titleColor: "#1E40AF",
        paragraphColor: "#1C51B9",
    },

    error: {
        bgColor: "#FEF2F2",
        icon: <AiOutlineCloseCircle />,
        iconColor: "#F87171",
        titleColor: "#92400E",
        paragraphColor: "#B45309",
    }   
}

export default function useToast() {
    const context = React.useContext(ToastContext)

    if (!context) {
        throw new Error("useToast must be used inside <Toast />")
    }

    const { variant, paragraph } = context
    const config = CONFIG[variant]

    return {
        variant, 
        paragraph,
        ...config
    }
}