import { Component } from "@angular/core";


interface Language {
    /** Name of the programming language */
    name: string;
    /** On a scale of 1 to 10, how high level is this language */
    level: number;
    /** Proficiency in the language on a scale of 1 to 10*/
    proficiency: number;
    /** Abilities in the language */
    abilities: string[];
}

interface Skill {
    type: 'library' | 'framework' | 'other';
    /** Name of the skill */
    name: string;
    /** Description of the usefullness of the skill */
    abilities: string[];
}

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

    a = '/';
    b = '-'

    languages: Language[] = [
        {
            name: 'Rust',
            level: 3,
            proficiency: 7,
            abilities: [
                'Can create reliable cross platform applications that are highly efficient and memory safe.',
                'Can create procedural macros to perform complex metaprogramming, simplifying the development process.'
            ]
        },
        {
            name: 'Typescript',
            level: 7,
            proficiency: 10,
            abilities: [
                'Can create responsive single page applications with Angular',
                'Can create node.js programs with express.js for web API\'s'
            ]
        },
        {
            name: 'Javascript',
            level: 7,
            proficiency: 10,
            abilities: [
                'Can create node.js programs with express.js for web API\'s',
                'Can maintain older SPA\'s made with angular.js or other pure js libraries'
            ]
        },
        {
            name: 'Python',
            level: 8,
            proficiency: 9,
            abilities: [
                'Can create reliable admin systems for managing server applications in django',
                'Can create utility libraries and scripts for performing common tasks',
            ]
        }
    ];

    skills: Skill[] = [
        {
            type: 'other',
            name: 'Docker',
            abilities: [
                'Able to create dockerfiles used in building container images.',
                'Can utilize multistage builds to ensure container images are as slim as possible for deployments.',
                'Know how to utilize Harbor to scan built images for vulnerabilities such as the Log4J vulnerability.'
            ]
        },
        {
            type: 'other',
            name: 'Kubernetes',
            abilities: [
                'Can create helmcharts to define how an application should scale in the cloud.',
                'Can use Rancher to manage kubernetes deployments.'
            ]
        },
        {
            type: 'other',
            name: 'CD/CI Integration',
            abilities: [
                'Able to set up continuous pipelines for testing.',
                'Can create security scanning and linting tasks to catch commmon vulnerabilities automatically.',
                'Able to set up automatic merge requests to update dependencies.',
                'Versatile with github, gitlab, jenkins and other CD solutions.'
            ]
        },
        {
            type: 'other',
            name: 'Linux',
            abilities: [
                'Know best practices for file permissions to ensure system is secure.',
                'Can use different package managers to install software for specific distributions.',
                'Able to create shell scripts for managing system resources.',
            ]
        },
    ];
}