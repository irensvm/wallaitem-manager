import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ItemPageComponent } from './item-page/item-page.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "search/:searchTerm", component:HomeComponent},
  {path: "item/:title", component:ItemPageComponent},
  {path: "about", component:AboutComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
