import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IFlatUser } from '../interfaces/flat-user.interface';
import { IFlat } from '../interfaces/flat.interface';
import { Flat } from '../models/flat.model';
import { User } from '../models/user.model';

const apiUrl = environment.apiUrls.flat;

@Injectable({
  providedIn: 'root',
})
export class FlatService {
  constructor(private http: HttpClient) { }

  public createFlat(formData: FormData): Observable<any> {
    return this.http.post(apiUrl, formData);
  }

  public getAll(): Observable<IFlat[]> {
    return this.http.get<IFlat[]>(apiUrl)
      .pipe(
        map(flats => flats.map(flat => new Flat(flat)))
      );
  }

  public getFlatById(id: string): Observable<IFlatUser> {
    return this.http.get<IFlatUser>(apiUrl + id)
      .pipe(
        map((value: IFlatUser) => {
          const flat = new Flat(value.flat);
          const user = new User(value.user);

          return { flat, user };
        })
      );
  }

  public getFlatByUserUid(uid: string): Observable<IFlat[]> {
    return this.http.get<IFlat[]>(apiUrl, {
      params: {
        userUid: uid,
      },
    })
      .pipe(
        map(flats => flats.map(flat => new Flat(flat)))
      );
  }

  public getFlatByIdList(ids: number[]): Observable<IFlat[]> {
    return this.http.get<IFlat[]>(apiUrl, {
      params: {
        idList: ids.map(item => item.toString()).join(','),
      },
    })
      .pipe(
        map(flats => flats.map(flat => new Flat(flat)))
      );
  }
}
