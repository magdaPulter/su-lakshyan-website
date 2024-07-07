import {
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { ProjectImagesComponent } from '../project-images/project-images.component';
import { ProjectServiceService } from '../../services/project-service.service';
import { ProjectModel } from '../../models/project-model.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, combineLatest, map, of, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.scss',
  imports: [ProjectImagesComponent, CommonModule, RouterLink],
})
export class ProjectDetailPageComponent {
  _projectServiceService = inject(ProjectServiceService);
  _activatedRoute = inject(ActivatedRoute);

  projects: ProjectModel[] = this._projectServiceService.projects();

  projects$: Observable<ProjectModel[]> = of(this.projects);
  projectDetail$: Observable<ProjectModel | undefined> = combineLatest([
    this.projects$,
    this._activatedRoute.params,
  ]).pipe(
    map(([projects, params]) => {
      return projects.find((project) => project.id === params['id']);
    })
  );

  // constructor() {
  //   this.projectDetail$.subscribe((v) => console.log(v));
  // }
}
