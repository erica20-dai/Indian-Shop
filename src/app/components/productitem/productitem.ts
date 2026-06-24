import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productitem',
  imports: [],
  templateUrl: './productitem.html',
  styleUrl: './productitem.css',
})
export class Productitem {
  @Input() product?: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}
