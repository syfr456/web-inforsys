import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PisiComponent } from './pisi/pisi.component';
import { SofiComponent } from './sofi/sofi.component';
import { CareerComponent } from './career/career.component'
import { CovidComponent } from './covid/covid.component'
import { TermsComponent } from './terms/terms.component'
import { PrivacyComponent } from './privacy/privacy.component'



const routes: Routes = [
  {
   path:'home',
   component: HomeComponent
  },
  {
    path:'sofi',
    component:SofiComponent
  },
  {
    path:'pisi',
    component:PisiComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'covid',
    component:CovidComponent
  },
  {
    path:'career',
    component:CareerComponent
  },
  {
    path:'privacy',
    component:PrivacyComponent
  },
  {
    path:'terms',
    component:TermsComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
