import React, { Component } from 'react';
import { Container, Button,Form, Row, Col, Alert } from 'react-bootstrap';
import { withRouter } from "react-router";

class ComponentAdd extends Component {

    constructor(props){
        super(props)
        const employeeData = JSON.parse(localStorage.getItem("employees"))
        this.state={
            employee: {
                id:Math.floor(Math.random() * 10000000),
                name: '',
                designation: '',
                salary: 0 
            },
            employeeData : employeeData,
            showAlert : false,
            errorMessage : ''
        }
    }

    handleChange = (event) =>{
        const { employee } = this.state
        //setting the current updated value
        employee[event.target.name] = event.target.value
        this.setState({
            employee : employee
        })
    }

    submitForm = (event) =>{
        event.preventDefault()
        const { employee, employeeData } = this.state

        if(!employee.name){
            return this.setState({
                showAlert : true,
                errorMessage : "Please Enter Name"
            })
        }

        if(!employee.designation){
            return this.setState({
                showAlert : true,
                errorMessage : "Please Enter Designation"
            })
        }

        if(!employee.salary){
            return this.setState({
                showAlert : true,
                errorMessage : "Please Enter Salary"
            })
        }

        employeeData.push(employee)
        localStorage.setItem("employees", JSON.stringify(employeeData) ) // updationg local storage
        this.props.history.push("/") // redirect to home page
    }

    closeAlert = () =>{
        this.setState({
            showAlert : false,
            errorMessage : ''
        })
    }

    render() {
        const { employee, showAlert, errorMessage } = this.state
        return (
            <Container>
                <br/><br/><br/><br/>
                <Row>
                    <Col/>
                    <Col>
                        {
                            !showAlert?'':   
                            <Alert variant="danger" onClose={ this.closeAlert } dismissible>
                                <p>
                                { errorMessage }
                                </p>
                            </Alert>
                        }
                        <Form>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter Name" value={ employee.name } onChange={ this.handleChange }/>
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text" name="designation" placeholder="Designation"  value={ employee.designation } onChange={ this.handleChange } />
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control type="number" name="salary" placeholder="Salary"  value={ employee.salary } onChange={ this.handleChange } />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={ this.submitForm }>
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
export default withRouter(ComponentAdd);