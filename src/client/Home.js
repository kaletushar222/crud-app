import React, { Component } from 'react';
import { Table, Container, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';

class ComponentHome extends Component {
    // Home page component
    constructor(props) {
        super(props)
        const employeeData = JSON.parse(localStorage.getItem("employees"))
        this.state={
            employeeData : employeeData,
            employees : employeeData
        }
    }

    handleChange=(event)=>{
        const { employeeData } = this.state
        let employees = employeeData
        if(event.target.value){
            let searchText = event.target.value.toUpperCase()
            employees = employees.filter((emp)=>{
                //matching case insensitive name, designation and salary
                if(emp.name.toUpperCase().includes(searchText) || emp.designation.toUpperCase().includes(searchText) || (emp.salary.toString()).includes(searchText)){
                    return emp
                }
            })
        }

        this.setState({
            employees : employees
        })
    }

    render() {
        const { employees } = this.state
        return (
            <Container>
                <br /><br /><br /><br />
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Filter</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Search Name, Designation or Salary"
                                aria-label="Search Text"
                                aria-describedby="basic-addon1"
                                onChange={ this.handleChange }
                            />
                        </InputGroup>
                    </Col>
                    <Col/>
                </Row>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((emp, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.designation}</td>
                                        <td>{emp.salary}</td>
                                        <td><Button href={"/edit/" + emp.id} variant="primary">Edit</Button></td>
                                        <td><Button href={"/delete/" + emp.id} variant="danger">Delete</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }
}
export default ComponentHome;