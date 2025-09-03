import React from 'react'

const ChildComponent1 = ({handleClick}) => {
  return (
    <div>
      <h1>Child Component 1</h1>
      <button onClick={()=>{handleClick(1)}}>Option 1</button>
    </div>
  )
}

export default ChildComponent1
