import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './pages/persons/persons.component';

const personsRoutes: Routes = [
  { path: '', component: PersonsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(personsRoutes)
  ],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }