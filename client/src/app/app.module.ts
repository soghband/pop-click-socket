import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {environment} from "../environments/environment";
import { ClickActionComponentComponent } from './click-action-component/click-action-component.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GeolocationService} from "@ng-web-apis/geolocation";
import {HttpRequestService} from "./services/http-request.service";
import {HttpClientModule} from "@angular/common/http";

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ClickActionComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    HttpRequestService,
    GeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
