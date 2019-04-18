import { Injectable } from '@angular/core';
import { NFIConfig } from './config.model';

@Injectable({
  providedIn: 'root'
})
export class NotfoundService {
  private config: NFIConfig;
  constructor() { }

  public setConfig(value: NFIConfig) {
    this.config = value;
  }
  public getConfig(): NFIConfig {
    return this.config;
  }
}
