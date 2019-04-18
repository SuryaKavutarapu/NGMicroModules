import { Component, OnInit } from '@angular/core';
import { NotfoundService } from './notfound.service';
import { NFIConfig } from './config.model';

@Component({
  selector: 'lib-notfound',
  templateUrl: 'notfound.component.html',
  styleUrls: ['notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  data: NFIConfig['data'];
  constructor(private notfoundService: NotfoundService) { }

  ngOnInit() {
    const config = this.notfoundService.getConfig();
    this.data = config.data;
    this.themeChanger(config);
  }
  themeChanger(config: NFIConfig) {
    const PREFIX = '--ngnf-';
    if (config instanceof Object && config) {
      if (config.theme) {
        Object.keys(config.theme).map((each) => {
          document.getElementsByTagName('html')[0].style.setProperty(PREFIX + each, config.theme[each]);
        });
      } else {
        console.log('Default Theme Applied');
      }
    } else {
      console.log('Config issue');
    }
  }
}
