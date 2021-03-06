import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatDialogModule
    ],
    exports: [
        MatDialogModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatTabsModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatButtonModule
    ]
  })
  export class MaterialModule { }
  