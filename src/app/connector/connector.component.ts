import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.css']
})
export class ConnectorComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  transactionclick(){
      this.route.navigate(['transaction']);
  }

}
