import { Component } from '@angular/core';
import { ReadMoreBtnComponent } from '../read-more-btn/read-more-btn.component';

@Component({
  selector: 'app-home-projects',
  standalone: true,
  templateUrl: './home-projects.component.html',
  styleUrl: './home-projects.component.scss',
  imports: [ReadMoreBtnComponent],
})
export class HomeProjectsComponent {}
