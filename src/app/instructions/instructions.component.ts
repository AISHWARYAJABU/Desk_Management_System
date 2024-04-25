import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {
  constructor(private router: Router) {}

  startExam() {
    // Placeholder for starting the exam logic
    console.log('Starting exam...');
    // Navigate to the exam page after starting the exam
    this.router.navigate(['/exam']);
  }
} 
