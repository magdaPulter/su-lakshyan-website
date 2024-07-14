import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root',
})
export class CarouselServiceService {
  getImage(): Image[] {
    return [
      {
        name: 'leaf.png',
        alt: 'A bowl made from leaf.',
        id: '1',
      },
      {
        name: 'plastic.png',
        alt: '',
        id: '2',
      },
      {
        name: 'woman-pics-up-trash.png',
        alt: '',
        id: '3',
      },
      {
        name: 'underTheRoof.png',
        alt: '',
        id: '4',
      },
      {
        name: 'woman-sewing.png',
        alt: 'A woman sewing with a sewing machine in a workshop.',
        id: '5',
      },
      {
        name: 'material-measuring.png',
        alt: 'Group of women learning the sewing process, working together at a table with fabrics and sewing tools.',
        id: '6',
      },
    ];
  }
}
