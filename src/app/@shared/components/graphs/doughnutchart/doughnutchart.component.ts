import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';
@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.scss'],
})
export class DoughnutchartComponent implements OnInit {
  public doughnutChartLabels: Label[] = ['Active', 'Inactive'];
  public doughnutChartData: MultiDataSet = [[80, 300]];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors = [{ backgroundColor: ['#5E72E4', '#E22A2A'] }];

  public doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [
    {
      afterDraw(chart: any) {
        const ctx = chart.ctx;
        var txt1 = '';
        var txt2 = '';

        try {
          var check = chart.active ? chart.tooltip._active[0]._datasetIndex : 'None';
          if (check !== 'None') {
            txt1 = chart.tooltip._data.labels[chart.tooltip._active[0]._index];
            txt2 = chart.tooltip._data.datasets[0].data[chart.tooltip._active[0]._index];
          } else {
            txt1 = chart.tooltip._data.labels[0];
            txt2 = chart.tooltip._data.datasets[0].data[0];
          }
        } catch (err) {
          txt1 = chart.tooltip._data.labels[0];
          txt2 = chart.tooltip._data.datasets[0].data[0];
        }
        //Get options from the center object in options
        const sidePadding = 60;
        const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

        //Get the width of the string and also the width of the element minus 10 to give it 5px side padding

        const stringWidth = ctx.measureText(txt1).width;
        const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

        // Find out how much the font can grow in width.
        const widthRatio = elementWidth / stringWidth;
        const newFontSize = Math.floor(30 * widthRatio);
        const elementHeight = chart.innerRadius * 2;

        // Pick a new font size so it will not be larger than the height of label.
        const fontSizeToUse = 15;
        ctx.font = fontSizeToUse + 'px Arial';
        ctx.fillStyle = 'black';
        // Draw text in center
        ctx.fillText('Assets', centerX, centerY - 20);
        var fontSizeToUse1 = 30;
        ctx.font = fontSizeToUse1 + 'px Arial';
        let data = chart.tooltip._data.datasets[0].data[0] + chart.tooltip._data.datasets[0].data[1];

        ctx.fillText(data, centerX, centerY + 10);
      },
    },
  ];
  public doughnutChartOptions = {
    responsive: true,
    // aspectRatio: 2.5,
    cutoutPercentage: 50,
    legend: {
      display: false,
    },
  };
  constructor() {}

  ngOnInit(): void {}

  @Input() public set labels(labels: any) {
    this.doughnutChartLabels = [...labels];
  }

  @Input() public set graphData(data: any) {
    this.doughnutChartData = [[...data]];
  }
}
