import { Component, OnInit } from '@angular/core';
import {ClickAnimation} from "./click-animetion";
import {timer} from "rxjs";

@Component({
  selector: 'app-click-action-component',
  templateUrl: './click-action-component.component.html',
  styleUrls: ['./click-action-component.component.scss'],
  animations: [ClickAnimation]
})
export class ClickActionComponentComponent implements OnInit {
  currentClick = 0
  isClick = false;

  currentState = 0;
  nextStateScroll: number | null = 0;

  mouseDown = false;

  coolDown = 100;
  isCoolDown = true;

  mediaState = [
    {
      scroll: 0,
      clickImage: "https://popcat.click/img/op.353767c3.png",
      unClickImage: "https://popcat.click/img/p.1e9d00be.png",
      sound: "assets/pop1.ogg"
    },
    {
      scroll: 10,
      clickImage: "https://thaiwinner.com/wp-content/uploads/2019/12/MEME-1-min-1024x576.jpg",
      unClickImage: "https://cdn.zipeventapp.com/blog/2021/01/2021-01-06_09-40-04_zip-meme-595x423.jpg",
      sound: "assets/pluck.wav"
    },
    {
      scroll: 20,
      unClickImage: "https://cdn.zipeventapp.com/blog/2021/01/2021-01-08_06-00-15_dvt3m6nuqaalspd-595x595.jpg",
      clickImage: "https://cdn.zipeventapp.com/blog/2021/01/2021-01-06_10-14-25_zip-meme1-595x405.jpg",
      sound: "assets/mixkit-tribal-dry-drum-558.wav"
    }
  ]

  audio:any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.processBackground();
    let newAudio = new Audio()
    newAudio.src = this.mediaState[this.currentState].sound;
    newAudio.load();
    this.audio[this.currentState] = newAudio

  }

  playAudio(){
    this.audio[this.currentState].currentTime=0;
    this.audio[this.currentState].play();
  }

  processBackground() {
    if (this.mediaState[this.currentState +1]) {
      this.nextStateScroll = this.mediaState[this.currentState +1].scroll
      let newAudio = new Audio()
      newAudio.src = this.mediaState[this.currentState+1].sound;
      newAudio.load();
      this.audio[this.currentState+1] = newAudio
    } else {
      this.nextStateScroll = null;
    }
  }

  countClick() {
    if (this.isCoolDown) {
      this.mouseDown = true;
      this.playAudio()
      this.currentClick++
      this.isClick = true;
      timer(100).subscribe(() => {
        this.isClick = false
      })
      if (this.nextStateScroll && this.currentClick >= this.nextStateScroll) {
        this.currentState++
        this.processBackground()
      }
      if (this.coolDown > 0) {
        this.isCoolDown = false;
        timer(this.coolDown).subscribe(() => {
          this.isCoolDown = true
        })
      }
    }
  }

  mouseUpEvent() {
    this.mouseDown = false;
  }
}
