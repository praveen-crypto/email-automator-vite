import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [600, 400, 300, 700],
      backgroundColor: [
        'rgba(50, 72, 243, 0.9)',
        'rgba(120, 187, 251, 0.9)',
        'rgb(187, 218, 252, 0.9)',
        'rgb(243, 244, 254, 0.9)',
      ],
      borderColor: [
        'rgba(50, 72, 243, 0.4)',
        'rgba(120, 187, 251, 0.4)',
        'rgb(187, 218, 252, 0.4)',
        'rgb(243, 244, 254, 0.4)',
      ],
      borderWidth: 0,
      cutout: 90
    },
  ],
};

function DoughnutChart() {
  return <Doughnut data={data} />;
}

export default DoughnutChart;
