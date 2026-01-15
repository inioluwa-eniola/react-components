import React from "react"
import { TestimonialContext } from "./Testimonial"

export default function TestimonialText({ children }) {
    const { variant } = React.useContext(TestimonialContext)

    return (
        <div className={`${variant}-testimonial-text`}>
            {children}
        </div>
    )
}