import { Component, inject } from '@angular/core';
import { HeaderLoggedComponent } from '../../shared/header-logged/header-logged.component';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderLoggedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // #service = inject(AuthService);

  ngOnInit(): void {
  }
}
