// import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User2 } from '../model/user2';
// import { AuthService } from '../service/auth/auth.service';

interface User{
  id: number,
  fullName: string,
  email: string,
  password: string
}

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  
  const email = sessionStorage.getItem('email');
  const password = sessionStorage.getItem('password');
  if (email && password) {

    try {
      const user: User2[] = await firstValueFrom(authService.userByEmail(email));
      
      if (
        user 
        && user[0].password == authService.hashCode(password)
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
