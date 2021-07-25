import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;


  buscar( ) {

    const valor = this.txtBuscar.nativeElement.value;
    
    console.log(valor);
    
    this.txtBuscar.nativeElement.value = '';
  }

}
