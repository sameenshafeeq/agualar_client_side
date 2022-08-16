import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private url = 'http://localhost:81/api/values';
  constructor(private httpClient: HttpClient) { }

  getStudentsName(){
    return this.httpClient.get(this.url);
  }

}
