import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data.service';
import {Router} from '@angular/router';
import { ReloadService } from '../Reload.service';

@Component({
  selector: 'app-Employee-List',
  templateUrl: './Employee-List.component.html',
  styleUrls: ['./Employee-List.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any = [];
  constructor(private ds: DataService, private reloadService: ReloadService) { }

  ngOnInit() {
    this.employees = this.ds.getData();
  }

  sendDetails(i: any) {
    this.ds.selectedEmployee = this.employees[i];
    console.log(this.ds.selectedEmployee);
    this.reloadService.reloadComponent()
  }

}
