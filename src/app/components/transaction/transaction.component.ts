import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  showValueforstart = false;
  showValueforstop = false;
  stopChargingEnable = false;
  startChargingEnable = false;
  connectorInputValue = '';
  constructor() { }

  ngOnInit() {
  }

  startcharging() {
        this.showValueforstart = true;
        this.showValueforstop = false;
        this.stopChargingEnable = true;
    }
  stopcharging() {
      this.showValueforstop = true;
      this.showValueforstart = false;
      this.startChargingEnable = false;
      this.connectorInputValue = null;
  }
  connectorValue() {
    this.connectorInputValue.length !== 0 ? this.startChargingEnable = true : this.startChargingEnable = false ;
    if (this.connectorInputValue.length !== 0) {
      this.stopChargingEnable = false;
    }
  }
}
