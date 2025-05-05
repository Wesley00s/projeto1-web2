import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../../core/model/course.model';

@Component({
  selector: 'app-card-course',
  standalone: true,
  imports: [ ],
  templateUrl: 'card-course.component.html',
  styleUrl: 'card-course.component.scss'
})
export class CardCourseComponent  {
  constructor(private router : Router) {}
  @Input() course!: Course;

  navigateToDetailsCourse() {  
    this.router.navigate(['/details-course', this.course.idCourse])
  }
}
