import React from 'react';
import {Col, Container, Row} from "react-bootstrap";


const Footer = () => (
    <footer className="align-text-bottom">
        <Container>
            <Row>
                <Col className="text-center">
                    Copyright &copy; CS Portal
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;