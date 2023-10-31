import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { searchRestuarant } from "../redux/restuarantSlice";

function Header() {
  const dispatch=useDispatch()
  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand>
            <h1>
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
  
                <i className="fa-solid fa-mug-hot me-2"></i>De Cafes
              </Link>
            </h1>
          </Navbar.Brand>
          <div className="d-flex ms-auto align-items-center">
            <input onChange={(e)=>dispatch(searchRestuarant(e.target.value))} type="text" className="form-control" placeholder="Search restuaruant"/>
            <i className="fa-solid fa-search" style={{marginLeft:"-30px"}}></i>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
