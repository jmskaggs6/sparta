import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServersComponent } from './servers.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { ServersRoutingModule } from './servers.routing';
import { ServersRepository } from './respository/servers.repository';
//import { AppModule } from '../app.module';
import { SortService } from './services/sort.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        //AppModule,
        SharedModule,
        FormsModule,
        ServersRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ServersComponent,
        DashboardComponent,
        SideBarComponent
    ],
    providers: [
        ServersRepository,
        SortService
    ]
})
export class ServersModule {}
