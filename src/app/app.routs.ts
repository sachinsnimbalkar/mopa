import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { SupportUsComponent } from './support-us/support-us.component';
import { VisitComponent } from './visit/visit.component';
import { ShopComponent } from './shop/shop.component';
import { MemberAreaComponent } from './member-area/member-area.component';
import { FacilitiesComponent } from './facilities/facilities.component';
export const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
   // {path: '', component: HomeComponent }
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: 'events', component: EventsComponent },
    { path: 'support', component: SupportUsComponent }, 
    { path: 'visit', component: VisitComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'member', component: MemberAreaComponent },
    { path: 'facilities', component: FacilitiesComponent },
  ];
