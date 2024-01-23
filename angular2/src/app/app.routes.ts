import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BmwComponent } from './bmw/bmw.component';
import { WheelsComponent } from './wheels/wheels.component';
import { LoginComponent } from './login/login.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    
    // { path: './home/home.component', component: HomeComponent },
    { path: '', component: LoginComponent },
    { path: 'bmw', component: BmwComponent },
    { path: 'wheels', component: WheelsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'homepage', component: HomeComponent },
    { path: 'purschase', component: PurchaseComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'register', component: RegisterComponent },
  
];