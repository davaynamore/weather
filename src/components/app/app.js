import React, { Component } from 'react';
import { PressureSlider, TemperatureSlider } from '../sliders';
import Chart from '../chart';

import { Row, Col } from 'antd';

import './app.scss';

class App extends Component {

  state = {
    pressure: 1000,
    temperature: 23
  }

  getPressure = (pressure) => {
    this.setState({ pressure });
  }

  getTemperature = (temperature) => {
    this.setState({ temperature });
  }

  render() {

    const {temperature, pressure} = this.state;

    return (
      <div className="app">
        <div className="container">
          <Row type="flex" justify="space-between">
            <Col span={10}>
              <PressureSlider getValue={this.getPressure} />
            </Col>
            <Col span={10}>
              <TemperatureSlider getValue={this.getTemperature} />
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col>
              <Chart pressure={pressure} temperature={temperature} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
