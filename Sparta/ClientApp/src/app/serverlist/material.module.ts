import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSelectModule
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
        MatSelectModule
    ]
  })
  export class MaterialModule { }
  