import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp-list',
  template:`
    <h1>Employee list</h1>
    <ul *ngFor="let emp1 of emp">
      <li>{{emp1.name}}</li>
    </ul>
  `,
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  public emp=[]
  constructor(private _empS:EmpServiceService) { }
  ngOnInit() {
    this._empS.getEmployees()
      .subscribe(data => this.emp = data);
  }

}
