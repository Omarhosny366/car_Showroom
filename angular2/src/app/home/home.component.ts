import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmwComponent } from '../bmw/bmw.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BmwComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    showroomDescription = 'Established in Egypt in 2011, PrimeWheels is a leading car showroom renowned for its commitment to automotive excellence. Specializing in curated selections of high-quality vehicles, PrimeWheels provides a personalized and immersive experience for customers seeking sophistication and performance on the road. With a legacy of reliability and style.';
    
    BMWDescription = "BMW";
    none ='';
    noned='';
    
    AudiDescription = "Audi";
    
    PorscheDescription = "Porsche2";
    
    maseratiDescription = "Maserati";
    
    bmwimage = 'assets/images/bmwLogo.png';
    Audiimage = 'assets/images/AudiLogo.png';
    Porscheimage = 'assets/images/PorscheLogo.png';
    maseratiImage = 'assets/images/MLOGO.jpg';
}
