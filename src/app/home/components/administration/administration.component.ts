import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Forfait, MockData, TableColumn } from '@app/@shared/dataModels';
import { AddForfaitComponent } from '@app/@shared/popup-modals';
import { DeleteComponent } from '@app/@shared/popup-modals/components/delete/delete.component';
import { PopupModal } from '@app/@shared/popup-modals/popup-modal';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'],
})
export class AdministrationComponent implements OnInit {
  isLoading = false;
  tableData: any = [];
  forfaits: Forfait[] = MockData.FORFAITS;
  tableColumns: TableColumn[] = MockData.Administration;
  popupRef = new PopupModal(this.matDialog);
  AddForfaitComponent = AddForfaitComponent;
  constructor(private matDialog: MatDialog) {
    this.tableData = {
      count: this.forfaits.length,
      data: this.forfaits,
    };
  }

  ngOnInit(): void {}

  addForfait() {
    this.openModal('medium', AddForfaitComponent, {}, 'AdministrationComponent');
  }

  deleteForfait(data: any) {
    this.openModal('delete', DeleteComponent, data, 'AdministrationComponent');
  }

  //Third param is the data being passed to the popup modal (selected row from datatable)
  editForfait(data: any) {
    this.openModal('medium', AddForfaitComponent, data, 'AdministrationComponent');
  }

  openModal(type: string, component: any, data?: {}, fromComponent?: string) {
    this.matDialog.closeAll();
    const dialogRef = this.popupRef.openModal(type, component, { data: data }, fromComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result && result.event == 'done') {
        //here comes the event to refresh the table e.g call API again when something is updated or deleted
      }
    });
  }
}
