import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../redux/actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const Signin = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secretKey, setSecretKey] = useState('');

    const userLogin = useSelector(state => state.userLogin);
    const {loading, error, userInfo} = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push('/');
        }
    },[history, userInfo]);

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login(email, password, secretKey));

    };

    return (
        <FormContainer>
            <h3 className="text-center mt-3">SIGN IN</h3>
            {error && <Message> {error} </Message>}
            {loading && <Loader/>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="enter email address" value={email}
                                  onChange={e => setEmail(e.target.value)} required={true}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="enter password" value={password}
                                  onChange={e => setPassword(e.target.value)} required={true}
                    />
                </Form.Group>
                <Form.Group controlId="secretKey">
                    <Form.Label>Secret Key</Form.Label>
                    <Form.Control type="password" placeholder="enter secretKey" value={secretKey}
                                  onChange={e => setSecretKey(e.target.value)} required={true}
                    />
                </Form.Group>
                <Button className=" btn-block" type='submit' variant='primary' disabled={loading}>Sign in</Button>
            </Form>
            <Row>
                <Col className="text-center py-3">
                    New User ? <Link to='/register'>
                    Sign up
                </Link>
                </Col>
            </Row>
        </FormContainer>
    )
};

export default Signin;