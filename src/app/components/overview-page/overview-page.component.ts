import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  startNavigation ="start";
  stopNavigation = "stop";
  
  constructor(private route : Router) { }

  ngOnInit() {
  }

  onClickConnector(){
    this.route.navigate(['connector']);
  }
  onClickTransaction(){
    this.route.navigate(['transaction']);
  }

}
