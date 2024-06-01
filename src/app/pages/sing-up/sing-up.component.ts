import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderVersionOneComponent } from '../../shared/header-version-one/header-version-one.component';
import { Router, RouterModule } from '@angular/router';
import { PasswordComponentComponent } from '../../shared/password-component/password-component.component';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderVersionOneComponent, RouterModule, PasswordComponentComponent],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export class SingUpComponent {
  #authService = inject(AuthService);
  #router = inject(Router);
  #formBuilder = inject(FormBuilder);

  public singUpForm: FormGroup = this.#formBuilder.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })
  
  public getPassword(event: string): void {
    this.singUpForm.get("password")?.setValue(event);
  }

  public submitForm(): void {
    if (this.singUpForm.valid) {
      const fullName = this.singUpForm.get("fullName")?.value;
      const email = this.singUpForm.get("email")?.value;
      const password = this.singUpForm.get("password")?.value;
      
      this.#authService.singUp(fullName, email, password).subscribe({
        next: res => res,
        error: error => error
      })

      this.#router.navigate(['join/login'])
    }
  }

}
