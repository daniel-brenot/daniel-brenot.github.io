import { Component } from '@angular/core';

interface WorkExperience {
  /** Name of the employer */
  employer: string;
  /** Role at the company */
  jobTitle: string;
  /** List of tags about the job */
  tags: string[];
  /** Description of the work done at the job */
  description: string;
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
        jobTitle: 'Fullstack Software Developer',
        tags: [''],
        description: 'Led the work to modernize the existing technology stack by setting up CD/CI and Docker/Kubernetes',
        timeline: '2019-Present'
      },
      {
        employer: 'The Land Between',
        jobTitle: 'Fullstack Software Developer',
        tags: ['node.js', 'express.js', 'mongodb', 'mongoose', 'Angular', 'android', 'ios'],
        description: 'Made an android and ios app for reporting turtle sightings to researchers across Ontario.',
        timeline: '2018'
      },
      {
        employer: 'Georgian Bay Turtle Hospital',
        jobTitle: 'Fullstack Software Developer',
        tags: [],
        description: 'Created data collection software to aid in data collection for researchers in the field.',
        timeline: '2017'
      },
      {
        employer: 'Scales Nature Park',
        jobTitle: 'Fullstack Software Developer',
        tags: [],
        description: 'Created custom software to aid in the tracking of events booked at the nature park.',
        timeline: '2016'
      }
    ];
}
