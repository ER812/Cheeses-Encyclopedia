import React from 'react'

export default function Flavors(props) {
  const { flavors } = props;

  return (
    <div>
      <h3>Flavors</h3>
      {flavors.map((flavor) => (
        <p key={flavor.id}>{flavor.name}</p>
      ))}
    </div>
  )
}
