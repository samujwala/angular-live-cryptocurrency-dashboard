import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {AddNewCryptoComponent} from './add-new-crypto/add-new-crypto.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'dashboard',component:DashboardComponent},
  {path:'addnew',component:AddNewCryptoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
