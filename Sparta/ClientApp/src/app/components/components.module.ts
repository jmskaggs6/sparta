import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule, MatListModule, MatList, MatCheckboxModule } from '@angular/material';

import { SideBarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        MatSidenavModule,
        MatListModule,
        MatCheckboxModule
    ],
    declarations: [
        SideBarComponent,
    ],
    exports: [
        SideBarComponent,
        MatSidenavModule,
        MatListModule,
        MatCheckboxModule
    ]
})
export class ComponentsModule {}
