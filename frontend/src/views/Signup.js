import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SignUp} from "../redux/actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const Signup = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const userSignup = useSelector(state => state.userSignup);
    const {loading, error, userInfo} = userSignup;

    useEffect(() => {
        if (userInfo) {
            history.push('/');
        }
    }, [history, userInfo]);

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword)
            setMessage("Password does not match");
        else
            dispatch(SignUp(email, password, secretKey, name));
    };

    return (
        <FormContainer>
            <h3 className="text-center mt-3">SIGN UP</h3>
            {message && <Message>{message}</Message>}
            {error && <Message>{error}</Message>}
            {loading && <Loader/>}
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="enter name" value={name}
                              onChange={e => setName(e.target.value)}
                />
            </Form.Group>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="enter email address" value={email}
                                  onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="enter password" value={password}
                                  onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="enter confirm password" value={confirmPassword}
                                  onChange={e => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="secretKey">
                    <Form.Label>Secret Key</Form.Label>
                    <Form.Control type="password" placeholder="enter secretKey" value={secretKey}
                                  onChange={e => setSecretKey(e.target.value)}
                    />
                </Form.Group>
                <Button className=" btn-block" type='submit' variant='primary' disabled={loading}>Sign up</Button>
            </Form>
            <Row>
                <Col className="text-center py-3">
                    Already have an account ? <Link to='/login'>
                    Sign in
                </Link>
                </Col>
            </Row>
        </FormContainer>
    )
};

export default Signup;