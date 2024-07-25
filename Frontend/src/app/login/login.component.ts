import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.form.valid) {
      const userData = {
        email: this.form.value.email,
        password: this.form.value.password,
      };

      axios.post('http://localhost:3000/login', userData)
        .then((response) => {
          console.log(response);
          // If you want to navigate after successful login
          this.router.navigate(['/homepage']);
        })
        .catch((error) => {
          console.error('Error logging in:', error);
        });
    }
  }
}

export const routes: Routes = [
  { path: 'homepage', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
];
