import React from "react"
import "./index.css"
import classnames from "classnames"


export default function Badge ({ variant, shape }) {
  
  let defaultClass = "default-badge"
  let variantClass = variant && shape ? `${variant}-${shape}-badge` : ""
  const allClasses = classnames(defaultClass, variantClass)

  return (
    <div className={allClasses}>Badge</div>
  )
}
