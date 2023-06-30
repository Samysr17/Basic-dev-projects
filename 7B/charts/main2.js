// Data retrieved from https://yearbook.enerdata.net/electricity/world-electricity-production-statistics.html
Highcharts.chart('container', {
  chart: {
      type: 'column',
      options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          viewDistance: 25,
          depth: 40
      }
  },

  title: {
      text: ' Electricity production in countries, grouped by continent',
      align: 'left'
  },

  xAxis: {
      labels: {
          skew3d: true,
          style: {
              fontSize: '16px'
          }
      }
  },

  yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
          text: 'TWh',
          skew3d: true,
          style: {
              fontSize: '16px'
          }
      }
  },

  tooltip: {
      headerFormat: '<b>{point.key}</b><br>',
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
  },

  plotOptions: {
      series: {
          pointStart: 2016
      },
      column: {
          stacking: 'normal',
          depth: 40
      }
  },

  series: [{
      name: 'South Korea',
      data: [563, 567, 590, 582, 571],
      stack: 'Asia'
  }, {
      name: 'Germany',
      data: [650, 654, 643, 612, 572],
      stack: 'Europe'
  }, {
      name: 'Saudi Arabia',
      data: [368, 378, 378, 367, 363],
      stack: 'Asia'
  }, {
      name: 'France',
      data: [564, 562, 582, 571, 533],
      stack: 'Europe'
  }]
});


// Data retrieved from https://olympics.com/en/olympic-games/beijing-2022/medals
// Highcharts.chart('container', {
//   chart: {
//       type: 'pie',
//       options3d: {
//           enabled: true,
//           alpha: 45
//       }
//   },
//   title: {
//       text: 'Beijing 2022 gold medals by country',
//       align: 'left'
//   },
//   subtitle: {
//       text: '3D donut in Highcharts',
//       align: 'left'
//   },
//   plotOptions: {
//       pie: {
//           innerSize: 100,
//           depth: 45
//       }
//   },
//   series: [{
//       name: 'Medals',
//       data: [
//           ['Norway', 16],
//           ['Germany', 12],
//           ['USA', 8],
//           ['Sweden', 8],
//           ['Netherlands', 8],
//           ['ROC', 6],
//           ['Austria', 7],
//           ['Canada', 4],
//           ['Japan', 3]

//       ]
//   }]
// });


