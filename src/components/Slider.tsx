import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export interface ISliderComponentProps {
  onSliderChange: Function;
  value: number;
}

export default function SliderComponent(props: ISliderComponentProps) {
  const { onSliderChange, value } = props;
  return (
    <div className="row m-1 p-1">
      <h3 className="row">Slider</h3>
      <div className="row">
        <div className="col p-2">
          <Slider value={value} onChange={(e) => onSliderChange(e)} />
        </div>
        <div className="col">{value}</div>
      </div>
    </div>
  );
}
