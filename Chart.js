<Bar
  data={{
    labels: Object.keys(typeDistribution),
    datasets: [{
      label: 'Equipment Count',
      data: Object.values(typeDistribution)
    }]
  }}
/>
