import React from 'react';
import './Booking.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import FakeData from '../../FakeData/Fake';


const Booking = () => {


    const history = useHistory();
    const handleLogin = () =>{
        history.push("/ShowGoogleMap");
    };




    const {showCardName} = useParams();
   const booking = FakeData.find(show => show.name === showCardName);
   console.log(booking);
    return (
        <>
                
                <Container>
                    <Row>
                        <Col lg={4} className="mb-5 mb-lg-0">
                            <h3 className="edit-text text-center text-md-left my-4">{booking.name}</h3>
                            <p className="text-paragraph text-justify">{booking.details}</p>
                        
                    </Col>
                    <Col lg={3} className="d-none d-lg-block"></Col> 
                            <Col lg={5} className="forms mb-5 mb-lg-0">
                            <form className="form-area">
                                <div className="form-group">
                                    <label>From</label>
                                    <input type="address" className="form-control" placeholder="Enter Address" required />
                                </div>

                                <div className="form-group">
                                    <label>To</label>
                                    <input type="address" className="form-control" defaultValue={showCardName} />
                                </div>
                                <div className="form-group row booking-date">
                                    <div className="col-6">
                                        <label htmlFor="date-input">From</label>
                                        <input className="form-control" type="date" id="dateFrom" required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="dateTo">To</label>
                                        <input className="form-control" type="date" id="dateTo" required />
                                    </div>
                                </div>
                                <button onClick={handleLogin}  type="submit" className="btn btn-warning btn-block  ">Submit</button>
                            </form>
                        </Col>  
                        
                    </Row>
                </Container>
        </>
    );
};

export default Booking;