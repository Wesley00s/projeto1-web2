import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'card-student',
  standalone: true,
  imports: [RouterModule],
  templateUrl: 'card-student.component.html',
  styleUrl: 'card-student.component.scss'
})
export class CardStudentComponent  {
  constructor() {}
}