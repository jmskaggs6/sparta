import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerListComponent } from './serverlist/serverlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServerlistModule } from './serverlist/serverlist.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ServerListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ServerListComponent, pathMatch: 'full' },
      { path: 'serverlist', component: ServerListComponent }
    ]),
    BrowserAnimationsModule,
    MaterialModule,
    ServerlistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
