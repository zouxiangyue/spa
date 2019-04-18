var myChart = echarts.init(document.getElementById('root'));
 var xdata = [],
    ydata = [];

for(var i = 0; i <= 1; i += 0.1) {
    xdata.push(roundFractional(i, 1));
    ydata.push(roundFractional(h(i), 2));        
};

var option = {
  title: {
      text: '二进熵函数曲线'                               
  },
  tooltip: {},
  legend: {
      data:['信号量']                                  
  },
  xAxis: {
      data: xdata                                  
  },
  yAxis: {},
  series: [{
      name: '信号量',
      type: 'line',
      smooth: 'true',
      data: ydata                                                                                 
  }]
          
};

 myChart.setOption(option);

 function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);      
 }

function h(p) {
    return -1 * (plog(p) + plog(1 - p));   
}

function plog(p) {
  return (p === 0)? 0 : p * Math.log2(p); 
}
