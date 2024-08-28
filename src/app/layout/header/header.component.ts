import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  customers: any = [];
  customerData: any = {};
  sidebarnav: boolean = false;
  userName: String = "";
  updatedMenuList: any = [];
  menuList = [
    { active_icon: 'dashboard-active', label: 'Dashboard', link: '/Dashboard', active: true, isRequired: true },
    { active_icon: 'category-active', label: 'Category', link: '/Category', active: true, isRequired: true },
    { active_icon: 'inventories-active', label: 'Inventories', link: '/Inventories', active: true, isRequired: true },
    { active_icon: 'users-active', label: 'Users', link: '/Users', active: true, isRequired: true },
    { active_icon: 'orders-active', label: 'Orders', link: '/Orders', active: true, isRequired: true },
  ]
  constructor(private masterService: MasterService, private route: Router,) { }


  ngOnInit() {
    this.userName = this.masterService.loggedInUserName;
    this.menuList.forEach(menu => {
      if (this.masterService.menuList.some((urlAllowed: { name: string; }) => urlAllowed.name === menu.label)) {
        menu.isRequired = true;
      } else {
        // menu.isRequired = false;
      }
    });
    this.updatedMenuList = this.menuList;
  }

  Opensidebar() {
    this.sidebarnav = true;
  }

  Closesidebar() {
    this.sidebarnav = false;
  }

  logout() {
    sessionStorage.removeItem('LoggedInStatus');
    this.route.navigateByUrl('/login');
  }

}
