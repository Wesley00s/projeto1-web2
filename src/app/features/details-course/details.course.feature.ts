import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar-component/navbar.component';
import { FooterComponent } from '../../shared/components/footer-component/footer.component';
import { CourseService } from '../../core/services/course.service';
import { Course } from '../../core/model/course.model';

@Component({
  selector: 'app-details-course',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './details.course.feature.html',
  styleUrls: ['./details.course.feature.scss'],
})
export class DetailsCourse implements OnInit {
  course!: Course;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const idCourse = Number(params.get('idCourse'));
      const foundCourse = this.courseService.getCourseById(idCourse);
      if (foundCourse) {
        this.course = foundCourse;
      }
    });
  }
  
  GoToLogin() {
    this.router.navigate(['/entrar']);
  }
}
