import { Component, signal } from '@angular/core';
import { ProjectModel } from '../../models/project-model.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
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
    // {
    //   date: '12.02.2024',
    //   title: 'English educations workshops',
    //   content:
    //     'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
    //   id: '3',
    // },
    // {
    //   date: '12.02.2024',
    //   title: 'English educations workshops',
    //   content:
    //     'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
    //   id: '4',
    // },
    // {
    //   date: '12.02.2024',
    //   title: 'English educations workshops',
    //   content:
    //     'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
    //   id: '3',
    // },
    // {
    //   date: '12.02.2024',
    //   title: 'English educations workshops',
    //   content:
    //     'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
    //   id: '4',
    // },
    // {
    //   date: '12.02.2024',
    //   title: 'English educations workshops',
    //   content:
    //     'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
    //   id: '4',
    // },
    // {
    //   date: '12.02.2024',
    //   title: 'English educations workshops',
    //   content:
    //     'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
    //   id: '4',
    // },
    // {
    //   date: '12.02.2024',
    //   title: 'English educations workshops',
    //   content:
    //     'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
    //   id: '4',
    // },
  ];
  readonly displayedProjects: ProjectModel[] = this.projects;

  onLoadMore() {}
}
