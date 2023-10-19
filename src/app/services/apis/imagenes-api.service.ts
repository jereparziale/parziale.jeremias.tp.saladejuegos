import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../interfaces/api-response';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImagenesApiService {

  constructor(private http: HttpClient) {
    interface PixabayResponse {
      hits: Array<{
         imageURL: string;
      }>;
     }
   }
  public imageUrl: string ="";
  private key ="39970197-795398b39a30957cfcdaf60fe";
  public data: Array<Object> | undefined;

  public solicitarImagen(tema: string): Observable<string> {
    return this.http.get<ApiResponse>(
      `https://pixabay.com/api/?key=${this.key}&q=${tema}`,
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    ).pipe(
      map(data => {
        this.imageUrl = data.hits[0].webformatURL;
        return this.imageUrl;
      })
    );
  }


  
  }
 

