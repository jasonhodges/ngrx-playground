import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './pages/persons/persons.component';
import { PersonComponent } from './pages/person/person.component';
import { EffectsModule } from '@ngrx/effects';
import { PersonEffects} from './shared/store/person.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([PersonEffects])
  ],
  declarations: [PersonsComponent, PersonComponent],
  exports: [PersonsComponent]
})
export class PersonsModule { }