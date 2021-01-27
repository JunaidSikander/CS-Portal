import React from 'react';
import {Container} from 'react-bootstrap'
import Header from "./components/Header";
import {Route} from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Signin from "./views/Signin";
import Signup from "./views/Signup";

const App =() => {
    return (
        <>
            <Header/>
            <main className='py-3'>
                <Container>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Signin}/>
                    <Route path="/register" component={Signup}/>
                </Container>
            </main>
            <Footer/>
        </>

    );
}

export default App;
