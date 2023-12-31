import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(AuthenticationService);
  var isLogged = service.isLogged();
  if (isLogged) {
    return router.navigate(['work-orders']);
  } else {
    return true;
  }
};
