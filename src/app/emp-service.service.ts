import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IEmp } from './emp';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  private _url:string="/assets/data/emp.json";
  constructor(private http:HttpClient) { }

  public getEmployees():Observable<IEmp[]>{
    return this.http.get<IEmp[]>(this._url);
  }
  
}
