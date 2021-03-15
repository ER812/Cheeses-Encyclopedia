import React from 'react';
import { Link } from 'react-router-dom';

export default function Cheeses(props) {
  const { cheeses, handleDelete, currentUser } = props;

  return (
    <div>
      <div>
      <Link to="/login"> Login </Link>
      <Link to="register">Register</Link>'
      </div>
      <h3>Cheeses</h3>
      {cheeses.map((cheese) => (
        <React.Fragment key={cheese.id}>
          <Link to={`/cheeses/${cheese.id}`}><p>{cheese.name}</p></Link>
          { cheese.user_id === currentUser?.id &&
            <>
              <Link to={`/cheeses/${cheese.id}/edit`}><button>edit</button></Link>
              <button onClick={() => handleDelete(cheese.id)}>delete</button>
            </>
          }
        </React.Fragment>
      ))}
      <br />
      <Link to='/cheeses/new'><button>Create</button></Link>
    </div>
  )
}
