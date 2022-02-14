import React, { Component } from 'react';
import Text from './Text';
import Button from './Button';
import InputText from './InputText';

type Props = {};

type State = { message: string; value: string };

export default class Assignment1 extends Component<Props, State> {
  state = { message: 'Hello World', value: '' };
  onButtonClick = () => {
    this.setState({ message: this.state.value });
  };

  onTextChange = (e: string) => {
    this.setState({ value: e });
  };

  render() {
    return (
      <div className="row">
        <h1>Assignment1</h1>
        <InputText
          handleChange={this.onTextChange}
          value={this.state.value}
          label="Input Text"
        ></InputText>
        <Button
          labelName="Change Text"
          changeText={this.onButtonClick}
        ></Button>
        <Text message={this.state.message}></Text>
      </div>
    );
  }
}
