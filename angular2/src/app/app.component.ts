import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BmwComponent } from './bmw/bmw.component';
import { FooterComponent } from './footer/footer.component';
import { WheelsComponent } from './wheels/wheels.component';
import { LoginComponent } from './login/login.component';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, BmwComponent, FooterComponent, WheelsComponent,LoginComponent
  , RouterOutlet, RouterLink, RouterLinkActive,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent  {
  
  logoImagePath='assets/images/prime.png'
  title = 'angular2';
  
}
