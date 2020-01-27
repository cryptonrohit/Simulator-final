import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  startChargingEnable = false;
  showValueforstart = false;
  showValueforstop = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  startcharging() {
        this.showValueforstart = true;
        this.showValueforstop = false;
    }
  stopcharging() {
      this.showValueforstop = true;
      this.showValueforstart = false;
  }

}
