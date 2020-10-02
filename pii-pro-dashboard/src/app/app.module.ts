import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './components/config/config.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpConfigComponent } from './components/jsonp-config/jsonp-config.component';
import { RehydrationProfileComponent } from './components/rehydration-profile/rehydration-profile.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { JsonPathHighlightPipe } from './pipes/json-path-highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    JsonpConfigComponent,
    RehydrationProfileComponent,
    JsonPathHighlightPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
