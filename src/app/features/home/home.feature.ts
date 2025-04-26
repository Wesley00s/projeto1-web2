import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar-component/navbar.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.feature.html',
  styleUrl: './home.feature.scss',
})
export class HomeFeature {
  constructor(private router : Router) {}
    
  GoToLogin() {
    this.router.navigate(['/entrar'])
  }
}