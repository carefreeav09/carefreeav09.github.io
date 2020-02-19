import React from 'react';
import {Card, CardBody, CardTitle, Col, Container, Row} from "reactstrap";

const Achievements = () => {
    return (
        <section className="section section-lg ">
            <section className="section">
                <img
                    alt="..."
                    className="path"
                    src={require("../../assets/img/path4.png")}
                />
                <Container>
                    <Row className="row-grid justify-content-between">
                        <Col className="mt-lg-5" md="5">
                            <Row>
                                <Col className="px-2 py-2" lg="6" sm="12">
                                    <Card className="card-stats">
                                        <CardBody>
                                            <Row>
                                                <Col md="4" xs="5">
                                                    <div className="icon-big text-center icon-warning">
                                                        <i className="tim-icons icon-trophy text-warning"/>
                                                    </div>
                                                </Col>
                                                <Col md="8" xs="7">
                                                    <div className="numbers">
                                                        <CardTitle tag="p">1</CardTitle>
                                                        <p/>
                                                        <p className="card-category">Talks</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col className="px-2 py-2" lg="6" sm="12">
                                    <Card className="card-stats upper bg-default">
                                        <CardBody>
                                            <Row>
                                                <Col md="4" xs="5">
                                                    <div className="icon-big text-center icon-warning">
                                                        <i className="tim-icons icon-coins text-white"/>
                                                    </div>
                                                </Col>
                                                <Col md="8" xs="7">
                                                    <div className="numbers">
                                                        <CardTitle tag="p">5000+</CardTitle>
                                                        <p/>
                                                        <p className="card-category">Commits</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="px-2 py-2" lg="6" sm="12">
                                    <Card className="card-stats">
                                        <CardBody>
                                            <Row>
                                                <Col md="4" xs="5">
                                                    <div className="icon-big text-center icon-warning">
                                                        <i className="tim-icons icon-gift-2 text-info"/>
                                                    </div>
                                                </Col>
                                                <Col md="8" xs="7">
                                                    <div className="numbers">
                                                        <CardTitle tag="p">500+</CardTitle>
                                                        <p/>
                                                        <p className="card-category">Pull Requests</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col className="px-2 py-2" lg="6" sm="12">
                                    <Card className="card-stats">
                                        <CardBody>
                                            <Row>
                                                <Col md="4" xs="5">
                                                    <div className="icon-big text-center icon-warning">
                                                        <i className="tim-icons icon-credit-card text-success"/>
                                                    </div>
                                                </Col>
                                                <Col md="8" xs="7">
                                                    <div className="numbers">
                                                        <CardTitle tag="p">10+</CardTitle>
                                                        <p/>
                                                        <p className="card-category">Forks</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="6">
                            <div className="pl-md-5">
                                <h1>
                                    Large <br/>
                                    Achivements
                                </h1>
                                <p>
                                    At Carefreecoders, we're determined to give you the best solution, in the
                                    most optimized time. With the expertise of our team, we're more than skilled
                                    in undertaking your complex project and simplifying it for you.
                                </p>

                                <br/>
                                <p>
                                    Our dream doesn't stop there. CarefreeCoders team thrives to making the world a
                                    better place. One Project at a time.
                                </p>
                                <a
                                    className="font-weight-bold text-info mt-5"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    Show all{" "}
                                    <i className="tim-icons icon-minimal-right text-info"/>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </section>

    );
};

export default Achievements;