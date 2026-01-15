import React from "react"
import "./index.css"
import classnames from "classnames"


export default function Badge ({ variant, shape, children }) {
  
  const defaultClass = "default-badge"
  const variantClass = variant && shape ? `${variant}-${shape}-badge` : ""
  const allClasses = classnames(defaultClass, variantClass)

  return (
    <div className={allClasses}>{children}</div>
  )
}
