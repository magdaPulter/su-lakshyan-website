import { Component } from '@angular/core';
import { AboutAboutComponent } from '../about-about/about-about.component';
import { AboutOrganisationGoalComponent } from '../about-organisation-goal/about-organisation-goal.component';
import { AboutFounderComponent } from '../about-founder/about-founder.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  imports: [
    AboutAboutComponent,
    AboutOrganisationGoalComponent,
    AboutFounderComponent,
  ],
})
export class AboutPageComponent {}
