import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from 'src/app/components/input/input.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonDirective } from 'src/app/directives/button/button.directive';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, InputComponent, ReactiveFormsModule, ButtonDirective],
  template: `
    <div class="min-h-screen w-full flex justify-center items-center">
      <form
        novalidate
        autocomplete="off"
        [formGroup]="loginForm"
        (ngSubmit)="onSubmit()"
      >
        <app-input name="username" label="Usuário" formControlName="userName" />
        <app-input
          name="password"
          type="password"
          label="Senha"
          formControlName="password"
        />
        <button
          mButton
          [disabled]="!isValid()"
          type="submit"
          class="mt-2 w-full"
        >
          Entrar
        </button>
      </form>
    </div>
  `,
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  isValid() {
    return this.loginForm.valid;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    const { userName, password } = this.loginForm.value;
    this.authenticationService.auth(userName, password).subscribe({
      next: (value) => {
        console.log(value);
        const { token, expiration } = value;
        this.authenticationService.login(token, expiration);
        this.router.navigate(['/dashboard']);
      },
    });
  }
}
