import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule}from '@angular/router';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import{HeaderComponent} from './header.component';
import{FooterComponent} from './footer.component';
import{HomeComponent}from './views/home.component';
import{ProfileComponent}from './views/profile.component';
import {CarServices} from './service/carservices';
import { CardetailComponent } from './carDetail/car-detail.component';
import{CarviewsComponent}from'./views/car.component';
import{CarFormComponent}from'./views/car-form.component';
import {HttpModule} from '@angular/http';
import{InformationComponent}from'./views/information.component';
import{ContactComponent}from'./views/contact.component';
import{ContactsComponent}from'./views/contacts.component';
 

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,ProfileComponent,HomeComponent,
    CardetailComponent,CarviewsComponent,CarFormComponent,InformationComponent,ContactComponent,ContactsComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot([
    {
      path:'home',
      component:HomeComponent,
    }, {
      path:'profile',
      component:ProfileComponent,
    }, {
      path:'car',
      component:CarviewsComponent,
    }, {
      path:'carform',
      component:CarFormComponent,
    }, {
      path:'information',
      component:InformationComponent,
     }, {
      path:'',
      component:ContactComponent
    },{
      path:'contacts',
      component:ContactsComponent
    }
  
  
  ]),
    HttpModule
  ],
  providers: [CarServices ],
  bootstrap: [AppComponent]
})
export class AppModule { }
