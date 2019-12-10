import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers.component';
import { RouterModule } from '@angular/router';
import { ServersRoutingModule } from './servers.routing';
import { ComponentsModule } from '../../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ServersRoutingModule,
        ComponentsModule
    ],
    declarations: [
        ServersComponent,
        DashboardComponent
    ]
})
export class ServersModule {}
