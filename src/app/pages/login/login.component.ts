import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IRegForm } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private userService: UserService) { }

  public registrationForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(60),
      Validators.minLength(2),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(60),
      Validators.minLength(2),
      Validators.email,
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.maxLength(13),
      Validators.minLength(2),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(60),
      Validators.minLength(2),
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  public isLogin: boolean = true;

  public loginMessage = 'У Вас нет аккаунта?';
  public regMessage = 'У Вас уже есть аккаунт?';

  public changeForm(): void {
    this.isLogin = !this.isLogin;
    this.loginForm.reset();
    this.registrationForm.reset();
  }

  public onSubmit(): void {
    if (this.isLogin) {
      const { email, password } = this.loginForm.value;
      this.userService.signIn(email, password);
    } else {
      const loginForm: IRegForm = {
        email: this.registrationForm.value.email,
        name: this.registrationForm.value.name,
        password: this.registrationForm.value.password,
        phone: this.registrationForm.value.phone,
      };

      this.userService.signUp(loginForm).then;
    }
  }
}
