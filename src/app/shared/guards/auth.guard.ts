import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: UserService, private router: Router) {
  }

  public isLogged$: Observable<boolean>;
  public res: boolean;

  canActivate(): boolean {
    const isLogged = this.auth.isLogged;

    if (!isLogged) {
      this.router.navigate(['/login']);
    }

    return isLogged;
  }
}
