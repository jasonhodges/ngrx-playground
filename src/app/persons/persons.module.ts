import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './pages/persons/persons.component';
import { PersonComponent } from './pages/person/person.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PersonReducer } from './shared/store'
import { PersonEffects } from './shared/store/person.effects';
import { PersonsRoutingModule } from './persons-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('personState', PersonReducer.reducer),
    EffectsModule.forFeature([PersonEffects]),
    PersonsRoutingModule
  ],
  declarations: [PersonsComponent, PersonComponent],
  exports: [PersonsComponent]
})
export class PersonsModule { }