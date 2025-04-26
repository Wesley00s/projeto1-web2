import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Router } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar-component/navbar.component';
import { FooterComponent } from '../../shared/components/footer-component/footer.component';
import { CardCourseComponent } from '../../shared/components/card-course-component/card-course.component';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, CardCourseComponent],
  templateUrl: './home.feature.html',
  styleUrls: ['./home.feature.scss'],
})
export class HomeFeature {
  courses: any[] = [];

  constructor(private router : Router, private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }
    
  GoToLogin() {
    this.router.navigate(['/entrar'])
  }
}