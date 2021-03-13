import React from 'react'

function Cheeses(props) {
  return (
    <div>
      {props.cheeses.map(cheese => (
        <div>
          <p>{cheese.name }</p>
        </div>
      ))}
    </div>
  )
}

export default Cheeses
