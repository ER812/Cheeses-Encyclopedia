import React from 'react'

export default function Comments(props) {
  const { comments } = props;

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <p key={comment.id}>{comment.notes}</p>
      ))}
    </div>
  )
}
