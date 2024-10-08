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

  customeremiremider: any = [
    {
      name: 'Rohit shetty',
      dtemi: '02/01/2025',
      product: "Vivo T90",
      emiamount: "5,500",
      description: 'This is the best product ever!'
    },
    {
      name: 'Rohit shetty',
      dtemi: '02/01/2025',
      product: "Vivo T90",
      emiamount: "5,500",
      description: 'This is the best product ever!'
    },
    {
      name: 'Rohit shetty',
      dtemi: '02/01/2025',
      product: "Vivo T90",
      emiamount: "5,500",
      description: 'This is the best product ever!'
    },
    {
      name: 'Rohit shetty',
      dtemi: '02/01/2025',
      product: "Vivo T90",
      emiamount: "5,500",
      description: 'This is the best product ever!'
    },
    {
      name: 'Rohit shetty',
      dtemi: '02/01/2025',
      product: "Vivo T90",
      emiamount: "5,500",
      description: 'This is the best product ever!'
    },
    {
      name: 'Rohit shetty',
      dtemi: '02/01/2025',
      product: "Vivo T90",
      emiamount: "5,500",
      description: 'This is the best product ever!'
    },
    {
      name: 'Rohit shetty',
      dtemi: '02/01/2025',
      product: "Vivo T90",
      emiamount: "5,500",
      description: 'This is the best product ever!'
    },
    {
      name: 'Rohit shetty',
      dtemi: '02/01/2025',
      product: "Vivo T90",
      emiamount: "5,500",
      description: 'This is the best product ever!'
    },

  ];

  bestproduct: any = [
    {
      name: 'bestproduct',
      image: 'https://via.placeholder.com/150',
      price: 500,
      qty: 10,
      description: 'This is the best product ever!'
    },
    {
      name: 'bestproduct',
      image: 'https://via.placeholder.com/150',
      price: 500,
      qty: 10,
      description: 'This is the best product ever!'
    },
    {
      name: 'bestproduct',
      image: 'https://via.placeholder.com/150',
      price: 500,
      qty: 10,
      description: 'This is the best product ever!'
    },
    {
      name: 'bestproduct',
      image: 'https://via.placeholder.com/150',
      price: 500,
      qty: 10,
      description: 'This is the best product ever!'
    },
    {
      name: 'bestproduct',
      image: 'https://via.placeholder.com/150',
      price: 500,
      qty: 10,
      description: 'This is the best product ever!'
    },
    {
      name: 'bestproduct',
      image: 'https://via.placeholder.com/150',
      price: 500,
      qty: 10,
      description: 'This is the best product ever!'
    },

  ];
  bestoffer: any = [
    {
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    },{
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    },{
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    },{
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    },{
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    },{
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    },{
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    },{
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    },{
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    },{
      name: 'bestoffer',
      image: 'https://via.placeholder.com/150',
      dtstart: "12/12/2024",
      dtend: "31/12/2024",
      description: 'This is the best offer ever!'
    }
  ];





}
