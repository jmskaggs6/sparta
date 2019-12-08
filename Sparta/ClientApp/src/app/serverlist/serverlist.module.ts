import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Store } from '@ngxs/store';

import { ServerListComponent } from './serverlist.component';

import { ServerListConfigDialog } from './dialogs/slconfigdialog.component';
import { ServerConnectDialog } from './server-connect/server-connect.dialog.component';
import { ServerConnectComponent} from './server-connect/server-connect.component';
import { WebTableComponent } from './table/table.component';
import { IssuesComponent } from './issues/issues.component';
import { ServerFilterComponent } from './server-filter/server-filter.component';
import { ServerFilterVersion } from './server-filter-version/server-filter-version.component';
import { ServerNavigatorComponent } from './server-top-navigator/server-navigator.component';
import { ServerDashBoardComponent } from './serverdashboard/serverdashboard.component';
import { ServerVersionsComponent } from './serverversions/serverversions.component';
import { ConfirmedDialog } from './dialogs/confirm/confirmdialog.component';

import { SortService } from './services/sort.service';
import { ServerListSrv } from './services/serverlist.service';
import { FilterService } from './services/filter.service';
import { JsFuncService } from './services/jsfunc.service';
import { Repository } from './repository';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ServerListComponent
  ],
  declarations: [
    ServerListConfigDialog,
    ServerConnectDialog,
    ServerConnectComponent,
    WebTableComponent,
    IssuesComponent,
    ServerFilterComponent,
    ServerFilterVersion,
    ServerNavigatorComponent,
    ServerDashBoardComponent,
    ServerVersionsComponent,
    ConfirmedDialog,
    ServerListComponent
  ],
  providers: [
    SortService,
    ServerListSrv,
    FilterService,
    JsFuncService,
    Repository
  ]
})
export class ServerlistModule { }
