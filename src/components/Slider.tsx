import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export interface ISliderComponentProps {
  //   checked: string;
  onSliderChange: Function;
  value: number;
}

export default function SliderComponent(props: ISliderComponentProps) {
  return (
    <div>
      <Slider value={props.value} onChange={(e) => props.onSliderChange(e)} />
    </div>
  );
}
