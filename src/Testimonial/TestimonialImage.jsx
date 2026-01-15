import React from "react"
import ladyImg from "../assets/lady.jpg" 
import { TestimonialContext } from "./Testimonial"

export default function TestimonialImage() {
    const { variant } = React.useContext(TestimonialContext)

    if (variant === "no-picture-desktop" || variant === "no-picture-mobile") return null

    return (
        <div className={`${variant}-image-wrapper`}>
            <img 
                 src={ladyImg}
                 alt="testimonial avatar"
                 className={`avatar-${variant}`}
            />        
        </div>
    )
}