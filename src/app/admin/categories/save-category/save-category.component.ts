import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'fmyp-save-category',
  templateUrl: './save-category.component.html',
  styleUrls: ['./save-category.component.css']
})
export class SaveCategoryComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
