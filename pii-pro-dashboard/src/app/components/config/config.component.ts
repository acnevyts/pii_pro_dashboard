import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/classes/hero';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  @Input() public config;
  public isCollapsed: boolean;
  public isProfilesCollapsed: boolean;
  public isFreeTextCollapsed: boolean;
  public keys = Object.keys;
  public testDocument;
  constructor(public coinfigService: ConfigService) {}

  ngOnInit(): void {
    this.isCollapsed = true;
    this.isProfilesCollapsed = true;
    this.isFreeTextCollapsed = true;
    console.log(this.config);
    this.coinfigService.getDocument(this.config.docType).subscribe((doc) => {
      this.testDocument = doc;
    });
  }
}
