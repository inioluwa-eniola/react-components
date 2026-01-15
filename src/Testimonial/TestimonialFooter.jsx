import React from "react"
import { TestimonialContext } from "./Testimonial"
import { LuSlash } from "react-icons/lu";

export default function TestimonialFooter( { children }) {
    const [spanEl, pEl] = React.Children.toArray(children)
    const { variant } = React.useContext(TestimonialContext)

    let footer

    variant === "no-picture-desktop" ?
        footer = 
            <div className={`${variant}-footer-section`}>
                {spanEl}
                <div className="slash-icon">
                    <LuSlash />
                </div>
                {pEl}
            </div>
        :

        footer = 
            <div className={`${variant}-footer-section`}>
                {spanEl}
                {pEl}
            </div>

    return (
       footer
    )
}

