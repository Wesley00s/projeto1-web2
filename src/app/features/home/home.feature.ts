import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Router } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar-component/navbar.component';
import { FooterComponent } from '../../shared/components/footer-component/footer.component';
import { CardCourseComponent } from '../../shared/components/card-course-component/card-course.component';
import { CategoryComponent } from '../../shared/components/category-component/category.component';
import { CommentComponent } from '../../shared/components/comment-component/comment.component';
import { CourseService } from '../../core/services/course.service';
import { CategoryService } from '../../core/services/category.service';
import { CommentService } from '../../core/services/comment.service';


@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, CardCourseComponent, CategoryComponent, CommentComponent],
  templateUrl: './home.feature.html',
  styleUrls: ['./home.feature.scss'],
})
export class HomeFeature {
  courses: any[] = [];
  categories: any[] = [];
  comments: any[] = [];

  constructor(private router : Router, 
    private categoryService : CategoryService,
    private courseService : CourseService,
    private commentService : CommentService) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.courses = this.courseService.getCourses();
    this.comments = this.commentService.getComments()
  }
    
  GoToLogin() {
    this.router.navigate(['/entrar'])
  }
}