import { Component, OnInit } from '@angular/core';
import { AdminItems } from './menu-items/admin-items.menu';
import { UserItems } from './menu-items/user-items.menu';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'fmyp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  adminItems: any[];
  userItems: any[];
  navItems: any[];

  constructor(private router: Router) { 
    this.adminItems = AdminItems;
    this.userItems = UserItems;
  }

  ngOnInit() {
    this.navItems = this.router.url.includes('user') ? this.userItems : this.adminItems; 
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(route => {
      this.navItems = (<any>route).url.includes('user') ? this.userItems : this.adminItems;
    })
  }

}
