import { Component } from '@angular/core';
import { ReadMoreBtnComponent } from '../read-more-btn/read-more-btn.component';
import { HomeAboutComponent } from '../home-about/home-about.component';
import { HomeCreateComponent } from '../home-create/home-create.component';
import { HomeMottoComponent } from '../home-motto/home-motto.component';
import { HomeEstablishmentComponent } from '../home-establishment/home-establishment.component';
import { HomeProjectsComponent } from '../home-projects/home-projects.component';
import { HomeEmpowerComponent } from '../home-empower/home-empower.component';

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
    HomeProjectsComponent,
    HomeEmpowerComponent,
  ],
})
export class HomepageComponent {}
