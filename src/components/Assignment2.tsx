import React, { Component } from 'react';
import InputText from './InputText';
import DatePicker from './DatePicker';
import Select from './Select';
import InputFile from './InputFile';
import Radio from './Radio';
import SliderComponent from './Slider';

type Props = {};

type State = {
  value: string;
  date: Date;
  selectedOption: string;
  file: any;
  gender: string;
  sliderValue: number;
};

const options = ['One', 'Two', 'Three', 'Four'];

export default class Assignment2 extends Component<Props, State> {
  state = {
    date: new Date(),
    value: '',
    selectedOption: '',
    file: null,
    gender: '',
    sliderValue: 50,
  };

  onTextChange = (e: string) => {
    this.setState({ value: e });
  };

  onDateChange = (date: Date) => {
    this.setState({ date: date });
  };

  onOptionChange = (e: string) => {
    this.setState({ selectedOption: e });
  };

  setSelectedFile = (e: any) => {
    console.log('e :>> ', e.target.files[0]);
  };

  onGenderRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      gender: e.target.value,
    });
  };

  onSliderChange = (e: number) => {
    this.setState({
      sliderValue: e,
    });
  };

  render() {
    console.log('this.state :>> ', this.state);
    return (
      <div>
        <div className="row">
          <h1>Assignment2</h1>
          <InputText
            handleChange={this.onTextChange}
            value={this.state.value}
            label="Input Text"
          ></InputText>
        </div>
        <div className="row">
          <DatePicker
            date={this.state.date}
            onDateChange={this.onDateChange}
          ></DatePicker>
        </div>
        <div className="row">
          <Select options={options} onChange={this.onOptionChange}></Select>
        </div>
        <div>
          <InputFile
            selectedFile={null}
            setSelectedFile={this.setSelectedFile}
          ></InputFile>
        </div>
        <div>
          <Radio onChange={this.onGenderRadioChange} id="gender"></Radio>
        </div>
        <div>
          <SliderComponent
            value={this.state.sliderValue}
            onSliderChange={this.onSliderChange}
          ></SliderComponent>
        </div>
      </div>
    );
  }
}
