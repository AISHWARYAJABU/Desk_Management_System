import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'Internal';
 sideNavStatus: boolean = false;
  constructor() {}

  ngOnInit(): void {
    
  }


}
