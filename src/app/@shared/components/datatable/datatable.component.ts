import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export interface TableColumn {
  name: string; // column name
  dataKey: string; // name of key of the actual data in this column
  position?: 'right' | 'left'; // should it be right-aligned or left-aligned?
  isSortable?: boolean; // can a column be sorted?
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns: string[];
  @ViewChild(MatPaginator, { static: false }) matPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  @Input() isPageable = false;
  @Input() isViewIcon = false;
  @Input() isDeleteIcon = false;
  @Input() isEditIcon = false;
  @Input() isAcceptIcon = false;
  @Input() isRemoveIcon = false;

  @Input() isToggleIcon = false;
  @Input() isUploadIcon = false;
  @Input() isLocationViewIcon = false;
  @Input() isRefundIcon = false;
  @Input() isResolvedIcon = false;
  @Input() isLockIcon = false;
  @Input() isSortable = false;
  @Input() isModalRoute = false;
  @Input() isFilterable = false;
  @Input() tableColumns: TableColumn[];
  @Input() rowActionIcon: string;
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];

  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() reloadTable: EventEmitter<any> = new EventEmitter();
  @Output() rowDeleteAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowEditAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowAcceptAction: EventEmitter<any> = new EventEmitter<any>();

  @Output() rowUploadAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowStatusAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowLocationViewAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowRefundAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowEndRideAction: EventEmitter<any> = new EventEmitter<any>();

  @Output() rowResolvedAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowLockAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowRemoveAction: EventEmitter<any> = new EventEmitter<any>();

  @Output() rowViewAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowCheckAction: EventEmitter<any> = new EventEmitter<any>();

  public searchSub$ = new Subject<string>();

  totalRecords: any = {};
  from_Component: any = '';

  constructor(private matDialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    if (this.rowActionIcon) {
      this.displayedColumns = [...columnNames, this.rowActionIcon];
    } else {
      this.displayedColumns = columnNames;
    }
    this.searchData();
  }

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any) {
    this.totalRecords = data;
    if (data) this.setTableDataSource(data);
  }

  // we need this, in order to make pagination work with *ngIf
  ngAfterViewInit(): void {
    if (this.tableDataSource) this.tableDataSource.paginator = this.matPaginator;
  }

  @Input() set searchValue(elem: any) {
    this.searchSub$.next(elem);
  }

  searchData() {
    this.searchSub$.pipe(debounceTime(400), distinctUntilChanged()).subscribe((filterValue: string) => {
      let value = filterValue.trim().toLowerCase();
      this.reloadTable.next('');
    });
  }

  setTableDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource<any>(data.data);
    // if (this.tableDataSource) this.tableDataSource.paginator = this.matPaginator;
    // this.tableDataSource.paginator = this.matPaginator;
    // this.tableDataSource.sort = this.matSort;
    // this.tableDataSource.paginator = this.matPaginator;
  }
  sortTable(sortParameters: Sort) {
    // defining name of data property, to sort by, instead of column name
    let keyName = sortParameters.active;
    sortParameters.active = this.tableColumns.find((column) => column.name === sortParameters.active).dataKey;
    if (sortParameters.direction === 'asc') {
      this.reloadTable.emit();
    } else if (sortParameters.direction === 'desc') {
      this.reloadTable.emit();
    }

    // this.sort.emit(sortParameters);
  }

  //Specifically for converting date to a format inside dataTable
  convert(element: any) {
    // console.log(element);
    // convert(element);

    if (element.date_of_upload) element.date_of_upload = moment(new Date(element.date_of_upload)).format('l, LT');
    if (element.date_of_operation) element.date_of_operation = moment(new Date(element.date_of_upload)).format('l, LT');

    if (element.last_statement_date)
      element.last_statement_date = moment(new Date(element.last_statement_date)).format('l');
    else return element;
  }

  setPage(index: any) {
    this.reloadTable.emit();
  }

  emitDeleteRowAction(row: any) {
    this.rowDeleteAction.emit(row);
  }

  emitEditRowAction(row: any) {
    this.rowEditAction.emit(row);
  }

  emitStatusAction(row: any) {
    this.rowStatusAction.emit(row);
  }
}
