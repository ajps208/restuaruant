import React, { useEffect } from 'react';
import { Card, Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards';
import  {fetchRestuarant}  from '../redux/restuarantSlice'; // Correct import statement

function Home() {
  const {allResturants,loading,error} = useSelector((state) => state.restuarantSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestuarant());
  }, []);

  return (
    <>
    <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
      {
        loading&& <div><Spinner animation='border' variant='info'></Spinner><span className='ms-2'>Loading..... </span></div>
      }
    </div>
     <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
      {
        !loading&&error? <div><span className='ms-2'>{error} </span></div>:null
      }
    </div>
      <Row className='mt-5'>
        {!loading && allResturants.length > 0 ? allResturants.map((restuarant) => (
          <Col className='px-5 my-3' sm={12} md={6} lg={4} xl={3}>
            <Cards restuarant={restuarant}></Cards>
          </Col>
        )) : <div className='fw-bolder  text-danger text-center'>Resutuarants Not Available</div>}
      </Row>
    </>
  );
}

export default Home;
