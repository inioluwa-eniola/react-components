import React from "react";

const BannerContext = React.createContext()
export { BannerContext }

export default function Banner ({ variant, lineHeight, children }) {
    return (
        <>
            <BannerContext.Provider value={{ variant, lineHeight }}>
                {children}
            </BannerContext.Provider>
        </>
    )
}
