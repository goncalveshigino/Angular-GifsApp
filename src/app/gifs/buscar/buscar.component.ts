import { Component, ViewChild, ElementRef} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

   constructor( private gifsService: GifsService) {}

  buscar() {
    

    const valor = this.txtBuscar.nativeElement.value;
    
    this.gifsService.buscarGifs( valor );
    
    this.txtBuscar.nativeElement.value = '';
  }

}
