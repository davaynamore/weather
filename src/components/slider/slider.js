import React, { Component } from 'react';
import { Card, Slider } from 'antd';
import './slider.scss';


export default class SliderElement extends Component {

  state = {
    average: (this.props.data.min + this.props.data.max) / 2
  }

  componentDidMount() {
    this.props.getValue(this.state.average);
  }

  render() {
    const { min, max, title, measure } = this.props.data;
    const cardTitle = <h2>{`${title} [${measure}]`}</h2>;

    return (
      <Card className="slider_card" >
        {cardTitle}
        <Slider
          onChange={this.props.getValue}
          defaultValue={this.state.average}
          min={min}
          max={max}
          tooltipVisible />
      </Card>
    )
  }
}