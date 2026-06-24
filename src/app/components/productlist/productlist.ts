import { Component } from '@angular/core';
import { Productitem } from '../productitem/productitem';

@Component({
  selector: 'app-productlist',
  imports: [Productitem],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {
  products = [
    {
      id: 1,
      name: 'Robe glamour',
      description: 'Friki produce',
      image: 'assets/images/product/indian1.jpg',
    },
    {
      id: 2,
      name: 'Robe vintage',
      description: 'Healthy organic produce',
      image: 'assets/images/product/indian2.jpg',
    },
     {
      id: 3,
      name: 'Robe night',
      description: 'bibal organic produce',
      image: 'assets/images/product/indian3.jpg',
    },
     {
      id: 4,
      name: 'Robe sari',
      description: 'Healthy organic produce',
      image: 'assets/images/product/indian4.jpg',
    },
     {
      id:5 ,
      name: 'Robe elegante',
      description: 'Healthy organic produce',
      image: 'assets/images/product/indian12.jpg',
    },
     {
      id: 6,
      name: 'Robe De Soiré',
      description: 'Healthy organic produce',
      image: 'assets/images/product/indian11.jpg',
    },
     {
      id: 7,
      name: 'robe jaune',
      description: 'jalila product',
      image: 'assets/images/product/indian7.jpg',
    },
     {
      id: 8,
      name: 'Ensemble gand',
      description: 'elegance product',
      image: 'assets/images/product/indian8.jpg',
    },
  ];
}
