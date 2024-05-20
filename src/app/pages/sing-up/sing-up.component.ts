import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HeaderVersionOneComponent } from '../../shared/header-version-one/header-version-one.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderVersionOneComponent, RouterModule],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export class SingUpComponent {
  public fullName = new FormControl('');
  public email = new FormControl('');
  public password = new FormControl('');
  
  submitForm() {}

}
