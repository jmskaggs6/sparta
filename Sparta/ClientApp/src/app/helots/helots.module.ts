import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServersModule } from './servers/servers.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ServersModule
    ],
    declarations: [
       // HelotsComponent
    ]
})
export class HelotsModule {}