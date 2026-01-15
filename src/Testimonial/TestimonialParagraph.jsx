import React from "react"
import { TestimonialContext } from "./Testimonial" 


export default function TestimonialParagraph({ children }) {
    const { variant } = React.useContext(TestimonialContext)

    let paragraph 

    variant === "picture-desktop" || variant === "picture-mobile" ?
        paragraph = `${children}`
        : paragraph = `"${children}"`


    return (
        <div>
            <p className={`${variant}-testimonial-paragraph`}>{paragraph}</p>
        </div> 
    )
}

