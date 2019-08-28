import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginActivate } from './services/login.activate';
import { CategoriesComponent } from './components/categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';
import { ItemComponent } from './components/item/item.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { PlusMinusComponent } from './components/custom-controls/plus-minus/plus-minus.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './state-management/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    CategoriesComponent,
    ItemComponent,
    PaymentDetailsComponent,
    ReceiptComponent,
    PlusMinusComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot({items: cartReducer})
  ],
  providers: [
    LoginActivate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
