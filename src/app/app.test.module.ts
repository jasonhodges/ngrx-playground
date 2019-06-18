import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '@ngrx-playground/app.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RouterTestingModule,
    StoreModule.forRoot({})
  ],
  exports: [
    AppComponent
  ]
})
export class AppTestModule {

}
