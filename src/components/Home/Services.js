import React from 'react';
import {Col, Container, Row} from "reactstrap";

const Services = () => {
    return (
        <section className="section section-lg">
            <img
                alt="..."
                className="path"
                src={require("../../assets/img/path4.png")}
            />
            <img
                alt="..."
                className="path2"
                src={require("../../assets/img/path5.png")}
            />
            <img
                alt="..."
                className="path3"
                src={require("../../assets/img/path2.png")}
            />
            <Container>
                <Row className="justify-content-center">
                    <Col lg="12">
                        <h1 className="text-center">What to Expect</h1>
                        <Row className="row-grid justify-content-center">
                            <Col lg="3">
                                <div className="info">
                                    <div className="icon icon-primary">
                                        <i className="tim-icons icon-money-coins"/>
                                    </div>
                                    <h4 className="info-title">Low Commission</h4>
                                    <hr className="line-primary"/>
                                    <p>
                                        Start with a minimal investment, our team will give you a base product
                                        to kick start your dream.
                                    </p>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="info">
                                    <div className="icon icon-warning">
                                        <i className="tim-icons icon-chart-pie-36"/>
                                    </div>
                                    <h4 className="info-title">High Incomes</h4>
                                    <hr className="line-warning"/>
                                    <p>
                                        Start getting returns quickly with the minimum awesome product
                                        and go for more.
                                    </p>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className="info">
                                    <div className="icon icon-success">
                                        <i className="tim-icons icon-single-02"/>
                                    </div>
                                    <h4 className="info-title">Satisfaction</h4>
                                    <hr className="line-success"/>
                                    <p>
                                        We're a bit used to compliments, so we'll make sure to put a smile in your face
                                        with out work.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Services;