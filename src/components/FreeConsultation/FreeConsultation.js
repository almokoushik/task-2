import React from 'react';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const FreeConsultation = () => {
    return (
        <div>
            <h1>This is Free Consultation Page</h1>
            <h3>Here We will describe some basic work and advice by using a chat bot</h3>
            <h1>If The Service is not here he can go paid serfvices</h1>
            <Link to="/paidservices"> <Button variant="outline-info btn btn-lg">Take a Tour to paid Services</Button>{' '}</Link>
        </div>
    );
};

export default FreeConsultation;