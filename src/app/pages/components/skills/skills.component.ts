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
    description: string;
}

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
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
                'Can create node.js programs with express.js for web API\'s'
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
            description: 'Able to create dockerfiles used in building container images.'
        },
        {
            type: 'other',
            name: 'CI/CD',
            description: 'Able to set up continuous pipelines for testing, security scanning and linting of code in github, gitlab, jenkins or other git hosted solutions.'
        },
    ];
}