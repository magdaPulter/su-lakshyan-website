import { Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { DonatePageComponent } from './components/donate-page/donate-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProjectDetailPageComponent } from './components/project-detail-page/project-detail-page.component';
import { NepaliPageComponent } from './components/nepali-page/nepali-page.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'projects', component: ProjectPageComponent },
  { path: 'donate', component: DonatePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'projects/:id', component: ProjectDetailPageComponent },
  { path: 'nepali', component: NepaliPageComponent },
];
