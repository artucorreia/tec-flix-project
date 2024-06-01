import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User2 } from '../model/user2';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  
  const email = sessionStorage.getItem('email');
  const password = sessionStorage.getItem('password');
  
  if (email && password) {

    try {
      const user: User2[] = await firstValueFrom(authService.userByEmail(email));
      
      if (
        user 
        && user[0].password == password
      ) {
        return true
      }
    
    } 
    catch (error) {
      console.log(error);
      return false;
    }
  }

  return false;
};
