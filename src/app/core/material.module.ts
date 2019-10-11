import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';


@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
})
export class MaterialModule {
}
