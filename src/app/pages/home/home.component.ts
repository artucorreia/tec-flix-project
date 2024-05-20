import { Component } from '@angular/core';
import { HeaderVersionOneComponent } from '../../shared/header-version-one/header-version-one.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderVersionOneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
