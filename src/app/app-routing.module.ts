import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectDetailComponent} from "./pages/project-detail/project-detail.component";
import {ProjectsComponent} from "./pages/projects/projects.component";

const routes: Routes = [
  { path: '', component: ProjectsComponent, data: { animation: 'Home' } },
  { path: 'projects/:id', component: ProjectDetailComponent, data: { animation: 'Projects' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
