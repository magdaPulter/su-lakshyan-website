import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'projects', component: ProjectPageComponent },
];
