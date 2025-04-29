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
      description: ['Designed a sleek and responsive portfolio website showcasing my projects, skills, and professional journey. ',
          'Built with Angular and styled for a clean, modern user experience.'],
      image: 'assets/projects/portfolio-image.png',
      tags: ['HTML', 'CSS', 'Angular', 'Typescript']
    },
    {
      title: 'Fighting Online Abuse using Machine Learning',
      description: 'Built a multi-label classification model to detect various toxic behaviors (e.g., threats, identity-based attacks) in online platforms',
      image: 'assets/projects/mlproject.png',
      tags: ['Python', 'Deep Learning', 'Machine Learning']
    }
  ];
  
}
