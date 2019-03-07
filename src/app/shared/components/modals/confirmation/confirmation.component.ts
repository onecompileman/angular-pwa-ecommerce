import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'fmyp-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  
  message: string;
  action: any;


  constructor(public bsModalRef: BsModalRef) {
    this.message = bsModalRef.content.data.message;
   }

  ngOnInit() {
  }

}
