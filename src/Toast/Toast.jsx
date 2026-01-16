import React from "react"

const ToastContext = React.createContext()
export { ToastContext }

export default function Toast({ variant, paragraph, children }) {
    return (
        <ToastContext.Provider value={{ variant, paragraph }}>
            {children}
        </ToastContext.Provider>
    )
}