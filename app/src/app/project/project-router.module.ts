import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectComponent } from './components/all-project/all-project.component';
import { ContactComponent } from './components/contact/contact.component';
import { CourseComponent } from './components/course/course.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { DmmOfferComponent } from './components/dmm-offer/dmm-offer.component';

const projectRoutes: Routes = [
  { path: 'all-project', component: AllProjectComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'course', component: CourseComponent },
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'dmm-offer', component: DmmOfferComponent }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
