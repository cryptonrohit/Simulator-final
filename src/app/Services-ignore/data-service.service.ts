import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Data } from '../Model-ignore/data.model ';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  apiUrl = 'http://www.json-generator.com/api/json/get/cfMDzalgoi?indent=2';

  constructor(private _http:HttpClient) { }

  getUsers(){
   return this._http.get<Data[]>(this.apiUrl, {observe: 'response'},)
  }
}
