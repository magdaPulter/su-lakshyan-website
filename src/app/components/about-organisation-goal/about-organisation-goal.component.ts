import { Component } from '@angular/core';
import { OrganizationGoal } from '../../models/organization-goal.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-organisation-goal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-organisation-goal.component.html',
  styleUrl: './about-organisation-goal.component.scss',
})
export class AboutOrganisationGoalComponent {
  readonly organizationGoals: OrganizationGoal[] = [
    {
      title: 'Economic Empowerment',
      content:
        '80% of program graduates secure sustainable employment or start their own businesses within one year',
      id: '1',
    },
    {
      title: 'Environmental Sustainability',
      content:
        'Achieve a 30% reduction in local plastic waste through eco-friendly bag production.',
      id: '2',
    },
    {
      title: 'Cultural Preservation',
      content:
        'Sustain the production of Nepali Dhaka-related goods, with a 50% increase in market demand',
      id: '3',
    },
    {
      title: ' Digital Inclusion',
      content:
        '90% of participants demonstrate improved proficiency in basic computer skills and English language',
      id: '4',
    },
    {
      title: 'Community Engagement',
      content:
        'Form partnerships with at least three local businesses and NGOs.',
      id: '5',
    },
    {
      title: 'Gender Equality and Empowerment',
      content:
        '70% of participants report increased agency and support for their aspirations.',
      id: '6',
    },
  ];
}
