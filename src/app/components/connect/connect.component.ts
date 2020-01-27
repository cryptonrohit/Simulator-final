import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../../Services/connect.service';
import { HttpClient } from '@angular/common/http';
import { Connect } from '../../Model/connect.model';


@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  connectionValue = 'Connect';

  linkid = 'wss://ebusdev-chargerapp-ebusdev.eu1.mindsphere.io/ChargingStations';
  chargerid = '';
  chargeridvalue = false;
  subtenantid = '';
  subtenantidvalue = false;

  showconnect = false;
  connect: Connect[];
  body: {};


  constructor(private connectservice: ConnectService) { }

  ngOnInit() {
    return this.connectservice.getCentralStationvalue()
    .subscribe(data => this.connect = data);
  }

onClickConnect() {
  this.showconnect = true;
  const body = {
    centralStationid: this.linkid + '/' + this.subtenantid + '/' + this.chargerid,
    chargerid: this.chargerid,
    subtenantid: this.subtenantid
  };
  this.connect.push(body);
}

onClickDisconnect() {
  this.showconnect = false;
  this.connect.pop();
}

chargeId() {
  this.chargerid.length !== 0 ? this.chargeridvalue = true : this.chargeridvalue = false;
}

SubtenantId() {
  this.subtenantid.length !== 0 ? this.subtenantidvalue = true : this.subtenantidvalue = false;
}

}
