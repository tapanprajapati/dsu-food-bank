/**
 * @author Asmita Chaudhari <Asmita.Chaudhari@dal.ca>
 *
 */

import { ApiResponseModel } from '@core/model/api-response.model';
import { WorkerDeleteDialogComponent } from './../worker-delete-dialog/worker-delete-dialog.component';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Roles, RolesResponse } from './../../@core/model/workers.model';
import { Subscription } from 'rxjs';
import { RoleModel } from './../../@core/model/role.model';
import { FormGroup, FormBuilder, FormsModule, NgForm } from '@angular/forms';
import { WorkersService } from '../services/workers.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { WorkersResponse, Workers } from '../../@core/model/workers.model';

@Component({
  selector: 'app-admin-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
})
export class AdminWorkersComponent implements OnInit {
  columns: string[] = ['BannerId', 'FirstName', 'LastName', 'Email', 'RoleId', 'RoleName', 'Action'];
  index = ['BannerId', 'FirstName', 'LastName', 'Email', 'RoleId', 'RoleName'];

  workers: Workers[] = [];
  students: Workers[] = [];
  roles: Roles[] = [];
  FirstName: string;
  RoleId: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public service: WorkersService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Workers
  ) {
    this.FirstName = data.FirstName;
    this.RoleId = data.RoleId;
  }

  ngOnInit() {
    this.getData();
    this.loadRoles();
    this.getStudent();
  }

  getData() {
    this.service.getWorkersList().subscribe(
      (response: WorkersResponse) => {
        this.workers = response?.items;
      },
      (error) => {}
    );
  }

  delete(worker: Workers) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    const ref = this.dialog.open(WorkerDeleteDialogComponent, {
      width: '80vh',
      height: '80vh',
      data: worker,
    });

    ref.afterClosed().subscribe((result) => {
      if (result) {
        this.service.deleteUserRole(result).subscribe(
          (res) => {
            this.getData();
            this.getStudent();
            this.loadRoles();
          },
          (error) => {}
        );
      }
    });
  }

  add(form: NgForm) {
    this.service.addUserRole(form.value).subscribe(
      (res) => {
        this.getData();
        this.getStudent();
        this.loadRoles();
      },
      (error) => {}
    );
  }

  loadRoles() {
    this.service.getRole().subscribe(
      (response: RolesResponse) => {
        this.roles = response?.items;
      },
      (error) => {}
    );
  }

  getStudent() {
    this.service.getStudent().subscribe(
      (response: ApiResponseModel) => {
        this.students = response?.items;
      },
      (error) => {}
    );
  }
}
