import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import{HttpClientModule} from '@angular/common/http';
import { ViewCartComponent } from './view-cart/view-cart.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewProductsComponent,
    ViewCartComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
