import React, { Component } from 'react';
import Text from '../components/Text';
import Button from '../components/Button';
import InputText from '../components/InputText';

type Props = {};

type State = { message: string; value: string };

export default class Assignment1 extends Component<Props, State> {
  state = { message: 'Hello World', value: '' };
  onButtonClick = () => {
    this.setState({ message: this.state.value });
  };

  onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="row">
        <h1 className="row">Assignment1</h1>
        <div className="row">
          <div className="col">
            <InputText
              handleChange={this.onTextChange}
              value={this.state.value}
              label="Input Text"
            ></InputText>
            <Button
              labelName="Change Text"
              onClick={this.onButtonClick}
            ></Button>
          </div>
        </div>
        <div className="row">
          <Text message={this.state.message}></Text>
        </div>
      </div>
    );
  }
}
