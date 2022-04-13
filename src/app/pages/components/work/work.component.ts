import { Component } from '@angular/core';

interface WorkExperience {
  /** Name of the employer */
  employer: string;
  /** Role at the company */
  jobTitle: string;
  /** List of tags about the job */
  tags: string[];
  /** Description of the work done at the job */
  descriptions: string[];
  /** When the employment started and finished */
  timeline: string;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

    /** List of past work experiences to be formatted */
    workList: WorkExperience[] = [
      {
        employer: 'CANARIE',
        jobTitle: 'Full Stack Software Developer',
        tags: [''],
        descriptions: [
          'Used Docker and Kubernetes to modernize the tech stack with container technology',
          'Created CD/CI Pipelines on Gitlab and Jenkins to automatically lint and test code',
          'Developed Event-Based parsers in python for ingesting network infrastructure definitions in xml',
        ],
        timeline: 'Sept 2019 - Present'
      },
      {
        employer: 'The Land Between',
        jobTitle: 'Full Stack Software Developer',
        tags: ['node.js', 'express.js', 'mongodb', 'mongoose', 'Angular', 'android', 'ios'],
        descriptions: [
          'Used typescript and cordova to create a cross-platform app for reporting wildlife sightings in Ontario',
          'Developed serverside REST API\'s with express.js for user report submission',
          'Employed test driven development to deliver key features on time'
        ],
        timeline: 'Dec 2018 - Sept 2019'
      },
      {
        employer: 'Georgian Bay Turtle Hospital',
        jobTitle: 'Full Stack Software Developer',
        tags: [],
        descriptions: [
          'Developed data collection software to aid in data collection for researchers in the field.',
          'Used custom algorithms in javascript to search data by geolocation'
        ],
        timeline: 'May 2018 - August 2018'
      },
      {
        employer: 'Scales Nature Park',
        jobTitle: 'Full Stack Software Developer',
        tags: [],
        descriptions: [
          'Created custom software to aid in the tracking of events booked at the nature park.',
        ],
        timeline: 'May 2017 - August 2018'
      }
    ];
}
