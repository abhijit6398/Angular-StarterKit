import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { items } from './components/sidebar/navList';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (localStorage.getItem('auth')) {
      console.log(route, 'role');
      if (route.data['role'] && route.data['role'].indexOf(user.Role) === -1) {
        console.log(route.data['role'], 'role');
        this.router.navigate(['/login']);
        return false;
      } else {
        let userRole = JSON.parse(localStorage.getItem('user') || '{}').Role;
        let filterRoute = items.filter((x: any) => x.url === state.url);
        if (filterRoute[0].role === userRole) {
          return true;
        } else {
          if (userRole === 'Admin') {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/home']);
          }
          return false;
        }
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
 

}
