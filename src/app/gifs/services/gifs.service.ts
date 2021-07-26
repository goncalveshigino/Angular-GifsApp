import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private apiKey    : string = 'Ar4Z480A56IfnmHcznotMGlC2bc8goEn';
  private _historial: string[] = [];

  //TODO: trocar any por seu tipo correspondente
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }


  constructor(private http: HttpClient) {
    
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
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
          
      //Gravar historial 
          localStorage.setItem('historial', JSON.stringify( this._historial ) );
    }

    
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=Ar4Z480A56IfnmHcznotMGlC2bc8goEn&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;

        localStorage.setItem('resultados', JSON.stringify( this.resultados ) );
      });

  }

 

}
