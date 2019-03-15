import React, { Component } from 'react';
import WeatherApiService from '../../service';
import { Spin } from 'antd';

const withChartData = (Chart) => {
  return class extends Component {
    state = {
      data: null
    }

    forecastService = new WeatherApiService();

    componentDidMount() {
      this.getForecastData();
    }

    componentDidUpdate(prevProps) {
      if (this.props.pressure !== prevProps.pressure || this.props.temperature !== prevProps.temperature) {
        this.getChanceOfRain();
      }
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

    getChanceOfRain(pressure, temperature, amount) {
      const score = Math.log(amount + 1) * Math.log(pressure - 929) * Math.log(temperature - -9);
      const mean = Math.min(Math.max(score, 0), 100)
      const upperBound = Math.min(1.5 * mean, 100);
      const lowerBound = Math.max(0.5 * mean, 0);
      return [lowerBound, mean, upperBound];
    }

    render() {
      const { data } = this.state;
      const { temperature, pressure } = this.props;
      if (!data) return <Spin tip="Loading..." />

      const transformData = (data) => {
        let lower = [];
        let mean = [];
        let upper = [];

        data.map((el, idx) => {
          let i = ++idx;
          return this.getChanceOfRain(+pressure, +temperature, el.amount).map(element => {
            return { x: i, y: element }
          });
        }).forEach(el => {
          el.forEach((item, idx) => {
            if (idx === 0) lower.push(item);
            if (idx === 1) mean.push(item);
            if (idx === 2) upper.push(item);
          });
        });
        return [lower, mean, upper];
      }

      const chartData = transformData(data);

      return (
        <Chart {...this.props} data={chartData} />
      )
    }
  }
}

export default withChartData;