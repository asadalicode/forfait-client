import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import * as moment from 'moment';
@Component({
  selector: 'app-add-forfait',
  templateUrl: './add-forfait.component.html',
  styleUrls: ['./add-forfait.component.scss'],
})
export class AddForfaitComponent implements OnInit {
  isLoading: boolean = false;
  Form!: FormGroup;
  dataModel: any = {};
  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddForfaitComponent>,
    @Inject(MAT_DIALOG_DATA) public dataObject: any
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  private createForm() {
    this.Form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(15)]],
      member_since: ['', [Validators.required]],
      phone_number: [''],
      status: [true],
    });
  }

  hasError = (controlName: string, errorName: string) => {
    return this.Form.controls[controlName].hasError(errorName);
  };

  lookUpComponent() {
    let component = this.dataObject.fromComponent;

    switch (component) {
      case 'ForfaitManagement':
        break;

      default: {
        break;
      }
    }
  }

  close(type = 'close') {
    this.dialogRef.close({ event: type });
  }
}
