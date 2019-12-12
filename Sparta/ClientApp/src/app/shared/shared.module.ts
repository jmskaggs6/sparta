import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatButtonModule,
  MatIconModule, MatListModule, MatTableModule, MatSortModule, MatInputModule } from '@angular/material';

//import { ServerlistModule } from './serverlist/serverlist.module';

@NgModule({
  imports: [
    //BrowserAnimationsModule,
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ],
  exports: [
   // BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
