import React, { Component } from 'react';
import { PressureSlider, TemperatureSlider } from '../sliders';
import Chart from '../chart';
import { Row, Col } from 'antd';

export default class ForecastPage extends Component {

  state = {
    pressure: null,
    temperature: null
  }

  getPressure = (pressure) => {
    this.setState({ pressure });
  }

  getTemperature = (temperature) => {
    this.setState({ temperature });
  }

  render() {
    const { pressure, temperature } = this.state;
    return (
      <div className="container">
        <Row type="flex" justify="space-between" className="sliders-row">
          <Col span={10}>
            <PressureSlider getValue={this.getPressure} />
          </Col>
          <Col span={10}>
            <TemperatureSlider getValue={this.getTemperature} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="forecast-row">
          <Col>
            <Chart pressure={pressure} temperature={temperature} />
          </Col>
        </Row>
      </div>
    )
  }
}