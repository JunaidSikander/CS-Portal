import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <Row className="align-content-center welcomeText">
                <Col>
                    <h3 className="text-center">
                        Welcome to Computer Systems Portal
                    </h3>
                </Col>
            </Row>
        </Container>
    )
};

export default Home;