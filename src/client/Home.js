import React, { Component } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { employees } from '../static_data/employee_data'

class ComponentHome extends Component {
    render() {
        return (
            <Container>
                <br/><br/><br/><br/>
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
                            employees.map((emp, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{ index + 1 }</td>
                                        <td>{ emp.name }</td>
                                        <td>{ emp.designation }</td>
                                        <td>{ emp.salary }</td>
                                        <td><Button href= { "/edit/"+emp.id } variant="primary">Edit</Button></td>
                                        <td><Button href= { "/delete/"+emp.id } variant="danger">Delete</Button></td>
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