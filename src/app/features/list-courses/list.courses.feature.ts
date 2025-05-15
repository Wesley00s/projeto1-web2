import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar-component/navbar.component';
import { FooterComponent } from '../../shared/components/footer-component/footer.component';
import { CardCourseComponent } from '../../shared/components/card-course-component/card-course.component';
import { CourseService } from '../../core/services/course.service';
import { CategoryService } from '../../core/services/category.service';
import { Category } from '../../core/model/category.model';

@Component({
  selector: 'list-courses',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, CardCourseComponent],
  templateUrl: './list.courses.feature.html',
  styleUrls: ['./list.courses.feature.scss'],
})
export class ListCourses implements OnInit {
  category!: Category;
  courses: any[] = [];

  constructor(private router : Router, 
    private activatedRoute : ActivatedRoute,
    private categoryService : CategoryService,
    private courseService : CourseService) {}

  ngOnInit() {
    const idCategory = Number(this.activatedRoute.snapshot.paramMap.get('idCategory'));
    const foundCategory = this.categoryService.getCategoryById(idCategory);
    if (foundCategory) {
      this.category = foundCategory;
    }
    this.courses = this.courseService.getCoursesByCategory(idCategory);
  }
    
  GoToLogin() {
    this.router.navigate(['/entrar'])
  }
}