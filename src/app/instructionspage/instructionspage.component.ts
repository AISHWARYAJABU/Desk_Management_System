import { Component } from '@angular/core';

@Component({
  selector: 'app-instructionspage',
  templateUrl: './instructionspage.component.html',
  styleUrls: ['./instructionspage.component.css']
})
export class InstructionspageComponent {
  // Define the properties for your component here
  languages: string[] = ['English', 'Spanish', 'French', 'German']; // Add more languages as needed
  selectedLanguage: string = this.languages[0];
  isConfirmed: boolean = false;

  // Add any additional methods or logic required for the component
}
