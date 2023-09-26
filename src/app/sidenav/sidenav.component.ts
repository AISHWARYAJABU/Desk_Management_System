import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Block } from '@angular/compiler';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {

  public onOpenModal(): void {
    console.log('openmodule');
    const container = document.getElementById('page-content-wrapper');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#staticBackdrop');
    container?.appendChild(button);
    button.click();
  }
  public onPopupModal(): void {
    console.log('popup');
    const container = document.getElementById('page-content-wrapper');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#popup');
    container?.appendChild(button);
    button.click();
  }



  public onPopoutModal(): void {
    console.log('popout');
    const container = document.getElementById('page-content-wrapper');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#popout');
    container?.appendChild(button);
    button.click();
  }
  deskForm: FormGroup;
  reservationForm: any;
  requestForm: any;
  formSubmitted: boolean = false;
  bsModalRef!: BsModalRef;

  ngOnInit() {
    this.deskForm = this.fb.group({
      reservationId: ['', Validators.required],
      userId: ['', Validators.required],
      deskId: ['', Validators.required],
      amenities: ['', Validators.required, Validators.minLength(4)],
      deskType: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.deskForm.valid) {
      console.log(this.deskForm.value);
    }
    this.toastr.success('Desk allocated successfully!', 'Success', {
      timeOut: 3000, // Time duration for which the toastr will be displayed (in milliseconds)
    });

    if (this.reservationForm.valid) {
      console.log(this.reservationForm.value);
    }
    if (this.requestForm.valid) {
      console.log(this.requestForm.value);
    }
    if (this.deskForm.valid) {
      console.log(this.deskForm.value);
      this.formSubmitted = true;
    }
  }

  bays: Bay[] = [];
  selectedBay: Bay | null = null; // To keep track of the selected bay
  newBayName: string = '';


  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService
  ) {
    this.deskForm = this.formBuilder.group({
      deskId: ['', [Validators.required, Validators.minLength(3)]], // Example: Required and minimum length of 3
      location: ['', [Validators.required]],
      size: ['', [Validators.required]],
      amenities: [''],
    });

    // Define the configuration for each bay
    const bayConfigurations: BayConfiguration[] = [
      { name: 'IRIN Bay', seats: 56 },
      { name: 'RAMIS Bay', seats: 30 },
      { name: 'BridgeStone Bay', seats: 20 },
      { name: 'Testing Bay', seats: 35 },
      { name: 'SAP Bay', seats: 40 },
      { name: 'Java Bay', seats: 42 },
      { name: 'DotNet Bay', seats: 28 },
      { name: 'Singtel Bay', seats: 46 },
      // Add more bay configurations as needed
    ];

    this.bays = bayConfigurations.map((config) => ({
      name: config.name,
      seats: Array.from({ length: config.seats }, (_, index) => ({
        number: index + 1,
        blocked: Math.random() < 0.5, // Simulate blocked seats randomly
      })),
      showSeats: false, // Initially, seats are hidden
    }));

    // bayConfigurations.forEach((config) => {
    //   const bay: Bay = {
    //     name: config.name,
    //     seats: [],
    //     showSeats: false
    //   };

    //   for (let seatNumber = 1; seatNumber <= config.seats; seatNumber++) {
    //     const seat: Seat = {
    //       number: seatNumber,
    //       blocked: Math.random() < 0.5, // Simulate blocked seats randomly
    //     };
    //     bay.seats.push(seat);
    //   }

    //   this.bays.push(bay);
    // });
  }
  // Inside your component class
  toggleSeatContainer(bay: any) {
    bay.showSeats = !bay.showSeats;
    const container = document.getElementById(bay.name);
    if (container?.style.getPropertyValue('display') == 'none') {
      // this.toastr.success('Mobile Purchased - ');
      this.toastr.success(bay.name, 'Success');
      container?.style.setProperty('display', 'block');
    } else {
      container?.style.setProperty('display', 'none');
    }
  }

  toggleSeat(seat: Seat): void {
    seat.blocked = !seat.blocked; // Toggle seat status (blocked/available)
  }



  // Function to add a new bay
addBay() {
  const newBayName = `New Bay ${this.bays.length + 1}`;
  const newBaySeats = 6; // You can adjust the number of seats as needed
  const newBay: Bay = {
    name: newBayName,
    seats: Array.from({ length: newBaySeats }, (_, index) => ({
      number: index + 1,
      blocked: false, // Initially, seats are not blocked
    })),
    showSeats: false, // Initially, seats are hidden
  };

  this.bays.push(newBay);
}

// addBay() {
//   if (this.newBayName.trim() === '') {
//     // Don't add a new bay if the name is empty
//     return;
//   }

//   const newBay: Bay = {
//     name: this.newBayName,
//     seats: [], // Initialize seats as needed
//     showSeats: false,
//   };

//   this.bays.push(newBay);
//   this.newBayName = ''; // Clear the input field after adding the bay
// }


// Function to delete the last bay
deleteBay() {
  if (this.bays.length > 0) {
    this.bays.pop();
  }
}

}

interface Bay {
  name: string;
  seats: Seat[];
  showSeats: boolean; // Add the 'showSeats' property
}

interface Seat {
  number: number;
  blocked: boolean;
}

interface BayConfiguration {
  name: string;
  seats: number;
}
function addBay() {
  throw new Error('Function not implemented.');
}
