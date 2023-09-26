import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component {
  public onOpenModal(): void {
    console.log("openmodule")
    const container = document.getElementById('page-content-wrapper');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#staticBackdrop');
    container?.appendChild(button);
    button.click();
    
  }
  public onOpenModal1(): void {
    console.log("openmodule")
    const container = document.getElementById('page-content-wrapper');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#staticBackdrop1');
    container?.appendChild(button);
    button.click();
    
  }  public onOpenModal2(): void {
    console.log("openmodule")
    const container = document.getElementById('page-content-wrapper');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#staticBackdrop2');
    container?.appendChild(button);
    button.click();
    
  }
  deskForm: any;
  reservationForm: any;
  requestForm: any;

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
    if (this.reservationForm.valid) {
      console.log(this.reservationForm.value);
      // You can send the form data to your server or perform other actions here
    }
   if (this.requestForm.valid) {
    console.log(this.requestForm.value);
    // You can send the form data to your server or perform other actions here
  }

}
}
