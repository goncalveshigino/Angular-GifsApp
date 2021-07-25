import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private apiKey    : string = 'Ar4Z480A56IfnmHcznotMGlC2bc8goEn';
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }


  constructor(private http: HttpClient) { }
  
  

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

    
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=Ar4Z480A56IfnmHcznotMGlC2bc8goEn&q=dragon ball z&limit=10')
      .subscribe((resp: any) => {
        console.log(resp.data);
      })

  
    
    console.log(this._historial);

  }

 

}
