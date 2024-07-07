import { Component } from '@angular/core';
import { ReadMoreBtnComponent } from '../read-more-btn/read-more-btn.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-create',
  standalone: true,
  templateUrl: './home-create.component.html',
  styleUrl: './home-create.component.scss',
  imports: [ReadMoreBtnComponent, RouterLink],
})
export class HomeCreateComponent {}
