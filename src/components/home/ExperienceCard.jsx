import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">
                <h1>{data.role}</h1>
                <p className="lead">
                    {data.date}
                </p>
                
            </div>
        </Col>
     );
}
 
export default ExperienceCard;