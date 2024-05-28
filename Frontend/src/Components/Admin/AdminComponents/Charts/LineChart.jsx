import React from 'react'



const LineChart = () => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Dataset',
        data: Utils.numbers({count: 6, min: -100, max: 100}),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15
      }
    ]
  };
  return (
    <div>
      
    </div>
  )
}

export default LineChart
