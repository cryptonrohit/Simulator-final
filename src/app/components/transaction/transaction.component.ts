import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  stopChargingEnable:boolean = false;
  startChargingEnable:boolean = false;
  showDisconnectEnable:boolean = true;
  showValueforstart:boolean = false;
  showValueforstop:boolean = false;
  showValuefordisconnect:boolean = false;
  constructor(private route:Router) { }

  ngOnInit() {
  }

  startcharging(){
        this.stopChargingEnable = true;
        this.showValueforstart = true;
        this.showValueforstop = false;
    }
  disconnect(){
      this.startChargingEnable = false;
      this.stopChargingEnable = false;
      this.showValuefordisconnect = true;
      this.showValueforstart = false;
      this.showValueforstop = false;
    }
  stopcharging(){
      //this.route.navigate(['stop']);
      this.showValueforstop = true;
      this.showValueforstart = false;
      this.showValuefordisconnect = false;
  }

}
