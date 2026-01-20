import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [MatCardModule, MatIconModule, CommonModule, MatDividerModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Portfolio Website',
      description: 'Designed a sleek and responsive portfolio website showcasing my projects, skills, and professional journey. Built with Angular and styled for a clean, modern user experience.',
      image: 'assets/projects/portfolio-image.png',
      tags: ['HTML', 'CSS', 'Angular', 'Typescript']
    },
    {
      title: 'Habit Tracker Web App',
      description: 'Developed a full-stack web application to help users create, track, and manage habits with daily/weekly logs. Includes features for adding, editing, and deleting habits, tracking habit completion, and filtering logs by habit.',
      image: 'assets/projects/habittracker.jpeg',
      tags: ['Full-Stack', 'ASP.NET Core', 'SQL Server', 'Entity Framework','Angular', 'TypeScript', 'REST API']
    }

  ];
  
}
