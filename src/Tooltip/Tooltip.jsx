import React from "react"

const TooltipContext = React.createContext()
export { TooltipContext }

export default function Tooltip({ variant, children }) {

    return (
        <TooltipContext.Provider value={{ variant }}>
            <div className={`${variant}-tooltip`}>
                {children}
            </div>
        </TooltipContext.Provider>
    )
}