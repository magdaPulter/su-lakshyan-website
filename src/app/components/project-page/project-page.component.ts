import { Component, DoCheck, WritableSignal, signal } from '@angular/core';
import { ProjectModel } from '../../models/project-model.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent implements DoCheck {
  readonly projects: ProjectModel[] = [
    {
      date: '12.02.2024',
      title: 'English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '1',
    },
    {
      date: '12.02.2024',
      title: 'English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '2',
    },
    {
      date: '12.02.2024',
      title: 'English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '3',
    },
    {
      date: '12.02.2024',
      title: 'English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '4',
    },
    {
      date: '12.02.2024',
      title: 'English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '5',
    },
    {
      date: '12.02.2024',
      title: 'English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '6',
    },
    {
      date: '12.02.2024',
      title: 'English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '7',
    },
    {
      date: '12.02.2024',
      title: 'English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '8',
    },
    {
      date: '12.02.2024',
      title: 'English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '9',
    },
    {
      date: '12.02.2024',
      title: 'English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '10',
    },
    {
      date: '12.02.2024',
      title: 'English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '11',
    },
  ];

  count: WritableSignal<number> = signal(2);
  displayedProjects: WritableSignal<ProjectModel[]> = signal(this.projects);
  isButtonActive: WritableSignal<boolean> = signal(true);

  ngDoCheck(): void {
    this.displayedProjects.set(this.projects.slice(0, this.count()));
    if (this.displayedProjects().length === this.projects.length) {
      this.isButtonActive.set(false);
    }
  }
  onLoadMore() {
    this.count.update((value) => value + 2);
  }
}
