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
        title: 'Life Skills*',
        content:
          '*By enrolling in one of the main projects led by Su Lakshyan (Eco Friendly Bag Production, Recycling Plastics and Production of Materials or Handcrafting Traditional Dhaka Products ), participants also benefit from general life skills training. By joining us, trainees can enhance their personal and professional development through comprehensive six-day life skills sessions. These sessions are designed to equip them with essential abilities to navigate everyday challenges and achieve their personal and professional goals. During the course participants learn and practice vital daily life skills, including: Effective communication: mastering the art of expressing themselves clearly and listening actively. Problem solving: developing strategies to identify issues and implement solutions. Critical thinking: enhancing their ability to analyze various situations and make informed decisions. Decision making: learning to make choices confidently and responsibly. Interpersonal skills: improving human interactions and building stronger relationships. Stress management: discovering techniques to manage stress and maintain well-being.',
        id: '6',
      },
      {
        date: '12.02.2024',
        title: 'Computer Training*',
        content:
          '*By enrolling in one of the main projects led by Su Lakshyan (Eco Friendly Bag Production, Recycling Plastics and Production of Materials or Handcrafting Traditional Dhaka Products ), participants also benefit from computer training. Our 26-day computer training program is designed to equip participants with the skills needed in the modern workplace. Trainees have the opportunity to learn basic computer skills, including professional emailing. They gain hands-on experience in using various computer applications and tools. Training also includes drafting clear and concise emails messages for professional purposes. We coach women in job application strategies. At the same time, they learn market research techniques to sell their products. This training enhances computer literacy and boosts professional capabilities in the digital environment, therefore contributing to stopping the poverty cycle.',
        id: '7',
      },
      {
        date: '12.02.2024',
        title: 'English Courses*',
        content:
          'Our English classes help our Trainees effectively market their products, such as eco-friendly bags, by improving their communication skills. During the 26 day course, female students learn to communicate in English to a degree that will allow them to effectively communicate.  This course is designed to increase sales skills and confidence in communicating with international clients. Therefore, our classes help our participants effectively sell their products. We encourage all Nepali women in need of support in this area to join us to improve their language skills and increase the reach of their business. By introducing this initiative, we also contribute to breaking the cycle of poverty.',
        id: '8',
      },
      {
        date: '12.02.2024',
        title: 'Handcrafting Traditional Dhaka Products',
        content: '...',
        id: '9',
      },
      {
        date: '12.02.2024',
        title: 'Recycling Plastics and Production of Materials',
        content:
          'With this project, we aim to address plastic waste by converting it into valuable, usable materials. This initiative involves collecting plastic waste, processing it through recycling methods, and producing various products that can be reintroduced into the market. These can include items for everyday use, as well as those that fulfill decorative functions in homes or hotels. For example, flower pots, trays and others. The project combines environmental stewardship with innovative manufacturing techniques to create a sustainable cycle for plastic materials. The most important goals of the project are: Decrease the amount of plastic waste in landfills and the environment. Promote recycling by engaging the community in plastic recycling programs. Develop innovative products from recycled plastics to demonstrate the potential of recycled materials. Increase economic opportunities by creating jobs and enabling growth through the recycling and production process.',
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
