import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  //Inserir valores  no principio 
  buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase();
    
    if (query.trim().length === 0 ) {
      return;
    }
    

    if ( !this._historial.includes( query )) {
          this._historial.unshift(query);
          this._historial = this._historial.splice(0, 10);
    }

  
    
    console.log(this._historial);

  }

 

}
