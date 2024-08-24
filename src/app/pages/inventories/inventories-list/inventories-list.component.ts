import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventories-list',
  templateUrl: './inventories-list.component.html',
  styleUrls: ['./inventories-list.component.less']
})
export class InventoriesListComponent implements OnInit {
  inventoriesList: any = [];
  allowedActions : any = [];
  constructor(private fb: FormBuilder, private masterService: MasterService, private route: Router) {

  }

  ngOnInit(): void {
    let userId = sessionStorage.getItem('userId');
    this.masterService.checkPermission(userId,'inventories').subscribe((res: any) => {
      this.allowedActions = res;
    })
    this.categoryList();
  }

  categoryList() {
    this.masterService.viewInventories().subscribe((res: any) => {
      console.log(res);
      if (res != null) {
        this.inventoriesList = res;
      } else {

      }
    })
  }

  create() {
    this.route.navigateByUrl('Inventories/create');
  }

  edit(id: any) {
    this.route.navigateByUrl('Inventories/create', { state: { id: id } });
  }

  delete(id: any, username: any) {
    debugger;
    this.masterService.deleteInventories(id, username).subscribe((res: any) => {
    })
  }

}

