import React, { useState } from "react"
import { FrameworkContext } from "./frameworkContext"

const FrameworkProvider = ({ children }) => {
  const [framework, setFramework] = useState("vue")

  const toggleFramework = selectedFramework => {
    setFramework(selectedFramework)
  }

  return (
    <FrameworkContext.Provider value={{ framework, toggleFramework }}>
      {children}
    </FrameworkContext.Provider>
  )
}

export default FrameworkProvider
