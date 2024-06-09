import React from 'react';
import ReactApexChart from 'react-apexcharts';

class MyChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'bar',
        },
        xaxis: {
          categories: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
        },
      },
      series: [
        {
          name: 'Série 1',
          data: [30, 40, 45],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default MyChart;
