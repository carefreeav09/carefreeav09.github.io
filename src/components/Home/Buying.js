import React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Row
} from "reactstrap";

const Buying = () => {
    return (
        <section className="section section-lg section-coins">
            <img
                alt="..."
                className="path"
                src={require("../../assets/img/path3.png")}
            />
            <Container>
                <Row>
                    <Col md="4">
                        <hr className="line-info"/>
                        <h1>
                            Choose the product{" "}
                            <span className="text-info">that fits your needs</span>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <Card className="card-coin card-plain">
                            <CardHeader>
                                <img
                                    alt="..."
                                    className="img-center img-fluid"
                                    src={require("../../assets/img/bitcoin.png")}
                                />
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col className="text-center" md="12">
                                        <h4 className="text-uppercase">Minimum Awesome Product</h4>
                                        <span>Plan</span>
                                        <hr className="line-primary"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <ListGroup>
                                        <ListGroupItem>7 days</ListGroupItem>
                                        <ListGroupItem>10 components</ListGroupItem>
                                        <ListGroupItem>1 month support</ListGroupItem>
                                    </ListGroup>
                                </Row>
                            </CardBody>
                            <CardFooter className="text-center">
                                <Button className="btn-simple" color="primary">
                                    Get plan
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="card-coin card-plain">
                            <CardHeader>
                                <img
                                    alt="..."
                                    className="img-center img-fluid"
                                    src={require("../../assets/img/etherum.png")}
                                />
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col className="text-center" md="12">
                                        <h4 className="text-uppercase">Short term Product</h4>
                                        <span>Plan</span>
                                        <hr className="line-success"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <ListGroup>
                                        <ListGroupItem>30 days</ListGroupItem>
                                        <ListGroupItem>15 components</ListGroupItem>
                                        <ListGroupItem>3 month support</ListGroupItem>
                                    </ListGroup>
                                </Row>
                            </CardBody>
                            <CardFooter className="text-center">
                                <Button className="btn-simple" color="success">
                                    Get plan
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="card-coin card-plain">
                            <CardHeader>
                                <img
                                    alt="..."
                                    className="img-center img-fluid"
                                    src={require("../../assets/img/ripp.png")}
                                />
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col className="text-center" md="12">
                                        <h4 className="text-uppercase">Dream Product</h4>
                                        <span>Plan</span>
                                        <hr className="line-info"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <ListGroup>
                                        <ListGroupItem>6-12 months</ListGroupItem>
                                        <ListGroupItem>Fully customized components</ListGroupItem>
                                        <ListGroupItem>12 month support</ListGroupItem>
                                    </ListGroup>
                                </Row>
                            </CardBody>
                            <CardFooter className="text-center">
                                <Button className="btn-simple" color="info">
                                    Get plan
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Buying;