import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from '@ngrx-playground/app.component';
import { MaterialModule } from '@ngrx-playground/core/material.module';

export const COMPONENTS = [
  AppComponent
]

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: COMPONENTS,
  declarations: COMPONENTS,
})
export class CoreModule {
}


