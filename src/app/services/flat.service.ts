import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IFlatUser } from '../interfaces/flat-user.interface';

const apiUrl = environment.apiUrls.flat;

@Injectable({
  providedIn: 'root',
})
export class FlatService {
  constructor(private http: HttpClient) { }

  public createFlat(formData: FormData): Observable<any> {
    return this.http.post(apiUrl, formData);
  }

  public getFlatById(id: string): Observable<IFlatUser> {
    return this.http.get<IFlatUser>(apiUrl + id);
  }
}
