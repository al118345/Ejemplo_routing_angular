import { Injectable } from '@angular/core';
import {CanActivate, Router, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    if (localStorage.getItem('currentUser') === 'test') {
      alert('Log correcto.')
      // logged in so return true
      return true;
    }
    alert('Error de login.')
    // not logged in so redirect to login page
    this.router.navigate(['/home']);
    return false;
  }

}
