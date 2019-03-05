import { Component, OnInit } from '@angular/core';
import { AdminItems } from './menu-items/admin-items.menu';
import { UserItems } from './menu-items/user-items.menu';

@Component({
  selector: 'fmyp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  adminItems: any[];
  userItems: any[];

  constructor() { 
    this.adminItems = AdminItems;
    this.userItems = UserItems;
  }

  ngOnInit() {
  }

}
