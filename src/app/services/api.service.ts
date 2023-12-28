// api.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SERVER_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getSubBySemester(semester: number) {
    console.log(semester);
    return this.http.get(`${this.SERVER_URL}/api/data/semester/${semester}`);
  }
}