import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project-model.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  constructor() {}
  projects(): ProjectModel[] {
    return [
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
        title: 'Eco Friendly Bag Production',
        content:
          'In this project, we focus on creating sustainable alternatives to plastic bags. Over a 2-month training period, Nepali women from Pokhara are taught how to produce different types of eco-friendly bags. After the training, the bags are market-ready, offering a viable, environmentally friendly option to reduce plastic waste. The main objectives of the project are: Reduce plastic waste and provide alternatives to single-use plastic bags to minimize environmental impact.Empower young women by equipping them with valuable skills and employment opportunities. Ensure sustainability by developing a range of durable, reusable, and eco-friendly bags. In this project, we produce the following bag types: tote bags, grocery and drawstring bags, messenger, beach or produce bags, backpacks, lunch bags as well as gift or wine bags. After the training, the bags are ready for sale and distribution, having met quality standards and undergone market testing. The project aims to tap into local and potentially international markets, promoting eco-friendly products while supporting local communities. Curriculum includes: Introduction to eco-friendly materials, Bag design and pattern making, Sewing and assembly techniques, Quality control and finishing, Marketing and sales strategies',
        id: '11',
      },
    ].reverse();
  }
}
