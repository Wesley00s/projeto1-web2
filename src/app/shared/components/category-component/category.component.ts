import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../../core/model/category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: 'category.component.html',
  styleUrl: 'category.component.scss'
})
export class CategoryComponent  {
  constructor(private router : Router) {}
  @Input() category!: Category;
  @Input() idCategory!: number;
  @Output() categoryClicked = new EventEmitter<number>()

  navigateToListCourses(idCategory : number) {
    this.router.navigate(['/list-courses', idCategory])
  }
}


