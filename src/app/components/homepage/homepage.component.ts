import { Component } from '@angular/core';
import { ReadMoreBtnComponent } from '../read-more-btn/read-more-btn.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  imports: [ReadMoreBtnComponent],
})
export class HomepageComponent {}
