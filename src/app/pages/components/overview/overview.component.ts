import { Component } from '@angular/core';


interface Highlight{
  /** Title of the thing to be highlighted */ 
  title: string;
  /** Quirky blurb */
  subtitle: string;
  /** Description of the highlight and what it means */
  description: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  highlights: Highlight[] = [
    {
      title: 'Systems-Level Programming',
      subtitle: 'But can it go faster?',
      description: 'I can make high-speed low-latency applications using multiple combinations of non-locking data structures to ensure your software does what you need, when you need it.'
    },
    {
      title: 'Fullstack Development',
      subtitle: 'My bread-and-butter.',
      description: 
      'I am able to develop fullstack applications with ease using any combination of languages and frameworks to make scaleable applications for any purpose. If you have a vision of what you want, I have a vision of how to make it.'
    },
    {
      title: 'CD/CI Intgration',
      subtitle: 'Making others happy makes me happy.',
      description: 'CD/CI pipelines with different systems such as gihub, gitlab and jenkins are a great way to help your team focus on writing code without worrying about manually deploying code to the cloud, or breaking existing deployments.'
    },
    {
      title: 'Cross-Platform Development',
      subtitle: 'No-one gets left behind.',
      description: 'Supporting a variety of platforms is essential in this day and age. I am able to create applications that work seamlessly across mobile and desktop platforms with ease. Say goodbye to separate codebases for IOS and Android.'
    }
  ];
}
