import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { BuscarComponent } from './buscar/buscar.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    ResultadoComponent,
    BuscarComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
