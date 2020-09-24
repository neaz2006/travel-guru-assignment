import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import FakeData from '../../FakeData/Fake';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'




const Home = () => {
    const show = FakeData;
    const [showCard , setShowCard] = useState(show[0]);
    console.log(showCard);

    return (
        <>
            <Container>
                <Row>
                    <Col md={4} className="heading">
                        <h1 >{showCard.name}</h1>
                        <p >{showCard.detail}</p>
                        <Link to={"/booking/" + showCard.name}>
                            <button className="btn btn-warning">Booking   <FontAwesomeIcon icon={faArrowRight} /></button>
                        </Link> 
                    </Col>
                    <Col lg={8} className="pl-5" >
                        <Row>
                        {
                            show.map(show =>
                             <Col className="image" sm={4}  key={show.name}>
                               <Link to= {`/booking/${show.name}`}>
                                   <div className="small mt-3 text-white text-center d-block bg-transparent">
                                   <img className="card-img" src={show.image} alt=""/>
                                            <h4 className="text ml-3">{show.name}</h4>
                                   </div>
                               </Link> 
                               </Col>
                            )
                        }
                        </Row>
                    </Col>
                </Row>
             </Container>
        </>
    );
};

export default Home;