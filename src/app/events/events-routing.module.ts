import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';

const eventsRoutes: Routes = [
  { path: 'events', component: EventsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(eventsRoutes)
  ],
  exports: [RouterModule]
})
export class EventsRoutingModule { }