import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carparent',
  templateUrl: './carparent.component.html',
  styleUrls: ['./carparent.component.css']
})
export class CarparentComponent implements OnInit {

  
  carData:any='';
  carsArray=[
  {   brand:'Sports Car',
      img:'https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-2118857__340.jpg',
      discription:'The most expensive Sports car is the Sports Car Continental GT 650 priced at Rs 2.65 Lakh.'
    },
    {   brand:'Ford',
      img:'https://cdn.pixabay.com/photo/2012/11/02/13/02/ford-63930__340.jpg',
      discription:'Image result for Ford Car descriptionwww.zigwheels.com Ford (the former Ford Sportmotorcycle AG) is an Austrian motorcycle and sports car manufacturer owned by KTM Industries AG and Indian manufacturer Bajaj Auto. It was formed in 1992 but traces its foundation to as early as 1934. ... KTM is known for its off-road motorcycles (enduro, motocross and supermoto).'
    },
    {   brand:'BMW',
      img:'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg',
      discription:'BMW Review BMW came up with this lightweight and classic offering, which revolutionised the Indian motorcycle industry. ... The biggest plus point for the RX100 was its performance. It had a 98 cc, 2 stroke engine. Being air cooled, it produced 11 BHP @ 7500 rpm and 10.39 NM @ 6500 rpm. Top Speed: 100 kmph Maximum Power: 11 BHP @ 7500 rpm  Maximum Torque: 10.39 NM @ 6500 rpm  Displacement: 98 cc'
    },
    {   brand:'Ferrari ',
      img:'https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467__340.jpg',
      discription:'The Ferrari 200 Ethanol gets an E100 200 cc single-cylinder engine which has a power output of 20.7 bhp at 8500 rpm and peak torque of 18.1 Nm at 7000 rpm. TVS claims a top speed of 129 kmph. ... Using Ethanol as a fuel reduces the emission of Carbon Monoxide by up to 35 per cent.'
    },
    {
    brand:'Aston Martin',
      img:'https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747__340.jpg',
      discription:'Aston Martin is equipped with an 180cc DTS-I, four-stroke, air-cooled engine. Its capable of a maximum power of 16.8 Bhp at 8500 rpm, and a maximum torque of 14.2 Nm at 6500 rpm. ... The gearbox that comes with the bike is five-speed, manual transmission, offering excellent engine performance.'
    }
  ]

  sendCarDetails(car){
    this.carData=car;
  }

  constructor() { }

  ngOnInit() {
  }

}
