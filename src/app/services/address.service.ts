import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddress } from '../interfaces/address.interface';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}

  public getAddressByString(str: string): Observable<Address[]> {
    // TODO STRING
    return this.http.get<Address[]>('http://localhost:5000/api/address?search="могилев притыцкого 26"');
  }
}
