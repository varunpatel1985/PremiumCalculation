import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PremiumCalService {
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }





  getPremiumCal(occupation: string, sumInsured: number, age: number) {
    return this.http.get<number>(this.baseUrl + 'PremiumCalculation/' + occupation + '/' + sumInsured + '/' + age)
  }
}


