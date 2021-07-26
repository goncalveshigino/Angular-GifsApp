import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private apiKey: string = 'Ar4Z480A56IfnmHcznotMGlC2bc8goEn';
  private serviceURL: string = 'https://api.giphy.com/v1/gifs';
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
    
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query) ;
    
    this.http.get<SearchGifsResponse>(`${ this.serviceURL }/search`, { params })
      .subscribe((resp) => {
        this.resultados = resp.data;

        localStorage.setItem('resultados', JSON.stringify( this.resultados ) );
      });

  }

 

}
