import { WorkersService } from './shared/workers.service';
import { element } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { WorkersResponse, Workers } from '../../@core/model/workers.model';
import { Worker, workers } from 'cluster';

@Component({
  selector: 'app-admin-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
})
export class AdminWorkersComponent implements OnInit {
  // displayedColumns: string[] = ['BannerId', 'FirstName', 'LastName', 'Email', 'RoleId', 'RoleName'];
  // dataSource = new MatTableDataSource<EmployeeDetails>(ELEMENT_DATA);

  workers: Workers[] = [];
  columns: string[] = ['BannerId', 'FirstName', 'LastName', 'Email', 'RoleId', 'RoleName'];
  index = ['BannerId', 'FirstName', 'LastName', 'Email', 'RoleId', 'RoleName'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public service: WorkersService) {}

  ngOnInit() {
    //this.ordersDataSource.paginator = this.paginator;
    this.getData();
  }

  getData() {
    this.service.getWorkersList().subscribe(
      (response: WorkersResponse) => {
        this.workers = response?.items;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }
}
