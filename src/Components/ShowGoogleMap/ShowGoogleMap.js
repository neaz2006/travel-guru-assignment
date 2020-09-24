import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Hotel from './Hotel';
import hotels from './FakeHotel';
import './ShowGoogleMap.css'
import GoogleMaps from './GoogleMaps';


const ShowGoogleMap = () => {
    return (
        <Container>
            <Row>
                        <Col md={7}>
                                {
                                    hotels.map(hotel=><Hotel hotel={hotel}></Hotel>)
                                }
                        </Col>
                        <Col md={4}>
                           
                            <div style={{paddingTop:"50px"}} >
                                <GoogleMaps></GoogleMaps>
                            </div>
                        </Col>
                    </Row>
        </Container>
    );
};

export default ShowGoogleMap;