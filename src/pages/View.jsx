import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


function View() {
   const {id}= useParams()
   const{allResturants,loading,error} = useSelector((state)=>state.restuarantSlice)
   const[restuarant,setRestuarant]=useState({})
   useEffect(()=>{
    setRestuarant(allResturants.find(item=>item.id==id))

   },[])
  return (
    <div className='d-flex justify-content-center'>
         <Card style={{width:"350px"}} >
        <Card.Img style={{height:"250px"}} className='rounded p-2' variant="top" src={restuarant?.photograph} />
        <Card.Body>
          <Card.Title>{restuarant?.name}</Card.Title>
          <Card.Text>
          Cusine: {restuarant?.cuisine_type}<br/>
          {restuarant?.neighborhood}
  
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default View