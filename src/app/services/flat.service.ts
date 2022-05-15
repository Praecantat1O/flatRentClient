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

  public addBooking(date: string, flatId: number): Observable<any> {
    return this.http.post(`${apiUrl}${flatId}/add-booking`, {
      "date": date,
    });
  }

  public deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${apiUrl}delete-booking/${id}`);
  }

  public deleteFlat(id: number): Observable<any> {
    return this.http.delete(`${apiUrl}delete/${id}`);
  }

  public getAll(): Observable<IFlat[]> {
    return this.http.get<IFlat[]>(apiUrl)
      .pipe(
        map(flats => flats.map(flat => new Flat(flat)))
      );
  }

  public getFlatById(id: number): Observable<IFlatUser> {
    return this.http.get<IFlatUser>(apiUrl + id)
      .pipe(
        map((value: IFlatUser) => {
          const flat = new Flat(value.flat);
          const user = new User(value.user);

          return { flat, user };
        })
      );
  }

  public getFlatsByUserUid(uid: string): Observable<IFlat[]> {
    return this.http.get<IFlat[]>(apiUrl, {
      params: {
        userUid: uid,
      },
    })
  }

  public getFlatsByIdList(ids: number[]): Observable<IFlat[]> {
    return this.http.get<IFlat[]>(apiUrl, {
      params: {
        idList: ids.map(item => item.toString()).join(','),
      },
    });
  }
}
