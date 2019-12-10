import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SideBarComponent
    ],
    exports: [
        SideBarComponent
    ]
})
export class ComponentsModule {}
