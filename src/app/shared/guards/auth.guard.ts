import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLogged = this.auth.isLogged;

    if (!isLogged) {
      this.router.navigate(['/login']);
    }

    return isLogged;
  }
}
