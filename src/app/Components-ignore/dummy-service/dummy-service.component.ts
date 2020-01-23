import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../Services-ignore/data-service.service';
import { Data } from '../../Model-ignore/data.model ';
import { Config } from 'protractor';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dummy-service',
  templateUrl: './dummy-service.component.html',
  styleUrls: ['./dummy-service.component.css']
})
export class DummyServiceComponent implements OnInit {
  data$:any
  status:number;
  colourValue:boolean =false;
  constructor(private _dataservice:DataServiceService) { }

  ngOnInit() {
    return this._dataservice.getUsers()
     .subscribe(res=>{
       this.data$=res;
        this.status = res.status;
       console.log("response "+res.status)
       }
     )
     
  }
  
   authorizeClick(){
     if(this.status===200){
        this.colourValue = true;
     }
    //  console.log(response);
    // console.log(response.status);
    // console.log(response.statusText);
    
  }
}

