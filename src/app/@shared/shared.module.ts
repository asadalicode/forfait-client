import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DataPropertyGetterPipe } from './components/data-property-getter-pipe/data-property-getter-pipe.pipe';
import { ForfaitComponent } from './components/forfait/forfait.component';
import { StarComponent } from './components/star/star.component';
import { AddForfaitComponent } from './popup-modals/components/add-forfait/add-forfait.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './popup-modals/components/delete/delete.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, FormsModule, ReactiveFormsModule, TranslateModule, CommonModule],
  declarations: [
    LoaderComponent,
    StarComponent,
    ForfaitComponent,
    DatatableComponent,
    DataPropertyGetterPipe,
    AddForfaitComponent,
    DeleteComponent,
  ],
  exports: [
    LoaderComponent,
    StarComponent,
    AddForfaitComponent,
    DeleteComponent,
    ForfaitComponent,
    DatatableComponent,
    DataPropertyGetterPipe,
  ],
  entryComponents: [DatatableComponent, DataPropertyGetterPipe],
})
export class SharedModule {}
