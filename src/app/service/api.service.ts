import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://proyect-edcd9-default-rtdb.firebaseio.com/peliculas.json")
    .pipe(map((res:any) => {
      return res;
    }))
  }
}
