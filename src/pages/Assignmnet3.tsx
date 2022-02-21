import React, { Component } from 'react';
import InputFile from '../components/InputFile';
import InputText from '../components/InputText';
import Radio from '../components/Radio';
import Select from '../components/Select';
import Button from '../components/Button';
import Table from '../components/Table';
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from '../helpers/validationHelpers';

import UserType from '../types/UserType';

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
  valErrors: string[];
  users: UserType[];
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
    valErrors: [],
  };
  state = { ...this.initialState, users: [] };
  onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { id, value } = event.target;
    this.setState({
      ...this.state,
      [id]: value,
      valErrors: [],
    });
  };
  onSubmit = () => {
    const {
      name,
      email,
      dob,
      gender,
      profilePic,
      loe,
      password,
      confirmPassword,
    } = this.state;
    const errors: string[] = [];
    let err = nameValidation(name);
    if (err.length) errors.push(err);
    err = emailValidation(email);
    if (err.length) errors.push(err);
    err = passwordValidation(password);
    if (err.length) errors.push(err);
    if (password !== confirmPassword) {
      errors.push('Password does not match');
    }
    if (errors.length) {
      this.setState({
        ...this.state,
        valErrors: errors,
      });
      return;
    }
    const user: UserType = {
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
  };
  setSelectedFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      this.setState({ profilePic: e.target.files[0] });
    }
  };

  render() {
    return (
      <div className="row">
        <h1 className="row">Assignment 3</h1>
        <div className="row">
          <div className="col">
            <InputText
              handleChange={this.onChange}
              value={this.state.name}
              label="Name"
              id="name"
              validationFunction={nameValidation}
              required={true}
            ></InputText>
            <InputText
              required={true}
              handleChange={this.onChange}
              value={this.state.email}
              label="Email"
              type="email"
              id="email"
              validationFunction={emailValidation}
            ></InputText>
            <InputText
              required={true}
              handleChange={this.onChange}
              value={this.state.dob}
              label="Date"
              id="dob"
              type="date"
              // validationFunction={emailValidation}
            ></InputText>
            <Radio
              options={genders}
              onChange={this.onChange}
              id="gender"
            ></Radio>
            <InputFile
              selectedFile={this.state.profilePic}
              setSelectedFile={this.setSelectedFile}
            ></InputFile>
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
              validationFunction={passwordValidation}
              required={true}
            ></InputText>
            <InputText
              handleChange={this.onChange}
              value={this.state.confirmPassword}
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              validationFunction={nameValidation}
              required={true}
              match={this.state.password}
            ></InputText>
            {this.state.valErrors.map((err, index) => (
              <p className="text-danger" key={index}>
                {err}
              </p>
            ))}
            <Button labelName="Submit" onClick={this.onSubmit}></Button>
          </div>
        </div>
        <div className="row">
          <Table headers={tableHeaders} data={this.state.users}></Table>
        </div>
      </div>
    );
  }
}
