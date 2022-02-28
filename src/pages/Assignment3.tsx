import React, { Component } from 'react';
import InputText from '../components/InputText';
import Radio from '../components/Radio';
import Select from '../components/Select';
import Button from '../components/Button';
import Table from '../components/Table';
import { FileUploadComponent } from '../components/FileUploadComponent';
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from '../helpers/validationHelpers';

import { userType } from '../types/UserType';

type Props = {};

type State = {
  name: string;
  email: string;
  dob: string;
  gender: string;
  profilePic: any;
  loe: string;
  password: string;
  confirmPassword: string;
  errors: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  users: userType[];
};

const genders = ['Male', 'Female', 'Other'];

const loeOptions = ['P.G.', 'G', 'H.S.S.', 'H.S.'];

const tableHeaders: string[] = [
  'Name',
  'Email',
  'DoB',
  'Gender',
  'Level of education',
];
export default class Assignment3 extends Component<Props, State> {
  initialState = {
    name: '',
    email: '',
    dob: new Date().toISOString().split('T')[0],
    gender: genders[0],
    profilePic: '',
    loe: loeOptions[3],
    password: '',
    confirmPassword: '',
    errors: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  };
  state = { ...this.initialState, users: [] };

  onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { id, value } = event.target;
    let errors = this.state.errors;
    switch (id) {
      case 'name':
        errors.name = nameValidation(value);
        break;
      case 'email':
        errors.email = emailValidation(value);
        break;
      case 'password':
        errors.password = passwordValidation(value);
        break;
      case 'confirmPassword':
        errors.password =
          this.state.password !== value ? 'Passwords do not match' : '';
        break;
      default:
        break;
    }
    this.setState(Object.assign(this.state, { errors, [id]: value }));
    console.log(this.state.errors);
  };

  onSubmit = () => {
    let validity = true;
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (validity = false),
    );
    if (validity === true) {
      console.log('Registering can be done');
      const { name, email, dob, gender, profilePic, loe, password } =
        this.state;
      const user: userType = {
        name,
        email,
        dob,
        gender,
        profilePic,
        loe,
        password,
      };
      this.setState({
        ...this.state,
        ...this.initialState,
        users: [...this.state.users, user],
      });
    } else {
      console.log('You cannot be registered!!!');
    }
  };
  setSelectedFile = (file: File) => {
    this.setState({ profilePic: file });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="row">
        <h1 className="row">Assignment 3</h1>
        <div className="row">
          <form className="col" onSubmit={this.onSubmit} noValidate>
            <InputText
              handleChange={this.onChange}
              value={this.state.name}
              label="Name"
              id="name"
              validationFunction={nameValidation}
              required={true}
            ></InputText>
            {errors.name.length > 0 && (
              <span style={{ color: 'red' }}>{errors.name}</span>
            )}
            <InputText
              required={true}
              handleChange={this.onChange}
              value={this.state.email}
              label="Email"
              type="email"
              id="email"
              validationFunction={emailValidation}
            ></InputText>
            {errors.email.length > 0 && (
              <span style={{ color: 'red' }}>{errors.email}</span>
            )}
            <InputText
              required={true}
              handleChange={this.onChange}
              value={this.state.dob}
              label="Date"
              id="dob"
              type="date"
            ></InputText>
            <Radio
              options={genders}
              onChange={this.onChange}
              id="gender"
            ></Radio>
            <FileUploadComponent onFileChange={this.setSelectedFile} />
            <Select
              selected={this.state.loe}
              options={loeOptions}
              id="loe"
              onChange={this.onChange}
            ></Select>
            <InputText
              handleChange={this.onChange}
              value={this.state.password}
              type="password"
              label="Password"
              id="password"
              required={true}
            ></InputText>
            {errors.password.length > 0 && (
              <span style={{ color: 'red' }}>{errors.password}</span>
            )}
            <InputText
              handleChange={this.onChange}
              value={this.state.confirmPassword}
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              required={true}
              match={this.state.password}
            ></InputText>
            {errors.confirmPassword.length > 0 && (
              <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
            )}
            <div className="submit">
              <Button labelName="Submit" onClick={this.onSubmit}></Button>
            </div>
          </form>
        </div>
        <div className="row">
          <Table
            headers={tableHeaders}
            data={this.state.users}
            deleteAction={() => console.log('delete')}
            editAction={() => console.log('edit')}
          ></Table>
        </div>
      </div>
    );
  }
}
