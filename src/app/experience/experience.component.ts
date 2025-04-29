import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience',
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      year: '2023 - 2024',
      title: 'Software Developer at ArcelorMittal Dofasco',
      description: [
        'Developed and maintained full-stack applications using Angular 17, C#/ASP.NET Core, and SQL Server to modernize internal systems and enhance performance.',
        'Improved application test coverage from 65% to 84%, increasing reliability and maintainability.',
        'Optimized database queries and refactored legacy code, resulting in faster load times and 30% improved app performance.',
        'Reduced incident resolution time by 50% by integrating monitoring tools like Splunk and Qualys and proactively addressing recurring issues.',
        'Designed UI components with Angular Material to improve accessibility and usability across platforms.',
        'Collaborated in Agile teams using Azure DevOps for sprint planning, task tracking, and CI/CD.'
      ]
    },
    {
      year: '2020 - 2022',
      title: 'Systems Engineer at Infosys',
      description: [
        'Resolved 95% of production incidents by identifying root causes and debugging Java Spring Boot microservices.',

'Increased backend system performance by 30% by optimizing Java code and reducing memory leaks.',

'Developed scalable and reusable RESTful APIs, improving integration with third-party systems and boosting development speed by 25%.',

'Led critical server migration and performed debugging to reduce downtime by 40%, improving service availability.',

'Wrote unit and integration tests using JUnit and Mockito, contributing to a more stable codebase.',

'Mentored junior team members and supported knowledge transfer sessions on Spring Boot and backend development best practices.',

      ]
    }
  ];
  
}
