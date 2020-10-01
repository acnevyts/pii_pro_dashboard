import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rehydration-profile',
  templateUrl: './rehydration-profile.component.html',
  styleUrls: ['./rehydration-profile.component.scss'],
})
export class RehydrationProfileComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @Input() name: string;
  @Input() config: any;
  public piiTypes: any[];
  public includes: any[];
  public excludes: any[];
  public includesPressed: boolean;
  public excludesPressed: boolean;

  constructor() {}

  ngOnInit(): void {
    this.excludesPressed = false;
    this.includesPressed = false;
    this.piiTypes = [];
    this.includes = [];
    this.excludes = [];
    if (this.config && this.config.Config) {
      if (this.config.Config.PIIData) {
        for (const conf of this.config.Config.PIIData) {
          if (this.piiTypes.indexOf(conf.pii_type) < 0) {
            this.piiTypes.push(conf.pii_type);
          }
        }
      }
      if (
        this.config.Config.RehydrationProfiles &&
        this.config.Config.RehydrationProfiles[this.name]
      ) {
        if (this.config.Config.RehydrationProfiles[this.name].includes) {
          for (const piiType of this.config.Config.RehydrationProfiles[
            this.name
          ].includes) {
            this.includes.push(piiType);
          }
        } else if (this.config.Config.RehydrationProfiles[this.name].excludes) {
          for (const piiType of this.config.Config.RehydrationProfiles[
            this.name
          ].excludes) {
            this.excludes.push(piiType);
          }
        }
      }
    }
    this.includesPressed = this.includes.length > 0;
    this.excludesPressed = this.excludes.length > 0;
    console.log(this.piiTypes, this.includesPressed, this.excludesPressed);
  }
}
