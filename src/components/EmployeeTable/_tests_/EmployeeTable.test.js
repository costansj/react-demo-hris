import React from "react";
import Enzyme, { render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import { EmployeeTable } from "../../EmployeeTable";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
Enzyme.configure({ adapter: new Adapter() });

describe("EmployeeTable Component test", () => {
  it("renders EmployeeTable Component", () => {
    const details = {
      personalDetails: {
        firstName: "Arnold",
        lastName: "Fernandez",
        middleName: "Filamina",
        gender: "Female",
        title: "Ms",
        address: {
          unitNumber: "3-F",
          street: "Alley 28",
          city: "Quezon City",
          province: "Manila",
          region: "NCR",
          zipCode: 1100
        },
        contact: {
          landlineNumber: "455-42-52",
          mobileNumber: "09173942673",
          email: "dianca_cueto@gmail.com"
        }
      },
      jobDetails: {
        title: "Software Engineer",
        employeeNumber: "EMP-1002",
        location: "Buendia Branch",
        department: "Engineering Department",
        email: "diana_cueto@pearlpay.com",
        salary: "35000"
      },
      benefitsDetails: {
        SSS: "0407514490",
        Philhealth: "02050905813",
        PAGIBIG: "123456789101",
        BIR: "265683857000"
      }
    };
    const wrapper = render(
      <EmployeeTable
        personalDetails={details.personalDetails}
        jobDetails={details.jobDetails}
        benefitsDetails={details.benefitsDetails}
      />
    );

    console.log(wrapper.find("button").children);
    expect(wrapper).toMatchSnapshot();
  });
  it("should simulate click event on material-ui Delete IconButton", () => {
    const onEditFunction = jest.fn();
    const details = {
      personalDetails: {
        firstName: "Arnold",
        lastName: "Fernandez",
        middleName: "Filamina",
        gender: "Female",
        title: "Ms",
        address: {
          unitNumber: "3-F",
          street: "Alley 28",
          city: "Quezon City",
          province: "Manila",
          region: "NCR",
          zipCode: 1100
        },
        contact: {
          landlineNumber: "455-42-52",
          mobileNumber: "09173942673",
          email: "dianca_cueto@gmail.com"
        }
      },
      jobDetails: {
        title: "Software Engineer",
        employeeNumber: "EMP-1002",
        location: "Buendia Branch",
        department: "Engineering Department",
        email: "diana_cueto@pearlpay.com",
        salary: 35000
      },
      benefitsDetails: {
        SSS: "0407514490",
        Philhealth: "02050905813",
        PAGIBIG: "123456789101",
        BIR: "265683857000"
      }
    };

    const wrapper = shallow(
      <EmployeeTable
        personalDetails={details.personalDetails}
        jobDetails={details.jobDetails}
        benefitsDetails={details.benefitsDetails}
        onEditForm={onEditFunction}
      />
    );
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(onEditFunction.mock.calls.length).toEqual(2);
  });
});
