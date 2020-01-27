import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StatusValues } from '../../Model/statusValue.model';
import { ChargerStatusValues } from '../../Model/charger-statusValues.model';

@Component({
  selector: 'app-status-values',
  templateUrl: './status-values.component.html',
  styleUrls: ['./status-values.component.css']
})
export class StatusValuesComponent implements OnInit {

  applyStatusValueToggle = false;
  showConnectorStatusValues = true;
  statusvalue = false;
  constructor() { }

  connectorstatusValues: StatusValues[] = [
    {id: 1, name: 'Connector- Available'},
    {id: 2, name: 'Connector- Preparing'},
    {id: 3, name: 'Connector- Charging'},
    {id: 4, name: 'Connector- Faulted'},
    {id: 5, name: 'Connector- Unavailable'},
    {id: 6, name: 'Connector- Reserved'}
  ];
  connectorvalue = this.connectorstatusValues[0];

  chargerStatusValues: ChargerStatusValues[] = [
    {id: 1, status: 'Charger-Available'},
    {id: 2, status: 'Charger-Unavailable'},
    {id: 3, status: 'Charger-Faulty'},
    {id: 4, status: 'Charger-Disconnected'},
  ];

  chargervalue = this.chargerStatusValues[0];

  ngOnInit() {
  }

  chargerStatusValuesChange() {
    this.chargervalue.id !== 1 ? this.statusvalue = true : this.statusvalue = false;
  }

}
