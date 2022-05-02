import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrls.flat;

@Injectable({
  providedIn: 'root',
})
export class FlatService {
  constructor(private http: HttpClient) { }

  public createFlat(formData: FormData): Observable<any> {
    return this.http.post(apiUrl, formData);
  }
}
