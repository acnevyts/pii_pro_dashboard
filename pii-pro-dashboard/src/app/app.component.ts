import { Component, OnInit } from '@angular/core';
import { Hero } from './classes/hero';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'pii-pro-dashboard';
  public configurations: any[];
  public selected;
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.getConfigurations().subscribe((resp) => {
      console.log(resp);
      this.configurations = resp;
      this.configurations.map((conf) => {
        const tmp = conf.docType.split('.');
        conf.displayName = tmp[tmp.length - 1];
      });
    });
  }
}
