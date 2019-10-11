import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventsComponent } from '@ngrx-playground/events/containers/events/events.component';
import { EventsRoutingModule } from '@ngrx-playground/events/events-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  declarations: [EventsComponent]
})
export class EventsModule { }
