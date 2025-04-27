import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-course',
  standalone: true,
  imports: [RouterModule],
  templateUrl: 'card-course.component.html',
  styleUrl: 'card-course.component.scss'
})
export class CardCourseComponent  {
  constructor() {}
  @Input() course!: any;
}
