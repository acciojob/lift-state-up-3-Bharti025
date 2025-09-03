import React from 'react'

const ChildComponent2 = ({handleClick}) => {
  return (
    <div>
      <h1>Child Component 2</h1>
      <button onClick={()=>{
        handleClick(2)
      }}>Option 2</button>
    </div>
  )
}

export default ChildComponent2
