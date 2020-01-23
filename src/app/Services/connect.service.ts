import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Connect } from '../Model/connect.model'

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private _http: HttpClient) { }

  _url="https://my-json-server.typicode.com/cryptonrohit/connectjason/CentralStation";

  getCentralStationvalue(){
    var a = this._http.get<Connect[]>(this._url);
    console.log(a)
    return a;
  }

  // sendCentralStationvalue(connect: Connect[]){
  //   return this._http.post<Connect[]>(this._url, connect);
  // }

  // deleteCentralStationvalue(){
  //   return this._http.delete<Connect[]>(this._url);
  // }
}
