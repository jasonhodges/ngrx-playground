import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { PersonsModule } from './persons/persons.module';
import { PersonReducer } from './persons/shared/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { EventsModule } from './events/events.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Playground',
      maxAge: 25,
    }),
    EffectsModule.forRoot([]),
    PersonsModule,
    EventsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
// StoreModule.forRoot({ persons: PersonReducer.reducer }),