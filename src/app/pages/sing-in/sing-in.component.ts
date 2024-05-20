import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HeaderVersionOneComponent } from '../../shared/header-version-one/header-version-one.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderVersionOneComponent, RouterModule],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.scss'
})
export class SingInComponent {
  public email = new FormControl('');
  public password = new FormControl('');
  // public password: string = "";

  submitForm() {

  }
}
