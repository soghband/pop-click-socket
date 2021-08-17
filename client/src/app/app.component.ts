import {Component, OnInit} from '@angular/core';
import {Socket} from "ngx-socket-io";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'client';
  topTenData = null

  constructor(private socket: Socket) {
  }

  ngOnInit() {
    this.socket.on('updateTopTenScroll', (resp: any) => {
      this.topTenData = resp
    })
  }

  numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}
