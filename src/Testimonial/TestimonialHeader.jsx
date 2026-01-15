import React from "react"
import { ImQuotesLeft } from "react-icons/im";
import { GiPalmTree } from "react-icons/gi";
import { TestimonialContext } from "./Testimonial"


export default function TestimonialHeader() {
    const { variant } = React.useContext(TestimonialContext)
    
    let displayedChildren 
    variant === "picture-desktop" || variant === "picture-mobile" ?
        displayedChildren = 
            <div className="quote-icon">
                <ImQuotesLeft />
            </div>
        :

        displayedChildren = 
            <div className="title-and-icon">
                <div className="palm-icon"><GiPalmTree /></div>
                <h1>Work<span>cation</span></h1>
            </div>
    
    return (
        displayedChildren
    )
}