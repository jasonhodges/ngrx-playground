import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@ngrx-playground/app-routing.module';
import { AppComponent } from '@ngrx-playground/app.component';
import { CoreModule } from '@ngrx-playground/core/core.module';
import { EventsModule } from '@ngrx-playground/events/events.module';
import { PersonsModule } from '@ngrx-playground/persons/persons.module';
import { reducers } from '@ngrx-playground/store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PersonsModule,
    EventsModule,
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot({}),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: false,
        strictActionSerializability: false,
      },
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Playground',
      maxAge: 25,
    }),
    EffectsModule.forRoot([]),
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
