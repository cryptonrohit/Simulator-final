import { Component, OnInit } from '@angular/core';
import { ChargerStatusValues } from '../charger-statusValues.model';

@Component({
  selector: 'app-charger-status-values',
  templateUrl: './charger-status-values.component.html',
  styleUrls: ['./charger-status-values.component.css']
})
export class ChargerStatusValuesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // chargerStatusValues: ChargerStatusValues[]=[
  //   {id:1, status: 'Charger-Available'},
  //   {id:2, status: 'Charger-Unavailable'},
  //   {id:3, status: 'Charger-Faulty'},
  //   {id:4, status: 'Charger-Disconnected'},
  // ]

  // value = this.chargerStatusValues[0];

}
