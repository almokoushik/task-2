
import React from 'react';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Bot from '../ChatBot/Bot';

const Home = () => {
    return (
        <div>
            {/* <h1>This is Home</h1>
            <h4>Implementing A chatbot and a free consultation and it will be redirected to Chatbot</h4>
            <Link to="/freeconsultation"> <Button variant="outline-info btn btn-lg">Take a Free Consultation</Button>{' '}</Link> */}
            <Bot></Bot>
        </div>
    );
};

export default Home;