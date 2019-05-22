import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { RepositoryService } from './../../shared/repository.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Owner } from '../../_interface/owner.model';
import { ErrorHandlerService } from '../../shared/error-handler.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit, AfterViewInit  {
  public displayedColumns = ['name', 'dateOfBirth', 'address', 'details', 'update', 'delete'
  ];
  public dataSource = new MatTableDataSource<Owner>();
  public dataTest: Owner[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private repoService: RepositoryService, private errorService: ErrorHandlerService, private router: Router) { }

  ngOnInit() {
    //this.getAllOwners();
    this.dataSource.data = EXAMPLE_DATA;
    //this.dataTest = EXAMPLE_DATA;
    //this.f(10);

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public getAllOwners = () => {
    this.repoService.getData('api/owner')
      .subscribe(res => {
        this.dataSource.data = res as Owner[];
      },
      (error) => {
        console.table('-->> Error: ' + error);
        this.errorService.handleError(error);
      })
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/owner/details/${id}`;
    this.router.navigate([url]);
  }

  public redirectToUpdate = (id: string) => {

  }

  public redirectToDelete = (id: string) => {

  }

  public f(matrix: number) {
    var sum;
    for (var i = 0; i < matrix; i++) {
      console.info("-->> Loop Number: "+i)
    }
    return sum;
  }

  //public add() {
  //  let row: Owner = { id: '10', name: 'Mike', dateOfBirth: '12/30/1953', address: '425 Geneva satr' };
  //  this.dataTest.insert(row);
  //  this.dataTest.push(row);
  //}

  //public del() {
  //  //this.dataTest.splice(1, 2);
  //  this.dataTest = this.dataTest.filter(item => item.id !== '10');
  //}

}


const EXAMPLE_DATA: Owner[] = [
  { id: '10', name: 'Mike', dateOfBirth: new Date('12/30/1953'), address: '425 Geneva satr' },
  { id: '20', name: 'Alex', dateOfBirth: new Date('12/30/2009'), address: '425 Geneva satr' },
  { id: '30', name: 'Inna', dateOfBirth: new Date('12/30/1979'), address: '425 Geneva satr' },
  { id: '40', name: 'Boris', dateOfBirth: new Date('12/30/1983'), address: '527 Geneva satr' },
  { id: '50', name: 'Innel', dateOfBirth: new Date('12/30/2001'), address: '425 Geneva satr' },
  { id: '60', name: 'Valery', dateOfBirth: new Date('12/30/2014'), address: '527 Geneva satr' },
  { id: '70', name: 'Amila', dateOfBirth: new Date('12/30/2018'), address: '425 Geneva satr' },
 
];
