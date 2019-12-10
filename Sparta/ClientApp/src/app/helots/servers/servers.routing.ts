import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ServersComponent } from './servers.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes =[
  { path: 'servers',  component: ServersComponent,
      children: [
      { path: 'dashboard',      component: DashboardComponent },
      
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }

