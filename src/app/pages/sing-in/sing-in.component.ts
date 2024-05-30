import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderVersionOneComponent } from '../../shared/header-version-one/header-version-one.component';
import { Router, RouterModule } from '@angular/router';
import { PasswordComponentComponent } from '../../shared/password-component/password-component.component';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderVersionOneComponent, RouterModule, PasswordComponentComponent],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.scss'
})
export class SingInComponent {
  #authService = inject(AuthService);
  #router = inject(Router);
  #formBuilder = inject(FormBuilder);

  public loginForm: FormGroup = this.#formBuilder.group({
    email: ['', [Validators.required, Validators.email] ],
    password: ['', [Validators.required]]
  })

  public getPassword(event: string) {
    this.loginForm.get("password")?.setValue(event);
  }

  private setLoginData(): void {
    const email: string = this.loginForm.get("email")?.value ?? '';
    const password: string = this.loginForm.get("password")?.value ?? '';

    sessionStorage.setItem("password", password);
    sessionStorage.setItem("email", email);
  }

  submitForm() {
    if (this.loginForm.valid) {
      this.setLoginData();
      this.#router.navigate(['in'])
    }
  }
}
