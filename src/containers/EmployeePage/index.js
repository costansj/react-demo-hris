import React, { Component } from "react";
import { connect } from "react-redux";
import {
  readEmployees,
  updateEmployee,
  createEmployee,
  deleteEmployee
} from "../../actions";
import "./styles.css";
import { EmployeeTable } from "../../components";
import EmployeeForm from "./EmployeeForm";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class EmployeePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      onView: false,
      selectedKey: "",
      onEdit: false,
      onCreate: false,
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      titile: "",
      unitNumber: "",
      street: "",
      city: "",
      province: "",
      region: "",
      zipCode: "",
      landlineNumber: "",
      mobileNumber: "",
      email: "",
      title: "",
      employeeNumber: "",
      location: "",
      department: "",
      salary: "",
      SSS: "",
      Philhealth: "",
      PAGIBIG: "",
      BIR: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitData = this.submitData.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      onView: !this.state.onView
    });
  }

  handleSubmit(event) {
    const payload = {
      _id: this.state.selectedKey,
      personalDetails: {
        firstName: this.state.firstName,
        middleName: this.state.middleName,
        lastName: this.state.lastName,
        gender: this.state.gender,
        titile: this.state.titile,
        address: {
          unitNumber: this.state.unitNumber,
          street: this.state.street,
          city: this.state.city,
          province: this.state.province,
          region: this.state.region,
          zipCode: this.state.zipCode
        },
        contact: {
          landlineNumber: this.state.landlineNumber,
          mobileNumber: this.state.mobileNumber,
          email: this.state.email
        }
      },
      jobDetails: {
        title: this.state.title,
        employeeNumber: this.state.employeeNumber,
        location: this.state.location,
        department: this.state.department,
        salary: this.state.salary
      },
      benefitsDetails: {
        SSS: this.state.SSS,
        Philhealth: this.state.Philhealth,
        PAGIBIG: this.state.PAGIBIG,
        BIR: this.state.BIR
      }
    };
    event.preventDefault();
    console.log("FORM", payload);
    this.props.updateEmployee(payload).then(() => {
      this.props.readEmployees();
      this.setState({
        onView: !this.state.onView,
        onEdit: !this.state.onEdit
      });
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleEditForm() {
    this.setState({
      onEdit: !this.state.onEdit,
      onView: !this.state.onView
    });
  }

  componentDidMount() {
    this.props.readEmployees();
    console.log("ERROR", this.props.error);
    console.log("INFO", this.props.employeeInfo);
  }

  renderData() {
    const employeeItem = this.props.employees.map(
      ({ _id, personalDetails, jobDetails, benefitsDetails }) => {
        return (
          <div key={_id} className="employee-card">
            <div>
              {`${personalDetails.firstName} ${personalDetails.lastName}`}
            </div>
            <div> {jobDetails.employeeNumber} </div>
            <div> {jobDetails.title} </div>
            {/* View */}
            <button
              onClick={() => {
                this.setState({
                  selectedKey: _id,
                  onView: !this.state.onView,
                  firstName: personalDetails.firstName,
                  lastName: personalDetails.lastName,
                  middleName: personalDetails.middleName,
                  gender: personalDetails.gender,
                  titile: personalDetails.title,
                  unitNumber: personalDetails.address.unitNumber,
                  street: personalDetails.address.street,
                  city: personalDetails.address.city,
                  province: personalDetails.address.province,
                  region: personalDetails.address.region,
                  zipCode: personalDetails.address.zipCode,
                  landlineNumber: personalDetails.contact.landlineNumber,
                  mobileNumber: personalDetails.contact.mobileNumber,
                  email: personalDetails.contact.email,
                  title: jobDetails.title,
                  employeeNumber: jobDetails.employeeNumber,
                  location: jobDetails.location,
                  department: jobDetails.department,
                  salary: jobDetails.salary,
                  SSS: benefitsDetails.SSS,
                  Philhealth: benefitsDetails.Philhealth,
                  PAGIBIG: benefitsDetails.PAGIBIG,
                  BIR: benefitsDetails.BIR,
                  modalIsOpen: !this.state.modalIsOpen
                });
              }}
            >
              View
            </button>
            {/* Delete */}
            <button
              onClick={() => {
                console.log("Delete");
                this.setState(
                  {
                    selectedKey: _id
                  },
                  () => {
                    console.log(this.state.selectedKey);
                  }
                );
                this.props.deleteEmployee(this.state.selectedKey).then(() => {
                  this.readEmployees();
                });
              }}
            >
              Delete
            </button>
            {this.state.onView && this.state.selectedKey === _id ? (
              <div>
                <Dialog
                  open={this.state.onView}
                  style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                >
                  <DialogTitle
                    disableTypography
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <Typography variant="h6">Employee Details</Typography>
                    <IconButton onClick={this.toggleModal}>
                      <CloseIcon />
                    </IconButton>
                  </DialogTitle>
                  <DialogContent dividers>
                    <EmployeeTable
                      // onEdit={this.state.onEdit}
                      // onView={this.state.onView}
                      personalDetails={personalDetails}
                      jobDetails={jobDetails}
                      benefitsDetails={benefitsDetails}
                      // onSaveForm={this.handleSaveForm.bind(this)}
                      onEditForm={this.handleEditForm.bind(this)}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            ) : null}
            {this.state.onEdit && this.state.selectedKey === _id
              ? this.renderForm(personalDetails, jobDetails, benefitsDetails)
              : null}
          </div>
        );
      }
    );
    return employeeItem;
  }

  submitData(event) {
    const payload = {
      personalDetails: {
        firstName: this.state.firstName,
        middleName: this.state.middleName,
        lastName: this.state.lastName,
        gender: this.state.gender,
        title: this.state.titile,
        address: {
          unitNumber: this.state.unitNumber,
          street: this.state.street,
          city: this.state.city,
          province: this.state.province,
          region: this.state.region,
          zipCode: this.state.zipCode
        },
        contact: {
          landlineNumber: this.state.landlineNumber,
          mobileNumber: this.state.mobileNumber,
          email: this.state.email
        }
      },
      jobDetails: {
        title: this.state.title,
        employeeNumber: this.state.employeeNumber,
        location: this.state.location,
        department: this.state.department,
        salary: this.state.salary
      },
      benefitsDetails: {
        SSS: this.state.SSS,
        Philhealth: this.state.Philhealth,
        PAGIBIG: this.state.PAGIBIG,
        BIR: this.state.BIR
      }
    };
    event.preventDefault();
    this.setState({ onCreate: !this.state.onCreate });
    console.log(payload);
    this.props.createEmployee(payload).then(() => {
      this.props.readEmployees();
      this.setState({
        onCreate: !this.state.onCreate
      });
    });
  }

  renderCreateForm() {
    return (
      <form onSubmit={this.submitData}>
        <EmployeeForm
          firstName={this.state.firstName}
          middleName={this.state.middleName}
          lastName={this.state.lastName}
          gender={this.state.gender}
          titile={this.state.titile}
          unitNumber={this.state.unitNumber}
          street={this.state.street}
          city={this.state.city}
          province={this.state.province}
          region={this.state.region}
          zipCode={this.state.zipCode}
          landlineNumber={this.state.landlineNumber}
          mobileNumber={this.state.mobileNumber}
          email={this.state.email}
          title={this.state.title}
          employeeNumber={this.state.employeeNumber}
          location={this.state.location}
          department={this.state.department}
          salary={this.state.salary}
          SSS={this.state.SSS}
          Philhealth={this.state.Philhealth}
          PAGIBIG={this.state.PAGIBIG}
          BIR={this.state.BIR}
          handleChange={e => this.onChange(e)}
        />
      </form>
    );
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <EmployeeForm
          firstName={this.state.firstName}
          middleName={this.state.middleName}
          lastName={this.state.lastName}
          gender={this.state.gender}
          titile={this.state.titile}
          unitNumber={this.state.unitNumber}
          street={this.state.street}
          city={this.state.city}
          province={this.state.province}
          region={this.state.region}
          zipCode={this.state.zipCode}
          landlineNumber={this.state.landlineNumber}
          mobileNumber={this.state.mobileNumber}
          email={this.state.email}
          title={this.state.title}
          employeeNumber={this.state.employeeNumber}
          location={this.state.location}
          department={this.state.department}
          salary={this.state.salary}
          SSS={this.state.SSS}
          Philhealth={this.state.Philhealth}
          PAGIBIG={this.state.PAGIBIG}
          BIR={this.state.BIR}
          handleChange={e => this.onChange(e)}
          //handleChange={e => this.onChange(e)}
        />
      </form>
    );
  }

  render() {
    return (
      <div>
        <div className="employee-art">
          <img src={require("../../assets/employee.png")} />
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ onCreate: !this.state.onCreate });
            }}
          >
            Create
          </button>
        </div>
        <div className="employee-list">{this.renderData()}</div>
        <div>{this.state.onCreate ? this.renderCreateForm() : null}</div>
      </div>
    );
  }
}

const mapStatetoProps = ({ employee }) => {
  const { employees, error, employeeInfo } = employee;

  return {
    employees,
    error,
    employeeInfo
  };
};

export default connect(
  mapStatetoProps,
  { readEmployees, updateEmployee, createEmployee, deleteEmployee }
)(EmployeePage);
