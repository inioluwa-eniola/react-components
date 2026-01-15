import React from "react"

const TestimonialContext = React.createContext()
export { TestimonialContext }

export default function Testimonial({ picture, desktop, children }) {
    const variant = `${picture ? "picture" : "no-picture"}-${desktop ? "desktop" : "mobile"}`

    return (
        <TestimonialContext.Provider value={{ variant }}>
            <div className={`${variant}`}>
                {children}
            </div>
        </TestimonialContext.Provider>
    )
}