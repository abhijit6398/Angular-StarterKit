import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }
  public lastRoute: string = "";
  setLastRoute(route: string) { this.lastRoute = route; }
  getLastRoute(): string { return this.lastRoute; }
}
