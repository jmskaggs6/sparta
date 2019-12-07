import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerListConfigDialog } from './dialogs/slconfigdialog.component';
import { ServerConnectDialog } from './server-connect/server-connect.dialog.component';
import { ServerConnectComponent} from './server-connect/server-connect.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServerListConfigDialog,
    ServerConnectDialog,
    ServerConnectComponent,

  ]
})
export class ServerlistModule { }
