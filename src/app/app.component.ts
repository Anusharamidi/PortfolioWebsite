import { Component, ViewEncapsulation } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, AboutComponent, ProjectsComponent, ContactComponent, CommonModule, MatCardModule, 
    MatIconModule, TechnologiesComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  title = 'my-portfolio';
  currentTab: string = 'home';

  ngAfterViewInit() {
    // IntersectionObserver to detect which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.currentTab = entry.target.id;  // Update currentTab to the section in view
          }
        });
      },
      { threshold: 0.5 } // 50% of the section needs to be in view to update
    );

    // Observe each section with the 'section' class
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      observer.observe(section);
    });
  }
  
  scrollToSection(section: string) {
    this.currentTab = section; // update the active tab
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
