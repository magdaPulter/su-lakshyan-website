import { Component } from '@angular/core';
import { ReadMoreBtnComponent } from '../read-more-btn/read-more-btn.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-projects',
  standalone: true,
  templateUrl: './home-projects.component.html',
  styleUrl: './home-projects.component.scss',
  imports: [ReadMoreBtnComponent, RouterLink],
})
export class HomeProjectsComponent {}
