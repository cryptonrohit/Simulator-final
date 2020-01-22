import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StatusValues } from '../statusValue.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-subtenant-values',
  templateUrl: './subtenant-values.component.html',
  styleUrls: ['./subtenant-values.component.css']
})
export class SubtenantValuesComponent implements OnInit {
  @Output() selectedValue= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  statusValues: StatusValues[]=[
    {id:1, name:'---Select---'},
    {id:2, name:'Default'},
    {id:3, name:'NewCastle'},
    {id:4, name:'AutomatedTestBangalore'},
    {id:5, name:'TestSubtenant'},
    {id:6, name:'Demo'},
    {id:7, name:'TestSubtenant0.0'}
  ]

  statusvalue = this.statusValues[0]

  statusvaluechange(){
     this.statusvalue.id ===1?this.selectedValue.emit(false) : this.selectedValue.emit(true)
  }
}
