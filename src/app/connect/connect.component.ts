import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { HttpClient } from '@angular/common/http';
import { Connect } from '../connect.model';
import { emptyArray } from '../emptyArray.model';


@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  connectionValue:string = 'Connect';

  //someValue:string;

  linkid:string="wss://ebusdev-chargerapp-ebusdev.eu1.mindsphere.io/ChargingStations";
  chargerid:string="";
  chargeridvalue:boolean=false;
  subtenantid:string="";
  subtenantidvalue:boolean=false;
  
  showconnect:boolean=false;
  //showdisconnect:boolean=false;
  connect:Connect[];
  body:{};

  //dummy:emptyArray[]=[1];

  constructor(private connectservice: ConnectService, private _http:HttpClient) { }

  ngOnInit() {
    var c = this.connectservice.getCentralStationvalue()
    .subscribe(data=> this.connect = data)
    console.log(c);
  }

onClickConnect(){
  this.showconnect = true;
  var body = {
    centralStationid: this.linkid + '/' +this.subtenantid + '/' +this.chargerid,
    chargerid: this.chargerid,
    subtenantid: this.subtenantid
  }
  //this.someValue = this.chargerid; 
  this.connect.push(body)
  //return this.connectservice.sendCentralStationvalue(this.connect).subscribe(data=>this.connect = data)
   
}

onClickDisconnect(){
  // this.showdisconnect = true;
  this.showconnect = false;
  this.connect.pop()
}

chargeId(){
  this.chargerid.length != 0? this.chargeridvalue = true : this.chargeridvalue = false;
}

SubtenantId(){
  this.subtenantid.length != 0? this.subtenantidvalue = true : this.subtenantidvalue = false;
}

// onClickAdd(){
//   var some = 1;
//   this.dummy.push(some);  
// }

}  
