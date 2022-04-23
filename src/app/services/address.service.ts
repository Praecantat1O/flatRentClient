import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/address.model';
import { environment as env } from '../../environments/environment';

const apiUrl = env.apiUrls.address;

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) { }

  public getAddressByString(str: string): Observable<Address[]> {
    return this.http.get<Address[]>(`${apiUrl}?search="${str}`);
  }
}
