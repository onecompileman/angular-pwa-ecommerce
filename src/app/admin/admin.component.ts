import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fmyp-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  promptEvent;

  constructor(
  ) { }

  ngOnInit() {
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }

}
