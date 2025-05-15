import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [RouterModule],
  templateUrl: 'comment.component.html',
  styleUrl: 'comment.component.scss'
})
export class CommentComponent  {
  constructor() {}
  @Input() comment!: any;
}
