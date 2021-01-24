import React, { Component } from 'react';
import { Container, Button,Form, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router"; // to get parameter values in props

class ComponentEdit extends Component {
    //Edit employee component
    constructor(props) {
        super(props)
        const employeeData = JSON.parse(localStorage.getItem("employees"))
        let employee = employeeData.find(emp=> emp.id == props.match.params.id)
        console.log("employee : ", employee)
        this.state={
            employee: employee,
            employeeData : employeeData
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
        let employee_to_update = employeeData.find(emp=> emp.id === employee.id)
        employee_to_update = employee // replace old employee by updated employee details
        localStorage.setItem("employees", JSON.stringify(employeeData) ) // updationg local storage
        this.props.history.push("/") // redirect to home page
    }

    render() {
        const { employee } = this.state
        return (
            <Container>
                <br/><br/><br/><br/>
                <Row>
                    <Col/>
                    <Col>
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
export default withRouter(ComponentEdit);