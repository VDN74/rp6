import React from 'react'
import "./cellText.css"

const CellText = ({children}) => {
  return (
    <span className='cell-text'>{children}</span>
  )
}

export default CellText