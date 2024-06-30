import {
  Component,
  DoCheck,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { ProjectModel } from '../../models/project-model.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
  readonly projects: ProjectModel[] = [
    {
      date: '12.02.2024',
      title: '1English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '1',
    },
    {
      date: '12.02.2024',
      title: '2English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '2',
    },
    {
      date: '12.02.2024',
      title: '3English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '3',
    },
    {
      date: '12.02.2024',
      title: '4English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '4',
    },
    {
      date: '12.02.2024',
      title: '5English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '5',
    },
    {
      date: '12.02.2024',
      title: '6English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '6',
    },
    {
      date: '12.02.2024',
      title: '7English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '7',
    },
    {
      date: '12.02.2024',
      title: '8English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '8',
    },
    {
      date: '12.02.2024',
      title: '9English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '9',
    },
    {
      date: '12.02.2024',
      title: '10English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '10',
    },
    {
      date: '12.02.2024',
      title: '11English educations workshops',
      content:
        'Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English language. Goal: 90% of participants demonstrate improved proficiency in basic computer skills and English langua',
      id: '11',
    },
  ].reverse();

  count: WritableSignal<number> = signal(2);
  displayedProjects = computed(() => this.projects.slice(0, this.count()));
  isButtonActive = computed(
    () => this.displayedProjects().length !== this.projects.length
  );

  onLoadMore() {
    this.count.update((value) => value + 2);
  }
}
