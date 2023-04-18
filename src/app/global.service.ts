import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private apiUrl = "http://localhost:3000";
  constructor(private http : HttpClient) { }

  usersGetApi(){
    return this.http.get(`${this.apiUrl}/users`)
  }

  usersPostApi(data:any){
    return this.http.post(`${this.apiUrl}/users`,data)
  }

}
