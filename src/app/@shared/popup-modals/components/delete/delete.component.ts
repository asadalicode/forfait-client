import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  dataModel: any = {};
  isLoading = false;
  constructor(
    private matDialog: MatDialog,
    private router: Router,
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public dataObject: any
  ) {}

  ngOnInit(): void {
    this.dataModel = this.dataObject.data.data;
    console.log(this.dataModel);
  }

  close(type = 'close') {
    this.dialogRef.close({ event: type });
  }
  lookUpComponent() {
    let component = this.dataObject.fromComponent;
    console.log(component);

    switch (component) {
      case 'ForfaitManagement':
        this.delete(`/api/user_management/${this.dataModel.id}`);
        break;

      default: {
        break;
      }
    }
  }

  delete(url: any) {
    // this.isLoading = true;
    // this.dbService.delete(url).subscribe(
    //   (res: any) => {
    //     this.closeModal();
    //   },
    //   (error) => {
    //     this.isLoading = false;
    //   }
    // );
  }
}
