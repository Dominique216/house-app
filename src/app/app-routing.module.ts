import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { OneHouseComponent } from './component/one-house/one-house.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'house/:id', component: OneHouseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
