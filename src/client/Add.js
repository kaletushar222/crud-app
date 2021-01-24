import React, { Component } from 'react';
import { Container, Button,Form, Row, Col } from 'react-bootstrap';

class ComponentAdd extends Component {
    render() {
        return (
            <Container>
                <br/><br/><br/><br/>
                <Row>
                    <Col/>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text" placeholder="Designation" />
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control type="number" placeholder="Salary" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="secondary" href="/">
                                Cancel
                            </Button>
                        </Form>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        )
    }
}
export default ComponentAdd;