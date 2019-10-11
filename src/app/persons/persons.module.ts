import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@ngrx-playground/core/material.module';
import { PersonComponent } from '@ngrx-playground/persons/pages/person/person.component';
import { PersonsComponent } from '@ngrx-playground/persons/pages/persons/persons.component';
import { PersonsRoutingModule } from '@ngrx-playground/persons/persons-routing.module';
import { PersonReducer } from '@ngrx-playground/persons/shared/store';
import { PersonEffects } from '@ngrx-playground/persons/shared/store/person.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('personState', PersonReducer.reducer),
    EffectsModule.forFeature([PersonEffects]),
    PersonsRoutingModule,
    MaterialModule
  ],
  declarations: [PersonsComponent, PersonComponent],
  exports: [PersonComponent]
})
export class PersonsModule { }
