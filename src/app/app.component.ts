import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'highchart-test';
  chart: Highcharts.Chart;

  Highcharts: typeof Highcharts = Highcharts;
  size = {
    width: 300,
    height: 300
  }
  chartOptions: Highcharts.Options = {
    chart: {
      animation: false,
      width: this.size.width,
      height: this.size.height,
      reflow: true
    },
    series: [{
      data: [1, 2, 3],
      type: 'pie',
      dataLabels: {
        enabled: false
      },
      states: {
        hover : {
          enabled: false
        },
        inactive: {
          opacity: 1
        }
      }
    }],
    title: {
      text: ''
    },
    tooltip: {
      enabled: false
    },
    responsive: {
      rules: [{
          condition: {
              maxWidth: 300
          }
      }]
    }
  };

  chartInstance(chart: Highcharts.Chart) {
    this.chart = chart;
  }

  small() {
    this.chart.setSize(200, 200, true)
    this.size = {
      height: 200,
      width: 200
    }
  }

  big() {
    this.chart.setSize(600, 600, true)
    this.size = {
      height: 600,
      width: 600
    }
  }


  ngOnInit(): void {

  }
}
