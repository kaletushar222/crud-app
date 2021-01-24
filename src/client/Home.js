import React, { Component } from 'react';
import { Table, Container, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import CustomModal from './components/CustomModal'

class ComponentHome extends Component {
    // Home page component
    constructor(props) {
        super(props)
        const employeeData = JSON.parse(localStorage.getItem("employees"))
        this.state={
            employeeData : employeeData,
            employees : employeeData,
            showDeleteModalFlag : false,
            currentEmployeeId : ''
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

    handleDeleteClick = (event) =>{
        this.setState({
            showDeleteModalFlag : true,
            currentEmployeeId : event.target.id
        })
    }

    deleteEmployee = () =>{
        let { employeeData, currentEmployeeId } = this.state
        if(currentEmployeeId){
            employeeData = employeeData.filter(emp=> emp.id != currentEmployeeId)
            console.log("employeeData : ",employeeData)
            localStorage.setItem("employees", JSON.stringify(employeeData))
        }
        this.setState({
            employeeData: employeeData,
            employees : employeeData,
            showDeleteModalFlag : false
        })
    }

    cancelDeleteEmployee = () =>{
        console.log("cancel delete")
        this.setState({
            showDeleteModalFlag : false
        })
    }

    render() {
        const { employees, showDeleteModalFlag } = this.state
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
                                        <td><Button onClick={ this.handleDeleteClick } id={ emp.id } variant="danger">Delete</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <CustomModal title="Delete" body="Confirm to delete employee" showModalFlag={ showDeleteModalFlag }  handleConfirm={ this.deleteEmployee } handleCancel={ this.cancelDeleteEmployee }/>
            </Container>
        )
    }
}
export default ComponentHome;