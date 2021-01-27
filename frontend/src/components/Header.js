import React, {useEffect} from 'react';
import {Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/actions/userActions";

const Header = () => {

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const dispatch = useDispatch();

    useEffect(() => {

    }, [userInfo]);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header>
            <Navbar Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <LinkContainer to='/'>
                    <Navbar.Brand>
                        CS Portal
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="ml-auto ">
                        <LinkContainer to="/">
                            <NavLink>
                                Home
                            </NavLink>
                        </LinkContainer>
                        {userInfo ?
                            (
                                <NavDropdown title={userInfo.name} id="username">
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item> Profile </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={handleLogout}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) :
                            (
                                <>
                                    <LinkContainer to="/login">
                                        <NavLink>
                                            Sign in
                                        </NavLink>
                                    </LinkContainer>
                                    <LinkContainer to="/register">
                                        <NavLink>
                                            Sign up
                                        </NavLink>
                                    </LinkContainer>
                                </>


                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
};

export default Header;