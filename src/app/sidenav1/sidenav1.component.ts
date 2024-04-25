import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav1',
  templateUrl: './sidenav1.component.html',
  styleUrls: ['./sidenav1.component.css']
})
export class Sidenav1Component implements OnInit{
  
  

  list = [
    {
      number:'1',
      name :'home',
      icon: 'fa-solid fa-house',
    },
    {
      number:'2',
      name :'Analytics',
      icon: 'fa-solid fa-chart-line',
    },
    {
      number:'3',
      name :'Products',
      icon: 'fa-solid fa-box',
    },
    {
      number:'4',
      name :'Order',
      icon: 'fa-solid fa-cart-shopping',
    },
    {
      number:'5',
      name :'Settings',
      icon: 'fa-solid fa-gear',
    },
    {
      number:'6',
      name :'About',
      icon: 'fa-solid fa-circle-info',
    },
    {
      number:'7',
      name :'Contact',
      icon: 'fa-solid fa-phone',
    },
  ]
  constructor() {}

  ngOnInit(): void {
    
  }

}
