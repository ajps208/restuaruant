import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cards({restuarant}) {
  return (
    <div>
     <Link style={{textDecoration:"none"}} to={`/view/${restuarant?.id}`}>
        <Card >
        <Card.Img style={{height:"250px"}} className='rounded p-2' variant="top" src={restuarant?.photograph} />
        <Card.Body>
          <Card.Title>{restuarant?.name}</Card.Title>
          <Card.Text>
          Cusine: {restuarant?.cuisine_type}<br/>
          {restuarant?.neighborhood}
  
          </Card.Text>
        </Card.Body>
      </Card>
     </Link>
    </div>
  )
}

export default Cards