import { Component } from '@angular/core';
import { NotfoundService, NFIConfig } from 'notfound';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngmicromodules';
  config: NFIConfig;
  constructor(private notfoundService: NotfoundService) {
    this.config = {
      theme: {
        'text-color': 'orange',
        'subtext-color': 'red',
        'explanation-color': 'green'
      },
      data: {
        statusCode: '500'
      }
    };
    this.notfoundService.setConfig(this.config);
  }
}
