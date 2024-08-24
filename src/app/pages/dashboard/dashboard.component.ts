import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  menuList = [];

  constructor(private masterService : MasterService) { 
    
  }

  ngOnInit(): void {
    // this.masterService.viewAllOrders().subscribe((res: any)=>{
    //   console.log(res);
    //   if(res.length != 0){
        
    //   }else{
    //     console.log("----------------else")
    //   }
    // })
  }

}
