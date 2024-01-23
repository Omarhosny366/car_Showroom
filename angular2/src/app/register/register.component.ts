import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import axios from 'axios'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      age: [0, Validators.required],
    });
  }

  registerUser() {
    if (this.form.valid) {
      const userData = {
        fullname: this.form.value.fullname,
        email: this.form.value.email,
        password: this.form.value.password,
        age: this.form.value.age,
      };

      axios.post('http://localhost:3000/register', userData)
        .then((response) => {
          console.log(response);
          // If you want to navigate after successful registration
          this.router.navigate(['/homepage']);
        })
        .catch((error) => {
          console.error('Error registering user:', error);
        });
    }
  }
}