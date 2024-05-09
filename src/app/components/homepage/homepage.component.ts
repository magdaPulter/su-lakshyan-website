import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ReadMoreBtnComponent } from '../read-more-btn/read-more-btn.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  imports: [NavbarComponent, ReadMoreBtnComponent],
})
export class HomepageComponent {}
