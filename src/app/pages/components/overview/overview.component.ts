import { Component } from '@angular/core';


interface Highlight{
  /** Title of the thing to be highlighted */ 
  title: string;
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
      title: 'Fullstack Development',
      description: 
      'Fullstack development is my bread-and-butter. I am able to easily develop fullstack applications using a combination of common languages and frameworks like php, node.js, express.js, python, django, and golang.' +
      'On the front end, I have extensive experience developing applications using frameworks like Angluar.js, Angular2+, and React.' +
      'I am also experienced in using ORMs to access databases in a way that is both maintainable and ideal for team collaboration.'
    },
    {
      title: 'CD/CI',
      description: ''
    },
    {
      title: 'Cross-Platform Development',
      description: ''
    },
    {
      title: 'Systems-Level Programming',
      description: ''
    }
  ];
}
