import React from 'react';
import {Col, Row} from "reactstrap";

const Hero = () => {
    return (
        <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                    <h1 className="text-white">
                        CarefreeCoders <br/>
                    </h1>
                    <p className="text-white mb-3">
                        Product Visualization and Development perfected. Coming soon to you...
                    </p>
                    <div className="btn-wrapper mb-3">
                    </div>
                </Col>
                <Col lg="4" md="5">
                    <img
                        alt="..."
                        className="img-fluid"
                        src={require("../../assets/img/etherum.png")}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Hero;