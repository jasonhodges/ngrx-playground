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

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PersonsModule,
    StoreModule.forRoot({ persons: PersonReducer.reducer }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Playground',
      maxAge: 25,
    }),
    EffectsModule.forRoot([])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
