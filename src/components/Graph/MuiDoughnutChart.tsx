import { PieChart,pieArcLabelClasses  } from '@mui/x-charts/PieChart';

function MuiDoughnutChart({data}) {

  return <PieChart
    colors={['#3248f3', '#78bbfb', '#bbdafc', '#f3f4fe']}
    series={[
      {
        
        data: [
          { id: 0, value: data[0], },
          { id: 1, value: data[1], },
          { id: 2, value: data[2], },
          { id: 3, value: data[3], },
        ],
        innerRadius: 80,
        outerRadius: 120,
        paddingAngle: 0,
        cornerRadius: 0,
        startAngle: -180,
        endAngle: 180,
        cx: 120,
        cy: 150,
        arcLabel: (item) => `${item.value}% `,
        arcLabelMinAngle: 1,
      }
    ]
  }
  sx={{
    [`& .${pieArcLabelClasses.root}`]: {
      fill: '#8499AD',
      // fontWeight: 'bold',
    },
  }}
  />;
}

export default MuiDoughnutChart;
