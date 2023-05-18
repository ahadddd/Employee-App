import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data.service';
import { ReloadService } from '../Reload.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-Employee-Detail',
  templateUrl: './Employee-Detail.component.html',
  styleUrls: ['./Employee-Detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  private reloadSubscription!: Subscription;

  constructor(private ds: DataService, private reloadService: ReloadService) { }
  
  employee: any = this.ds.selectedEmployee;

  ngOnInit() {
    this.reloadSubscription = this.reloadService.getReloadObservable().subscribe(() => {
      this.reloadComponent();
    });
    this.employee = this.ds.selectedEmployee;
    
  }

  reloadComponent(){
    this.employee = this.ds.selectedEmployee;
  }

}
