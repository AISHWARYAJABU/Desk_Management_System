import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  deskForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.deskForm = this.fb.group({
      deskId: ['', Validators.required],
      location: ['', Validators.required],
      size: ['', Validators.required],
      amenities: [''],
      isAvailable: [false],
      deskType: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.deskForm.valid) {
      console.log(this.deskForm.value);
      // You can send the form data to your server or perform other actions here
    }
  }
}
