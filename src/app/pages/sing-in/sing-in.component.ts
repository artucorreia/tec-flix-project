import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HeaderVersionOneComponent } from '../../shared/header-version-one/header-version-one.component';
import { RouterModule } from '@angular/router';
import { PasswordComponentComponent } from '../../shared/password-component/password-component.component';

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderVersionOneComponent, RouterModule, PasswordComponentComponent],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.scss'
})
export class SingInComponent {
  public email = new FormControl('');
  public password = new FormControl('');

  public getPassword(event: string) {
    
  }

  submitForm() {

  }
}
