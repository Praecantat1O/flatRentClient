import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { createUser, loadCurrentUser } from '../store/app.actions';
import { Observable, withLatestFrom } from 'rxjs';
import { IRegForm, IUser, IUserToDB } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { getUserUid, isLogged } from '../store/app.selectors';
import { EntityStatus } from '../store/state.helpers';

const apiUrl = environment.apiUrls.user;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private afAuth: AngularFireAuth,
    private store: Store<AppState>,
    private http: HttpClient
  ) {
    this.afAuth.authState.pipe(withLatestFrom(this.userUid$)).subscribe(([user, uid]) => {
      if (uid.status !== EntityStatus.Pending) {
        if (user?.uid) {
          this.store.dispatch(loadCurrentUser({ uid: user.uid }));
        }
      }

      this.store.select(isLogged).subscribe(value => this.isLogged = value);
    });
  }

  public userUid$ = this.store.select(getUserUid);
  public isLogged: boolean;

  public async signUp(form: IRegForm) {
    try {
      const registeredUser = await this.afAuth.createUserWithEmailAndPassword(form.email, form.password);

      if (registeredUser.user.uid) {
        const userToDB: IUserToDB = {
          name: form.name,
          phone: form.phone,
          email: form.email,
          uid: registeredUser.user.uid,
        };

        this.store.dispatch(createUser({ userToDB }));
      }
    } catch (error) {
      console.log('Sign Up Error: ', error);
    }
  }

  public async signIn(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  public signOut() {
    this.afAuth.signOut();
  }

  public createUser(user: IUserToDB): Observable<IUser> {
    return this.http.post<IUser>(apiUrl + 'create', user);
  }

  public getUserByUid(uid: string): Observable<IUser> {
    return this.http.get<IUser>(apiUrl + uid);
  }
}
