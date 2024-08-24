import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
import { Categories } from 'src/app/models/categories.model';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.less']
})
export class CategoriesListComponent implements OnInit {
  categoriesList: any = [];
  constructor(private fb: FormBuilder, private masterService: MasterService, private route: Router) {
  }

  ngOnInit(): void {
    this.categoryList();
  }

  categoryList() {
    this.masterService.viewCategories().subscribe((res: any) => {
      console.log(res);
      if (res != null) {
        this.categoriesList = res;
      } else {

      }
    })
  }

  create() {
    this.route.navigateByUrl('Category/create');
  }

  editCategory(id : any) {
    this.route.navigateByUrl('Category/create',{state : { id: id }});
  }
  deleteCategory(id : any, username : any) {
    this.masterService.deleteCategories(id,username).subscribe((res: any)=>{

    })
  }

}

