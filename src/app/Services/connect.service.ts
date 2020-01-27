import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Connect } from '../Model/connect.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http: HttpClient) { }

  url = 'https://my-json-server.typicode.com/cryptonrohit/connectjason/CentralStation';

  getCentralStationvalue() {
    return this.http.get<Connect[]>(this.url);
  }
}
