import { Component } from '@angular/core';
import { ReadMoreBtnComponent } from '../read-more-btn/read-more-btn.component';

@Component({
  selector: 'app-home-about',
  standalone: true,
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.scss',
  imports: [ReadMoreBtnComponent],
})
export class HomeAboutComponent {}
