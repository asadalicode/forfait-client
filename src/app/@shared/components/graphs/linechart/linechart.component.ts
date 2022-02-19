import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
})
export class LinechartComponent implements OnInit {
  lineChartData: ChartDataSets[] = [{ data: [], label: 'Data' }];

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#70DBCA',
      backgroundColor: '#F3FFFD',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins: any = [];
  lineChartType = 'line';

  constructor() {}

  ngOnInit(): void {}

  @Input() public set plotTitle(title: any) {
    this.lineChartData[0].label = title;
  }

  @Input() public set labels(labels: any) {
    this.lineChartLabels = [...labels];
  }

  @Input() public set graphData(data: any) {
    this.lineChartData[0].data = [...data];
  }
}
