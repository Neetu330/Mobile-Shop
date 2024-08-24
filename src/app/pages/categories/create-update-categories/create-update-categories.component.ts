import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
import { Categories } from 'src/app/models/categories.model';
import { Router } from '@angular/router';
import { CategoriesBean } from 'src/app/models/categoriesBean';

@Component({
  selector: 'app-create-update-categories',
  templateUrl: './create-update-categories.component.html',
  styleUrls: ['./create-update-categories.component.less']
})
export class CreateUpdateCategoriesComponent implements OnInit {

  createCategories: FormGroup;
  submitted: boolean = false;
  id: any;
  editEnable = false;
  categoryReq: CategoriesBean = new CategoriesBean();

  constructor(private fb: FormBuilder, private masterService: MasterService, private route: Router) {
    this.createCategories = this.fb.group({
      categoryName: ["", [Validators.required]],
      description: ["", [Validators.required]],
      level: ["", [Validators.required]],
      parentLevel: ["", [Validators.required]]
    })

    if (history.state.id != null || history.state.id != undefined) {
      this.id = history.state.id;
    }
  }

  ngOnInit(): void {
    if (this.id != null || this.id != undefined) {
      this.editEnable = true;
      this.categoryList();
    }
  }

  categoryList() {
    this.masterService.viewCategories(this.id).subscribe((res: any) => {
      console.log(res);
      if (res != null) {
        this.categoryReq = res[0];
        this.createCategories.patchValue(res[0]);
      } else {

      }
    })
  }

  onBackClick() {
    this.route.navigateByUrl('/Category')
  }

  onSubmit() {
    this.submitted = true;
    if (this.createCategories.invalid) {
      return;
    }
    this.categoryReq = this.createCategories.value;
    this.categoryReq.CreatedBy = 'samrutti@gmail.com'
    console.log(this.categoryReq);
    this.masterService.addCategories(this.categoryReq).subscribe((res: any) => {
      console.log(res);
      if (res == '1') {
        this.route.navigateByUrl('/Category');
      } else {
        console.log("failure -1 ---------------------------")
      }
    })
  }

  onEditSubmit() {
    this.submitted = true;
    if (this.createCategories.invalid) {
      return;
    }
    
    this.categoryReq.CategoryName = this.createCategories.value.categoryName;
    this.categoryReq.Description = this.createCategories.value.description;
    this.categoryReq.Level = this.createCategories.value.level;
    this.categoryReq.ParentLevel = this.createCategories.value.parentLevel;
    this.masterService.editCategories(this.categoryReq).subscribe((res: any) => {
      console.log(res);
      if (res == '1') {
        this.route.navigateByUrl('/Category');
      } else {
        console.log("failure -1 ---------------------------")
      }
    })
  }
}
