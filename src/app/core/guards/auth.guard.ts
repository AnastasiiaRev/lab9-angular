import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      if (this.authService.isLoggedIn
        && next.data.role === this.authService.getUserRole()) {
        return true;
      }
      if (!this.authService.isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
      }
      this.router.navigate(['/']);
      return false;
  }
}
