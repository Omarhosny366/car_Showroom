import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

    copyrightYear: number = 2023;
    companyName: string = 'Prime Wheels';
    mobileNumber: string = '+1 (123) 456-7890';
    emailAddress: string = 'info@Prime-wheels.com';
  
  
}
