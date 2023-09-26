import { Component } from '@angular/core';

@Component({
  selector: 'app-coupens',
  templateUrl: './coupens.component.html',
  styleUrls: ['./coupens.component.css']
})
export class CoupensComponent {

}



// import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-sidenav',
//   templateUrl: './sidenav.component.html',
//   styleUrls: ['./sidenav.component.css']
// })
// export class SidenavComponent {
// //    toggleBay(bayId: string): void {
// //     const bayContent = document.getElementById(bayId)?.getElementsByClassName("disk-container")[0] as HTMLElement | undefined;
// //     if (bayContent) {
// //         if (bayContent.style.display === "none" || !bayContent.style.display) {
// //             bayContent.style.display = "block";
// //         } else {
// //             bayContent.style.display = "none";
// //         }
// //     }
// // }
// public onOpenModal(): void {
//   console.log("openmodule")
//   const container = document.getElementById('page-content-wrapper');
//   const button = document.createElement('button');
//   button.type = 'button';
//   button.style.display = 'none';
//   button.setAttribute('data-bs-toggle', 'modal');
//   button.setAttribute('data-bs-target', '#staticBackdrop');
//   container?.appendChild(button);
//   button.click();
  
// }


// deskForm: any;
// reservationForm: any;
// requestForm: any;



// ngOnInit() {
//   this.deskForm = this.fb.group({
//     deskId: ['', Validators.required],
//     location: ['', Validators.required],
//     size: ['', Validators.required],
//     amenities: [''],
//     isAvailable: [false],
//     deskType: ['', Validators.required]
//   });
// }

// onSubmit() {
//   if (this.deskForm.valid) {
//     console.log(this.deskForm.value);

//     // You can send the form data to your server or perform other actions here
//   }
//   if (this.reservationForm.valid) {
//     console.log(this.reservationForm.value);
//     // You can send the form data to your server or perform other actions here
//   }
//  if (this.requestForm.valid) {
//   console.log(this.requestForm.value);
//   // You can send the form data to your server or perform other actions here
// }

// }


// bays: Bay[] = [];

// constructor(private fb: FormBuilder) {
//   // Define the configuration for each bay
//   const bayConfigurations: BayConfiguration[] = [
//     { name: 'IRIN Bay', seats: 56 },
//     { name: 'RAMIS Bay', seats: 30 },
//     { name: 'BridgeStone Bay', seats: 20 },
//     { name: 'Testing Bay', seats: 35 },
//     { name: 'SAP Bay', seats: 40 },
//     // Add more bay configurations as needed
//   ];

//   bayConfigurations.forEach((config) => {
//     const bay: Bay = {
//       name: config.name,
//       seats: []
//     };

//     for (let seatNumber = 1; seatNumber <= config.seats; seatNumber++) {
//       const seat: Seat = {
//         number: seatNumber,
//         blocked: Math.random() < 0.5 // Simulate blocked seats randomly
//       };
//       bay.seats.push(seat);
//     }

//     this.bays.push(bay);
//   });
// }

// toggleSeat(seat: Seat): void {
//   seat.blocked = !seat.blocked; // Toggle seat status (blocked/available)
// }
// }

// interface Bay {
// name: string;
// seats: Seat[];
// }

// interface Seat {
// number: number;
// blocked: boolean;
// }

// interface BayConfiguration {
// name: string;
// seats: number;
// }
