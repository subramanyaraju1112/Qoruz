// import Highcharts, { Options } from 'highcharts';
// import React, { useEffect, useRef } from 'react';

// interface SemiDoughnutChartProps {
//   data: Array<{ name: string; value: number; color: string }>;
//   thickness?: string;
//   radius?: string;
// }

// const SemiDoughnutChart: React.FC<SemiDoughnutChartProps> = ({
//   data,
//   thickness = '110%',
//   radius = '50%',
// }) => {
//   const chartContainerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (chartContainerRef.current) {
//       const chartOptions: Options = {
//         chart: {
//           type: 'pie',
//         },
//         title: {
//           text: '',
//         },
//         tooltip: {
//           pointFormat: '<b>{point.name}</b>: {point.y}',
//         },
//         plotOptions: {
//           pie: {
//             dataLabels: {
//               enabled: false,
//             },
//             startAngle: -90,
//             endAngle: 90,
//             center: ['50%', '100%'],
//             size: thickness,
//             colors: data.map((item) => item.color),
//           },
//         },
//         series: [
//           {
//             type: 'pie',
//             name: 'Values',
//             innerSize: radius,
//             data: data.map((item) => ({ name: item.name, y: item.value })),
//           },
//         ],
//       };

//       Highcharts.chart(chartContainerRef.current, chartOptions);
//     }
//   }, [data, thickness, radius]);

//   return <div ref={chartContainerRef} />;
// };

// export default SemiDoughnutChart;

import Highcharts, { Options } from 'highcharts';
import React, { useEffect, useRef } from 'react';

import ChartStyles from './SemiDonutChart.module.css';

interface SemiDoughnutChartProps {
  data: Array<{ name: string; score: number }>;
  thickness?: string;
  radius?: string;
  colors?: string[];
}

const SemiDoughnutChart: React.FC<SemiDoughnutChartProps> = ({
  data,
  thickness = '110%',
  radius = '50%',
  colors = [],
}) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chartOptions: Options = {
        chart: {
          type: 'pie',
        },
        title: {
          text: '',
        },
        tooltip: {
          pointFormat: '<b>{point.name}</b>: {point.y}',
        },
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                plotOptions: {
                  pie: {
                    size: '52%',
                    center: ['42%', '100%'], // Decrease the size of the chart when the width is below 500px
                  },
                },
              },
            },
          ],
        },
        plotOptions: {
          pie: {
            borderWidth: 0,
            borderRadius: 0,
            dataLabels: {
              enabled: true,
              format: '{point.percentage:.1f}',
            },
            startAngle: -90,
            endAngle: 90,
            center: ['42%', '100%'],
            size: thickness,
          },
        },
        series: [
          {
            type: 'pie',
            name: 'Values',
            innerSize: radius,
            data: data.map((item, index) => ({
              name: item.name,
              y: item.score,
              color: colors[index % colors.length], // Assigning colors to each section
            })),
          },
        ],
      };

      Highcharts.chart(chartContainerRef.current, chartOptions);
    }
  }, [data, thickness, radius, colors]);

  return <div ref={chartContainerRef} className={ChartStyles.chart} />;
};

export default SemiDoughnutChart;
