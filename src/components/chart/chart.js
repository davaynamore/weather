import React from 'react';
import { AreaChart } from 'react-easy-chart';
import { Card } from 'antd';
import { withChartData } from '../hoc-helpers';

import './chart.scss';

const Chart = ({ data }) => {
  const title = <h2>Chance of Rain</h2>

  const chart = (
    <Card className="forecast-chart">
      {title}
      <AreaChart
        axes
        margin={{ top: 50, right: 10, bottom: 50, left: 50 }}
        interpolate={'cardinal'}
        width={1100}
        height={400}
        yDomainRange={[0, 100]}
        data={data}
      />
    </Card>
  );
  return chart
}

export default withChartData(Chart);