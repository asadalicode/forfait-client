import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
export class PopupModal {
  modalDialog: any;

  constructor(public matDialog: MatDialog) {}

  openModal(type: string, componentRef: any, modalData?: object, fromComponent?: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;

    switch (type) {
      case 'medium': {
        dialogConfig.width = '1000px';
        dialogConfig.id = `modal-${type}`;
        dialogConfig.data = {
          type: type,
          data: modalData,
          fromComponent: fromComponent,
        };
        dialogConfig.backdropClass = 'backdropBackground';
        dialogConfig.panelClass = 'custom-modalbox';
        this.modalDialog = this.matDialog.open(componentRef, dialogConfig);
        break;
      }

      case 'delete': {
        dialogConfig.width = '650px';
        dialogConfig.id = `modal-${type}`;
        dialogConfig.data = modalData;
        dialogConfig.backdropClass = 'backdropBackground';
        dialogConfig.panelClass = 'custom-modalbox';
        dialogConfig.data = {
          type: type,
          data: modalData,
          fromComponent: fromComponent,
        };
        this.modalDialog = this.matDialog.open(componentRef, dialogConfig);
        break;
      }

      default: {
        break;
      }
    }

    return this.modalDialog;
  }

  closeModal() {
    this.modalDialog.close();
  }
}
