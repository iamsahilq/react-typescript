import React, { Component } from 'react';
import InputText from '../components/InputText';
import DatePicker from '../components/DatePicker';
import Select from '../components/Select';
import InputFile from '../components/InputFile';
import Radio from '../components/Radio';
import SliderComponent from '../components/Slider';

type Props = {};

type State = {
  value: string;
  date: Date;
  selectedOption: string;
  file: any;
  radio: string;
  sliderValue: number;
};

const options = ['One', 'Two', 'Three', 'Four'];
const genders = ['Male', 'Female', 'Other'];

export default class Assignment2 extends Component<Props, State> {
  state = {
    date: new Date(),
    value: '',
    selectedOption: options[0],
    file: null,
    radio: '',
    sliderValue: 50,
  };

  onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  onDateChange = (date: Date) => {
    this.setState({ date: date });
  };

  onOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedOption: e.target.value });
  };

  setSelectedFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files) {
      this.setState({ file: e.target.files[0] });
    }
  };

  onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      radio: e.target.value,
    });
  };

  onSliderChange = (e: number) => {
    this.setState({
      sliderValue: e,
    });
  };

  render() {
    return (
      <div className="row">
        <h1 className="row">Assignment2</h1>
        <div className="row">
          <div className="col">
            <InputText
              handleChange={this.onTextChange}
              value={this.state.value}
              label="Input Text"
            ></InputText>
          </div>
          <div className="col">
            <DatePicker
              date={this.state.date}
              onDateChange={this.onDateChange}
            ></DatePicker>
          </div>
        </div>
        <div>
          <Select
            selected={this.state.selectedOption}
            options={options}
            onChange={this.onOptionChange}
          ></Select>
        </div>
        <div>
          <InputFile
            selectedFile=""
            setSelectedFile={this.setSelectedFile}
          ></InputFile>
        </div>
        <div>
          <Radio
            options={genders}
            onChange={this.onRadioChange}
            id="radio"
          ></Radio>
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
