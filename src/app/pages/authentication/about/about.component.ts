import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  data: any = [
    {
      id: 1,
      tabName: 'Design',
      tabIcon:
        'https://dzi0imrau2wxz.cloudfront.net/wp-content/uploads/2022/09/Experience-Design-hover.svg',
      contentHeading:
        'Engineering Design For The Future With Design Thinking Principle',
      description:
        'Build future-proof products and solutions that deliver exponential business value with human-centered, MVP-oriented, and iterative engineered designs.',
      image:
        'https://dzi0imrau2wxz.cloudfront.net/wp-content/uploads/2022/11/Design-practice-home-1.png',
    },
    {
      id: 2,
      tabName: 'Digital',
      tabIcon:
        'https://dzi0imrau2wxz.cloudfront.net/wp-content/uploads/2022/11/Digital-engineering-icon-color.svg',
      contentHeading:
        'Digital Engineering to Embrace Transformation and Enable Digital Continuity Across the Entire Product Lifecycle',
      description:
        'Adopt digital technologies to create insight-led human-centric experiences and robust digital strategy to enable digital continuity.',
      image:
        'https://dzi0imrau2wxz.cloudfront.net/wp-content/uploads/2022/11/Digital-Practice-Home-Overview.png',
    },
    {
      id: 3,
      tabName: 'Data',
      tabIcon:
        'https://dzi0imrau2wxz.cloudfront.net/wp-content/uploads/2022/09/Data-Engineering-hover.svg',
      contentHeading:
        'Engineer, Analyze and Visualize Data to Drive Innovation',
      description:
        'Harness the power of data with custom data strategy, DataOps architecture, and actionable insights derived from predictive modelling powered data analytics.',
      image:
        'https://dzi0imrau2wxz.cloudfront.net/wp-content/uploads/2022/11/Data-practice-home.png',
    },
    {
      id: 4,
      tabName: 'Ai',
      tabIcon:
        'https://dzi0imrau2wxz.cloudfront.net/wp-content/uploads/2022/09/AI-Services-hover.svg',
      contentHeading:
        'Adopt New Age AI Technologies to Embrace Cognitive Transformations',
      description:
        'Integrate cognitive capabilities across the enterprise to drive innovation, scale business value and create new business opportunities.',
      image:
        'https://dzi0imrau2wxz.cloudfront.net/wp-content/uploads/2022/11/AI-practice-home.png',
    },
  ];
}
