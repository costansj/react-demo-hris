import React, { Component } from "react";

class EmployeeForm extends Component {
  render() {
    return (
      <div>
        <div>
          <h3> PERSONAL DETAILS</h3>
          <ul>
            <li>
              First Name
              <input
                type="text"
                name="firstName"
                value={this.props.firstName}
                onChange={this.props.handleChange}
                placeholder={"First Name"}
              />
            </li>
            <li>
              Middle Name
              <input
                type="text"
                name="middleName"
                value={this.props.middleName}
                onChange={this.props.handleChange}
                placeholder={"Middle Name"}
              />
            </li>
            <li>
              Last Name
              <input
                type="text"
                name="lastName"
                value={this.props.lastName}
                onChange={this.props.handleChange}
                placeholder={"Last Name"}
              />
            </li>
            <li>
              Gender
              <input
                type="text"
                name="gender"
                value={this.props.gender}
                onChange={this.props.handleChange}
                placeholder={"Gender"}
              />
            </li>
            <li>
              Title
              <input
                type="text"
                name="titile"
                value={this.props.titile}
                onChange={this.props.handleChange}
                placeholder={"Title"}
              />
            </li>
            <li>
              Address
              <input
                type="text"
                name="unitNumber"
                value={this.props.unitNumber}
                onChange={this.props.handleChange}
                placeholder={"Unit Number"}
              />
              <br />
              <input
                type="text"
                name="street"
                value={this.props.street}
                onChange={this.props.handleChange}
                placeholder={"Street"}
              />
              <br />
              <input
                type="text"
                name="city"
                value={this.props.city}
                onChange={this.props.handleChange}
                placeholder={"City"}
              />
              <br />
              <input
                type="text"
                name="province"
                value={this.props.province}
                onChange={this.props.handleChange}
                placeholder={"Province"}
              />
              <br />
              <input
                type="text"
                name="region"
                value={this.props.region}
                onChange={this.props.handleChange}
                placeholder={"Region"}
              />
              <br />
              <input
                type="text"
                name="zipCode"
                value={this.props.zipCode}
                onChange={this.props.handleChange}
                placeholder={"Zip"}
              />
            </li>
          </ul>
        </div>
        <div>
          <h3> CONTACT DETAILS</h3>
          <ul>
            <li>
              Landline
              <input
                type="text"
                name="landlineNumber"
                value={this.props.landlineNumber}
                onChange={this.props.handleChange}
                placeholder={"Landline"}
              />
            </li>
            <li>
              Mobile Number
              <input
                type="text"
                name="mobileNumber"
                value={this.props.mobileNumber}
                onChange={this.props.handleChange}
                placeholder={"Mobile Number"}
              />
            </li>
            <li>
              Email
              <input
                type="text"
                name="email"
                value={this.props.email}
                onChange={this.props.handleChange}
                placeholder={"Email"}
              />
            </li>
          </ul>
        </div>
        <div>
          <h3> JOB DETAILS</h3>
          <ul>
            <li>
              Title
              <input
                type="text"
                name="title"
                value={this.props.title}
                onChange={this.props.handleChange}
                placeholder={"Title"}
              />
            </li>
            <li>
              Employee Number
              <input
                type="text"
                name="employeeNumber"
                value={this.props.employeeNumber}
                onChange={this.props.handleChange}
                placeholder={"Employee Number"}
              />
            </li>
            <li>
              Location
              <input
                type="text"
                name="location"
                value={this.props.location}
                onChange={this.props.handleChange}
                placeholder={"Location"}
              />
            </li>
            <li>
              Department
              <input
                type="text"
                name="department"
                value={this.props.department}
                onChange={this.props.handleChange}
                placeholder={"Department"}
              />
            </li>
            <li>
              Salary
              <input
                type="text"
                name="salary"
                value={this.props.salary}
                onChange={this.props.handleChange}
                placeholder={"Salary"}
              />
            </li>
          </ul>
        </div>
        <div>
          <h3> EMPLOYEE BENEFITS </h3>
          <ul>
            <li>
              SSS
              <input
                type="text"
                name="SSS"
                value={this.props.SSS}
                onChange={this.props.handleChange}
                placeholder={"SSS"}
              />
            </li>
            <li>
              PhilHealth
              <input
                type="text"
                name="Philhealth"
                value={this.props.Philhealth}
                onChange={this.props.handleChange}
                placeholder={"Philhealth"}
              />
            </li>
            <li>
              PAGIBIG
              <input
                type="text"
                name="PAGIBIG"
                value={this.props.PAGIBIG}
                onChange={this.props.handleChange}
                placeholder={"PAGIBIG"}
              />
            </li>
            <li>
              BIR
              <input
                type="text"
                name="BIR"
                value={this.props.BIR}
                onChange={this.props.handleChange}
                placeholder={"BIR"}
              />
            </li>
          </ul>
        </div>
        <input type="submit" value="Save" />
      </div>
    );
  }
}

export default EmployeeForm;
