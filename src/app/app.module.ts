import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SliderModule } from 'angular-image-slider';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  
import { routes } from './app.routs';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { SupportUsComponent } from './support-us/support-us.component';
import { VisitComponent } from './visit/visit.component';
import { ShopComponent } from './shop/shop.component';
import { MemberAreaComponent } from './member-area/member-area.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { HttpModule } from '@angular/http';
//import { SliderModule } from '../app//Model/slider.model';
//import { EventsModule } from '../app/Model/events.model'
// const appRoutes: Routes = [
//   { path: 'About', component: AboutComponent },

// ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    SupportUsComponent,
    VisitComponent,
    ShopComponent,
    MemberAreaComponent,
    FacilitiesComponent,
    AboutComponent,
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    SliderModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
