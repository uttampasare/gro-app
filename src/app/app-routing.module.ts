import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginActivate } from './services/login.activate';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ItemComponent } from './components/item/item.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';


const routes: Routes = [
  {
    path:'', 
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'categories',
    component : CategoriesComponent
  },
  {
    path:'items/:category',
    component:ItemComponent
  },
  {
    path:'view-cart',
    component:CartComponent
  },
  {
    path:'payment-details',
    component:PaymentDetailsComponent,
    canActivate:[LoginActivate]
  },
  {
    path:'receipt',
    component:ReceiptComponent,
    canActivate:[LoginActivate]
  },
  {
    path:'registration-form',
    component:RegistrationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
