import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEmployees } from '../../actions';
import './styles.css';
import { EmployeeTable } from '../../components';


class EmployeePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            onView: false,
            onView2: false,
            onView3: false,
            onView4: false,
            selectedKey: '',
            onEdit: false
        }
    }

    handleSaveForm() {
        this.setState({
            onEdit: !this.state.onEdit,
            onView: !this.state.onView
        });
    }

    handleEditForm() {
        this.setState({
            onEdit: !this.state.onEdit
        });
    }

    componentDidMount() {
        this.props.readEmployees();
        console.log("ERROR", this.props.error);
        console.log("INFO", this.props.employeeInfo);
        // this.setState({
        //     employees: this.props.employees
        // })
    }

    renderData() {
        const employeeItem = this.props.employees.map(({ _id, personalDetails, jobDetails, benefitsDetails }) => {

            return (
                <div key={_id} className="employee-card">
                    <div> {`${personalDetails.firstName} ${personalDetails.lastName}`} </div>
                    <div> {jobDetails.employeeNumber} </div>
                    <div> {jobDetails.title} </div>
                    {/* View */}
                    <button onClick={() => {
                        this.setState({ selectedKey: _id, onView: !this.state.onView });
                    }}> View </button>
                    {/* Delete */}
                    <button onClick={() => { console.log("Delete") }}> Delete </button>
                    {
                        this.state.onView ? <EmployeeTable
                            onEdit={this.state.onEdit}
                            onView={this.state.onView}
                            personalDetails={personalDetails}
                            jobDetails={jobDetails}
                            benefitsDetails={benefitsDetails}
                            onEditForm={this.handleEditForm.bind(this)}
                            onSaveForm={this.handleSaveForm.bind(this)}
                        /> : null
                    }
                </div>
            );
        });
        return employeeItem;
    }

    renderView() {
        return <EmployeeTable onView={this.state.onView} />
    }

    renderForm() {
        return (
            <form>
                <label>
                    <input type="text" name="name" placeholder="First name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }


    render() {
        return (
            <div>
                <div className="employee-art">
                    <img src={require('../../assets/employee.png')} />
                </div>
                <div className="employee-list">
                    {this.renderData()}
                </div>
            </div>

        );
    }
}



const mapStatetoProps = ({ employee }) => {
    const { employees, error, employeeInfo } = employee;

    return {
        employees, error, employeeInfo
    }
}


export default connect(mapStatetoProps, { readEmployees })(EmployeePage);
