import React, { Component } from 'react';
import WeatherApiService from '../../service';
import { PressureSlider, TemperatureSlider } from '../sliders';

import { Row, Col, Spin } from 'antd';

import './app.scss';

class App extends Component {

  forecastService = new WeatherApiService();

  state = {
    data: null,
    pressure: null,
    temperature: null
  }

  componentDidMount() {
    this.getForecastData();
  }

  getForecastData = () => {
    this.forecastService.getForecast()
      .then((data) => {
        this.setState({ data })
      })
      .catch(err => {
        console.error(err);
      })
  }

  getPressure = (pressure) => {
    this.setState({ pressure });
  }

  getTemperature = (temperature) => {
    this.setState({ temperature });
  }

  render() {

    const { data, pressure, temperature } = this.state;

    if (!data) return <Spin tip="Loading..." />

    return (
      <div className="app">
        <div className="container">
          <Row type="flex" justify="space-around">
            <Col span={10}>
              <PressureSlider getData={this.getPressure} />
            </Col>
            <Col span={10}>
              <TemperatureSlider getData={this.getTemperature} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
