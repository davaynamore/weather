import React from 'react';
import { Card, Slider } from 'antd';
import './slider.scss';


const SliderElement = ({ data, getData }) => {

  const { min, max, title, measure } = data;
  const average = (min + max) / 2;
  const cardTitle = <h2>{`${title} [${measure}]`}</h2>;

  return (
    <Card className="slider_card" >
      {cardTitle}
      <Slider
        onChange={getData}
        defaultValue={average}
        min={min}
        max={max}
        tooltipVisible />
    </Card>
  )
}

export default SliderElement