import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wheels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wheels.component.html',
  styleUrl: './wheels.component.css'
})
export class WheelsComponent {
  cars = [
    {
      logoSrc: 'assets/images/MLOGO.jpg',
      title: 'Maserati',
      description: 'Maserati founded in 1914, luxury car brand known for seamlessly blending performance and elegance in its high-end sports cars and luxury sedans.',
      models: ['Ghibli', 'MC20', '3500 GT', 'GranCabrio', 'Maserati CoupÃ©', 'A6G'],
    },
    {
      logoSrc: 'assets/images/AudiLogo.png',
      title: 'Audi',
      description: ' Audi is a German luxury car brand renowned for its sophisticated design. The iconic four rings symbolize Audi\'s merger of four founding companies.',
      models: ['RS7', 'R8', 'Q8-Etron', 'S5', 'A3', 'TT']
    },
    {
      logoSrc: 'assets/images/bmwLogo.png',
      title: 'BMW',
      description: 'BMW, a German luxury automaker established in 1916, BMW stands as a global leader in the luxury automotive market.',
      models: ['320i', '750i', 'XM', 'X7', '7 Series', 'i4']
    },
    {
      logoSrc: 'assets/images/PorscheLogo2.png',
      title: 'Porsche',
    description: 'Porsche, a German sports car manufacturer established in 1931, is renowned for its precision engineering and iconic sports car designs.',
    models: ['macan', '911', 'Porsche spyder', 'Panamera E-Hybrid', '718 Boxster', 'Cayenne']
  },
   
  ];
}
