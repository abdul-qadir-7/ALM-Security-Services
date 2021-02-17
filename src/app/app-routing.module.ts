import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ClientsComponent } from './clients/clients.component';
import { SurveillanceComponent } from './surveillance/surveillance.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'expertise',component:ExpertiseComponent,children:[{path:'surveillance',component:SurveillanceComponent}]},
  {path:'clients',component:ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
