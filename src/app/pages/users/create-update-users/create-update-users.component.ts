import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/services/master.service';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/categoriesBean';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-update-users',
  templateUrl: './create-update-users.component.html',
  styleUrls: ['./create-update-users.component.less']
})
export class CreateUpdateUsersComponent implements OnInit {
  sectionTitle : any;
  
  userDetails: FormGroup;
  addressDetails: FormGroup;
  submitted: boolean = false;
  id: any;
  editEnable = false;
  userDetailsBean: UserDetails = new UserDetails();
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;

  constructor(private fb: FormBuilder, private masterService: MasterService, private route: Router) {
    this.userDetails = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      alternateEmail: [""],
      mobile: ["", [Validators.required]],
      alternateMobile: [""],
      p_address: ["", [Validators.required]],
      c_address: ["", [Validators.required]],
      pan: ["", [Validators.required]],
    })

    this.addressDetails = this.fb.group({
      address: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      email: ["", [Validators.required]],
      pan: ["", [Validators.required]],
      roleId: ["", [Validators.required]],
    })

    if (history.state.id != null || history.state.id != undefined) {
      this.id = history.state.id;
    }
  }

  ngOnInit(): void {
    this.sectionTitle = "User Details";
    if (this.id != null || this.id != undefined) {
      this.editEnable = true;
    }
  }

  onBackClick() {
    this.route.navigateByUrl('/Inventories')
  }

  submit(){
    this.submitted = true;
    if (this.userDetails.invalid) {
      return;
    }
    this.userDetailsBean = this.userDetails.value;
    this.userDetailsBean.CreatedBy = 'samrutti@gmail.com'
    this.masterService.addUserDetails(this.userDetailsBean).subscribe((res: any) => {
      console.log(res);
      if (res == '1') {
        this.step1 = false;
        this.step2 = true;
        this.submitted = false;
        this.sectionTitle = "Address Details";
        $('#step2').toggleClass('active');
      } else {
        console.log("failure -1 ---------------------------")
      }
    })
  }

  edit(){

  }

  submitStep2(){
    this.submitted = true;
    if (this.addressDetails.invalid) {
      return;
    }
    this.userDetailsBean = this.addressDetails.value;
    this.userDetailsBean.CreatedBy = 'samrutti@gmail.com'
    this.masterService.addressDetails(this.userDetailsBean).subscribe((res: any) => {
      console.log(res);
      if (res == '1') {
        this.step1 = false;
        this.step2 = false;
        this.step3 = true
        this.submitted = false;
        this.sectionTitle = "Upload Documents";
        $('#step3').toggleClass('active');
      } else {
        console.log("failure -1 ---------------------------")
      }
    })
  }
}
