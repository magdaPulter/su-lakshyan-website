import {
  Component,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ProjectModel } from '../../models/project-model.model';
import { CommonModule } from '@angular/common';
import { ShortPipe } from '../../pipes/short.pipe';
import { RouterLink } from '@angular/router';
import { ProjectImagesComponent } from '../project-images/project-images.component';
import { ProjectServiceService } from '../../services/project-service.service';

@Component({
  selector: 'app-project-page',
  standalone: true,
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  imports: [CommonModule, ShortPipe, RouterLink, ProjectImagesComponent],
})
export class ProjectPageComponent {
  _projectServiceService = inject(ProjectServiceService);
  readonly projects: ProjectModel[] = this._projectServiceService.projects();

  count: WritableSignal<number> = signal(2);
  displayedProjects = computed(() => this.projects.slice(0, this.count()));
  isButtonActive = computed(
    () => this.displayedProjects().length !== this.projects.length
  );

  onLoadMore() {
    this.count.update((value) => value + 2);
  }

  goToTheTop() {
    window.scrollTo(0, 0);
  }
}
