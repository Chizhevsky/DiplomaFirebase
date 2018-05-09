import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    id = 'chart1';
    width = 750;
    height = 500;
    type = 'column2d';
    dataFormat = 'json';
    dataSource;
    title = 'Angular4 FusionCharts Sample';

    constructor() {
      this.dataSource = {
          "chart": {
              "caption": "Harry's SuperMart",
              "subCaption": "Top 5 stores in last month by revenue",
              "numberprefix": "$",
              "theme": "fint"
          },
          "data": [
              {
                  "label": "Bakersfield Central",
                  "value": "880000"
              },
              {
                  "label": "Garden Groove harbour",
                  "value": "730000"
              },
              {
                  "label": "Los Angeles Topanga",
                  "value": "590000"
              },
              {
                  "label": "Compton-Rancho Dom",
                  "value": "520000"
              },
              {
                  "label": "Daly City Serramonte",
                  "value": "330000"
              }
          ]
      }
  }
}


