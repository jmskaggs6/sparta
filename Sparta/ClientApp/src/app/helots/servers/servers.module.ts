import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers.component';
import { RouterModule } from '@angular/router';
import { ServersRoutingModule } from './servers.routing';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        ServersRoutingModule
    ],
    declarations: [
        ServersComponent,
        DashboardComponent
    ]
})
export class ServersModule {}
