import { Component } from '@angular/core';
import { ReadMoreBtnComponent } from '../read-more-btn/read-more-btn.component';
import { HomeAboutComponent } from '../home-about/home-about.component';
import { HomeCreateComponent } from '../home-create/home-create.component';
import { HomeMottoComponent } from '../home-motto/home-motto.component';
import { HomeEstablishmentComponent } from '../home-establishment/home-establishment.component';

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
    HomeEstablishmentComponent,
  ],
})
export class HomepageComponent {}
