import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp-details',
  template:`
    <h1>Employee details</h1>
    <ul *ngFor="let emp1 of emp">
      <li>{{emp1.id}}.{{emp1.name}}.{{emp1.age}}</li>
    </ul>
  `,
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {
  public emp=[]
  constructor(private _empS:EmpServiceService) { }
  ngOnInit() {
    this._empS.getEmployees()
      .subscribe(data=>this.emp=data);
  }

}
