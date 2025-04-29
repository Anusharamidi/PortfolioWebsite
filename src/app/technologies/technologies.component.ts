import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-technologies',
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

  technologies = [
    { name: 'C# .NET', logo: 'assets/tech-stack/csharp.png' },
    { name: '.NET', logo: 'assets/tech-stack/dotnet.png' },
    { name: 'Angular', logo: 'assets/tech-stack/angular.png' },
    { name: 'Java', logo: 'assets/tech-stack/java.png' },
    { name: 'Springboot', logo: 'assets/tech-stack/springboot.png' },
    { name: 'Python', logo: 'assets/tech-stack/python.png' },
    { name: 'Typescript', logo: 'assets/tech-stack/typescript.png' },
    { name: 'SQL Server', logo: 'assets/tech-stack/sql.png' },
    { name: 'Azure Devops', logo: 'assets/tech-stack/azure.png' },
    { name: 'CI/CD', logo: 'assets/tech-stack/devops.png' },
    { name: 'Jira', logo: 'assets/tech-stack/jira.png' },
    { name: 'Git', logo: 'assets/tech-stack/git.png' },
  ];
  
}
