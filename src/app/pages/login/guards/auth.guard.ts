import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(AuthenticationService);
  const isAllowed = true;
  if (!isAllowed) {
    return router.navigate(['/login']);
  } else {
    return true;
  }
};
