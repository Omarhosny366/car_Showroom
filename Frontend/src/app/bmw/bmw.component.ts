import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bmw',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./bmw.component.html',
  styleUrls: ['./bmw.component.css']
})
export class BmwComponent{

  cars = [
    
    {
      name: 'BMW',
      image: 'assets/images/bmwLogo.png',
      description: '  '
    },
    {
      name: '320i',
      image: 'assets/images/khara (1).jpg',
      description: 'The BMW 320i is powered by a 2.0-litre turbocharged four-cylinder engine producing 135kW of power and 300Nm of torque. It\'s mated with an eight-speed ZF torque converter automatic, and the 3er is rear-wheel drive. Price: 100,000$'
    },
    {
      name: '750i',
      image: 'assets/images/d.jpg',
      description: 'The BMW 750i gets a 4.4L twin-turbocharged V8 engine making 523 horsepower. An 8-speed automatic feeds the power to all four wheels. Price: 305,000$'
    },
    {
      name: 'XM',
      image: 'assets/images/peakpx.jpg',
      description: 'The BMW XM SUV is on an ambitious mission to target the pinnacles of performance and luxury simultaneously. Behind its overwrought snout lies a twin-turbocharged V-8 that\'s enhanced by a plug-in hybrid system. Price: 258,000$'
    },
    {
      name: 'X7',
      image: 'assets/images/x7.jpg',
      description: 'The BMW X7 is a full-sized luxury sport utility vehicle manufactured by BMW. It is BMW\'s largest and most expensive SUV in its line-up. The X7 was first announced by BMW in March 2014. Price: 265,000$'
    },
    {
      name: '7 series',
      image: 'assets/images/7 series.jpg',
      description: 'The BMW 7 Series is a full-size luxury sedan manufactured and marketed by the German automaker BMW since 1977. It is the successor to the BMW E3 "New Six" sedan and is now in its seventh generation. Price: 320,000$'
    },
    {
      name: 'i4',
      image: 'assets/images/i4.jpg',
      description: 'The BMW i4 is a battery electric compact executive car produced by BMW since 2021. It adopts a five-door liftback body style and is marketed as a four-door coupé. Price: 88,000$'
    },
  ];
  carsAudi = [
   
    {
      name: 'Audi',
      image: 'assets/images/AudiLogo.png',
      description: '  '
    },
    {
      
      name: 'A3',
      image: 'assets/images/A3.jpg',
      description: 'The Audi A3 is a compact executive car produced by the German automaker Audi. It is available as a sedan, five-door sportback, and cabriolet. Price: 90,000$'
    },
    {
      name: 'S5',
      image: 'assets/images/s5.jpg',
      description: 'The Audi A6 is an executive car made by the German automaker Audi. It is available in sedan and estate (wagon) body styles. Price: 240,000$'
    },
    {
      name: 'E-tron',
      image: 'assets/images/dddd.jpg',
      description: 'The Audi E-tron is a series of compact luxury crossover SUVs produced by the German luxury car manufacturer Audi. Price: 300,000$'
    },
    {
      name: 'Q7',
      image: 'assets/images/khara(2).jpg',
      description: 'The Audi Q7 is a full-size luxury crossover SUV made by the German manufacturer Audi. It is the flagship of the Audi SUV line. Price: 200,000$'
    },
    {
      name: 'R8',
      image: 'assets/images/R8.jpg',
      description: 'The Audi R8 is a mid-engine, 2-seater sports car, which uses Audi\'s trademark quattro permanent all-wheel drive system. Price: 390,000$'
    },
    {
      name: 'Rs7',
      image: 'assets/images/RS7.jpg',
      description: 'The Audi RS7 is a series of electric and hybrid electric vehicles made by Audi. It includes the e-tron SUV and the e-tron GT. Price: 310,000$'
    },
  ];

  carsPorsche  = [
   
    {
      name: 'Porsche',
      image: 'assets/images/PorscheLogo.png',
      description: '  '
    },
    {
      name: '911',
      image: 'assets/images/911.jpg',
      description: 'The Porsche 911 is a classic sports car that has been in production since 1963. It is known for its iconic design and high-performance capabilities. Price: 350,000$'
    },
    {
      name: 'Cayenne',
      image: 'assets/images/Cayenne.jpg',
      description: 'The Porsche cayenne is a mid-engine sports car that combines agility with precision. It offers a thrilling driving experience and dynamic handling. Price: 200,000$'
    },
    {
      name: 'Panamera',
      image: 'assets/images/Panamera E-Hybrid.jpg',
      description: 'The Porsche Panamera is a luxury sedan that blends performance and elegance. It features a spacious interior and powerful engine options. Price: 160,000$'
    },
    {
      name: 'Macan',
      image: 'assets/images/macan.jpg',
      description: 'The Porsche Macan is a compact luxury SUV that delivers a sporty driving experience. It combines versatility with Porsche\'s performance heritage. Price: 120,000$'
    },
    {
      name: 'Spyder',
      image: 'assets/images/spyder.jpg',
      description: 'The Porsche Spyder is a mid-size luxury crossover SUV. It offers a perfect balance of performance, comfort, and off-road capability. Price: 450,000$'
    },
    {
      name: '718 Boxster',
      image: 'assets/images/718 Boxster.jpg',
      description: 'The Porsche 718 Boxster is a luxury sedan. It showcases Porsche\'s commitment to electrification without compromising on performance. Price: 110,000$'
    },
  ];

// Add this to your component.ts file
carsMaserati= [
  
  {
    name: 'Maserati',
    image: 'assets/images/MaseratiLogo.png',
    description: '  '
  },
  {
    name: 'Ghibli',
    image: 'assets/images/Ghibli.jpg',
    description: 'The Maserati Ghibli is a luxury executive sedan that has been in production since 2013. It features a stylish design, powerful engines, and a comfortable interior. Price: 164,544$'
  },
  {
    name: 'MC20',
    image: 'assets/images/mc20.jpg',
    description: 'The Maserati mc20 is a mid-size luxury crossover SUV that combines elegance and performance. It was first introduced in 2016 and has become a key model in Maserati\'s lineup. Price: 450,000$'
  },
  {
    name: 'Maserati Coupé',
    image: 'assets/images/Maserati Coupé.jpg',
    description: 'The Maserati Maserati Coupé is a luxury four-door sedan that has been in production since 1963. It is known for its sophisticated design, powerful engines, and high-end features. Price: 193,733$'
  },
  {
    name: 'The GranCabrio',
    image: 'assets/images/The GranCabrio.jpg',
    description: 'The Maserati GranCabrio is a mid-engine sports car that marks Maserati\'s return to the world of racing. It features advanced technology, lightweight construction, and a focus on performance. Price: 200,999$'
  },
  {
    name: '3500 GT',
    image: 'assets/images/3500 GT.jpg',
    description: 'The Maserati 3500 GT is a grand tourer produced by the Italian manufacturer Maserati. It has a timeless design, powerful engines, and a luxurious interior, making it a classic in the GT segment. Price: 800,000$'
  },
  {
    name: 'Maserati A6G',
    image: 'assets/images/Maserati A6G.jpg',
    description: 'The Maserati A6G is a convertible version of the GranTurismo, offering open-top driving with the same blend of performance and luxury. It is designed for those who seek an exhilarating driving experience. Price: 1,000,999$'
  },
];


  
}
