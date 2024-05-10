import { Component } from '@angular/core';
import { ReadMoreBtnComponent } from '../read-more-btn/read-more-btn.component';
import { HomeAboutComponent } from '../home-about/home-about.component';
import { HomeCreateComponent } from '../home-create/home-create.component';
import { HomeMottoComponent } from '../home-motto/home-motto.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  imports: [
    ReadMoreBtnComponent,
    HomeAboutComponent,
    HomeCreateComponent,
    HomeMottoComponent,
  ],
})
export class HomepageComponent {}
