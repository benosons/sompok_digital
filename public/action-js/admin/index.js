console.log('You are running jQuery version: ' + $.fn.jquery);
$(document).ready(function(){
  // chartall()
});

// function chartall(params) {

//   $.ajax({
//     type: 'post',
//     dataType: 'json',
//     url: 'dashload',
//     success: function(result){

//         let data = result.data;
//         let pie = []
        
//         pie['teknis'] = [parseInt(data.progres.teknis.total)-parseInt(data.progres.teknis.selesai), parseInt(data.progres.teknis.selesai)]
//         pie['operasi'] = [parseInt(data.progres.operasi.total)-parseInt(data.progres.operasi.selesai), parseInt(data.progres.operasi.selesai)]

//         $('#usr-all').html(data.users.userall);
//         $('#usr-teknis').html(data.users.teknis);
//         $('#usr-slo').html(data.users.operasi);

//         var options = {
//           series: [{
//           name: 'Persetujuan Teknis',
//           data: data.teknis
//         }, {
//           name: 'SLO',
//           data: data.operasi
//         }],
//           chart: {
//           type: 'bar',
//           height: 400
//         },
//         plotOptions: {
//           bar: {
//             horizontal: false,
//             columnWidth: '50%',
//             endingShape: 'rounded'
//           },
//         },
//         colors: ['#33b2df', '#f9851f'],
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           show: true,
//           width: 2,
//           colors: ['transparent']
//         },
//         xaxis: {
//           categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'],
//         },
//         yaxis: {
//           title: {
//             text: 'Total Permohonan'
//           }
//         },
//         fill: {
//           opacity: 1
//         },
//         tooltip: {
//           y: {
//             formatter: function (val) {
//               return val
//             }
//           }
//         }
//         };
      
//         var chart = new ApexCharts(document.querySelector("#chart-all"), options);
//         chart.render();

//         var options_pie_teknis = {
//           chart: {
//               type: 'pie',
//               width: '100%',
//               height: 320
//           },
//           dataLabels: {
//             enabled: true,
//           },
//           plotOptions: {
//             pie: {
//               customScale: 0.8,
//               donut: {
//                 size: '75%',
//               },
//               offsetY: 20,
//             },
//             stroke: {
//               colors: undefined
//             }
//           },
//           series: pie['teknis'],
//           labels: ['On Progres', 'Selesai'],
//           legend: {
//             position: 'left',
//             offsetY: 80
//           }
//         }
      
//         var chart_teknis = new ApexCharts(document.querySelector("#chart-teknis"), options_pie_teknis);
//         chart_teknis.render();

//         var options_pie_operasi = {
//           chart: {
//               type: 'pie',
//               width: '100%',
//               height: 320
//           },
//           dataLabels: {
//             enabled: true,
//           },
//           plotOptions: {
//             pie: {
//               customScale: 0.8,
//               donut: {
//                 size: '75%',
//               },
//               offsetY: 20,
//             },
//             stroke: {
//               colors: undefined
//             }
//           },
//           series: pie['operasi'],
//           labels: ['On Progres', 'Selesai'],
//           legend: {
//             position: 'left',
//             offsetY: 80
//           }
//         }
      
//         var chart_operasi = new ApexCharts(document.querySelector("#chart-operasi"), options_pie_operasi);
//         chart_operasi.render();

//     }
//   })
// }

var options1 = {
  chart: {
      height: 240,
      type: "donut"
  },
  series: [44, 55, 41, 17],
  labels: ["Sangat Sesuai", "Sesuai", "Kurang Sesuai", "Tidak Sesuai"],
  colors: ["#34c38f", "#556ee6", "#f1b44c", "#f46a6a"],
  legend: {
      show: false,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "12px",
      offsetX: 0
  },
  responsive: [{
      breakpoint: 300,
      options: {
          chart: {
              height: 240
          },
          legend: {
              show: !1
          }
      }
  }]
};

var chart1 = new ApexCharts(document.querySelector("#kesesuaian"), options1);
chart1.render();

var options2 = {
  chart: {
      height: 240,
      type: "donut"
  },
  series: [44, 55, 41, 17],
  labels: ["Sangat Sesuai", "Sesuai", "Kurang Sesuai", "Tidak Sesuai"],
  colors: ["#34c38f", "#556ee6", "#f1b44c", "#f46a6a"],
  legend: {
      show: false,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "12px",
      offsetX: 0
  },
  responsive: [{
      breakpoint: 300,
      options: {
          chart: {
              height: 240
          },
          legend: {
              show: !1
          }
      }
  }]
};

var chart2 = new ApexCharts(document.querySelector("#kemudahan"), options2);
chart2.render();

