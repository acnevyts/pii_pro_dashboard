import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonp-config',
  templateUrl: './jsonp-config.component.html',
  styleUrls: ['./jsonp-config.component.scss'],
})
export class JsonpConfigComponent implements OnInit {
  @Input() public isCollapsed: boolean;
  @Input() public piiConfig: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.piiConfig);
  }
}
