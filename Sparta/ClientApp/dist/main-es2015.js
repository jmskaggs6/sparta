(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serverlist/dialogs/confirm/confirmdialog.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serverlist/dialogs/confirm/confirmdialog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\r\n<div mat-dialog-content>\r\n    <p>{{data.question}}</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"dialogRef.close(false)\">No</button>\r\n    <button mat-button (click)=\"dialogRef.close(true)\">Yes</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serverlist/dialogs/slconfigdialog.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serverlist/dialogs/slconfigdialog.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Configure Columns</h1>\r\n<div mat-dialog-content>\r\n    <div><button mat-button (click)=\"selectAll()\">Set all</button>\r\n    <button class=\"ml-1 mb-3\" mat-button  (click)=\"clearAll()\">Clear all</button></div>\r\n    <div *ngFor=\"let col of colToConfig\">\r\n        <mat-checkbox [(ngModel)]=\"col.visible\">{{col.tableColumns.caption}}</mat-checkbox>\r\n    </div>\r\n</div>\r\n<div mat-dialog-actions align=\"center\">\r\n    <!--<button mat-button [mat-dialog-close]=\"data.columns\">Close</button>-->\r\n    <!--<button mat-button [mat-dialog-close]=\"data.colToConfig\">Ok</button>-->\r\n    <button mat-button (click)=\"onClick()\">Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serverlist/issues/issues.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serverlist/issues/issues.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-dark mb-0 mt-1\" style=\"display:inline-block;\" id=\"issueAccordion\">\r\n    <div *ngIf=\"issuesData as issues; else loading\">\r\n        <!-- Issue card -->\r\n        <div [ngClass]=\"issueCount > 0 ? 'card-header bg-danger text-white': 'card-header'\" id=\"issueHeading\">\r\n            <div class=\"cardTitle\">\r\n                <h5>\r\n                    Issues ({{issueCount | number}})\r\n                    <i [ngClass]=\"getHeaderClass()\" data-toggle=\"collapse\" href=\"#collapseIssueTable\" (click)=\"expanded = !expanded\"></i>\r\n                </h5>\r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"collapse\" id=\"collapseIssueTable\" data-parent=\"#issueAccordion\">\r\n            <div class=\"card-body\">\r\n                <button mat-raised-button color=\"primary\" class=\"mb-2 mt-0\" (click)=\"deleteSelected()\">Delete selected</button>\r\n                <button mat-raised-button color=\"primary\" class=\"mb-2 mt-0 ml-2\" (click)=\"refreshIssues()\">\r\n                    Refresh <span *ngIf=\"issueCount != issues.length\">(New Items available)</span>\r\n                </button>\r\n                <i *ngIf=\"isRefreshing\" class=\"fa fa-spinner fa-spin\"></i>\r\n                <span *ngIf=\"!isRefreshing\" class=\"ml-2\">Last refresh: {{ lastRefresh | date:'medium'}}</span>\r\n                <h5>Filter:</h5>\r\n                <select class=\"mb-1\" [(value)]=\"serverFilter\" onchange=\"selectChange($event)\">\r\n                    <option>Show all</option>\r\n                    <option *ngFor=\"let server of serversWithIssues\" value=\"server\">\r\n                        {{server}}\r\n                    </option>\r\n                </select>\r\n\r\n\r\n                <table class=\"table\" id=\"issueTable\">\r\n                    <thead class=\"thead-light\">\r\n                        <tr>\r\n                            <th><mat-checkbox (change)=\"selectAll($event)\"></mat-checkbox></th>\r\n                            <th></th>\r\n                            <th *ngFor=\"let col of tableCols; let i=index\"\r\n                                (click)=\"setSort(i)\"\r\n                                [ngClass]=\"{'unsortable': !col.Sortable}\"\r\n                                matTooltip={{col.toolTip}}>\r\n                                {{col.caption}}<span [ngClass]=\"getSortClass(i)\"></span>\r\n                            </th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <ng-container *ngFor=\"let issue of sortSrv.sortObject(issues, currentSortColName, isAsc); let i=index\">\r\n                            <tr>\r\n                                <td><mat-checkbox [(ngModel)]=\"issue.recordSelected\"></mat-checkbox></td>\r\n                                <td><button mat-raised-button color=\"primary\" (click)=\"sendContinue(issue.serverID)\">Continue</button></td>\r\n                                <td *ngFor=\"let col of tableCols; let i=index\">\r\n                                    {{ isColDateTime(i) ? (issue[col.colName] | date:'medium') : (issue[col.colName]) }}\r\n                                </td>\r\n                                <td><button mat-raised-button color=\"primary\" (click)=\"loadYellowBox(issue.serverID, issue.fileName, i)\">YB</button></td>\r\n                            </tr>\r\n                            <tr *ngIf=\"issue.expanded\">\r\n                                <td id=\"yellowBox\" colspan=\"5\">\r\n                                    <span *ngIf=\"issue.yellowBox\">{{issue.yellowBox}}</span>\r\n                                    <div *ngIf=\"!issue.yellowBox\">\r\n                                        <span>Loading...</span>\r\n                                        <mat-spinner></mat-spinner>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n    </div>\r\n    </div>\r\n    <ng-template #loading>\r\n        <div class=\"p-1\" style=\"text-align:center;\">\r\n        <mat-spinner></mat-spinner>\r\n        <div><h5>Loading issues...</h5></div>\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serverlist/server-connect/server-connect.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serverlist/server-connect/server-connect.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"isLoading || serverListConn === undefined\">Loading\r\n    </ng-template>\r\n<ng-template [ngIf]=\"!isLoading\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n        <mat-tab-group>\r\n                <mat-tab label=\"VPN Connection\" class=\"mt-1\">\r\n                    <div class=\"col-2\">\r\n                        <label>VPN:</label>\r\n                        <label>VPN User:</label>\r\n                        <label>VPN Pass:</label>\r\n                    </div>\r\n                    <div class=\"col-3\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"VPN\" type=\"text\" readonly class=\"ml-1\" matTooltip=\"Click to copy\"\r\n                                   #vpnConnect [value]=\"serverListConn?.vpnConnect ? serverListConn?.vpnConnect : ''\" (click)=\"copyToClipboard(vpnConnect)\" />\r\n                        </mat-form-field>\r\n                        <input type=\"text\" readonly class=\"ml-1\" #vpnUser [value]=\"serverListConn?.vpnUser ? serverListConn?.vpnUser : ''\"\r\n                               (click)=\"copyToClipboard(vpnUser)\" matTooltip=\"Click to copy\" />\r\n                    \r\n                        <input type=\"text\" readonly class=\"ml-1\" #vpnPassword [value]=\"serverListConn?.vpnPassword ? serverListConn?.vpnPassword : ''\"\r\n                               (click)=\"copyToClipboard(vpnPassword)\" matTooltip=\"Click to copy\" />\r\n                    </div>\r\n                </mat-tab>\r\n            \r\n                <mat-tab label=\"Windows Connection\">\r\n                    <div class=\"col-12\">\r\n                        <label>WinDomain:</label>\r\n                        <input type=\"text\" readonly class=\"ml-1\" matTooltip=\"Click to copy\"\r\n                               #winDomain [value]=\"serverListConn?.winDomain ? serverListConn?.winDomain : ''\" (click)=\"copyToClipboard(serverListConn?.winDomain)\" />\r\n                        <label class=\"ml-1\">IP:</label>\r\n                        <input type=\"text\" readonly class=\"ml-1\" matTooltip=\"Click to copy\"\r\n                               #winDomain [value]=\"serverListConn?.rDPInternalIP ? serverListConn?.rDPInternalIP : ''\" (click)=\"copyToClipboard(serverListConn?.rDPInternalIP)\" />\r\n\r\n                        <label class=\"ml-1\">WinLogon:</label>\r\n                        <input type=\"text\" readonly class=\"ml-1\" #winLogon [value]=\"serverListConn?.winLogon ? serverListConn?.winLogon : ''\"\r\n                               (click)=\"copyToClipboard(serverListConn?.winLogon)\" matTooltip=\"Click to copy\" />\r\n                        <label class=\"ml-1\">WinPass:</label>\r\n                        <input type=\"text\" readonly class=\"ml-1\" #winPassword [value]=\"serverListConn?.winPassword ? serverListConn?.winPassword : ''\"\r\n                               (click)=\"copyToClipboard(serverListConn?.winPassword)\" matTooltip=\"Click to copy\" />\r\n\r\n                    </div>\r\n                </mat-tab>>\r\n            \r\n                <mat-tab label=\"Email\">\r\n                    <div class=\"col-12\">\r\n                        <label>Email1:</label>\r\n                        <input type=\"text\" readonly class=\"ml-1\" #email1 [value]=\"serverListConn?.email1 ? serverListConn?.email1 : ''\"\r\n                               (click)=\"copyToClipboard(email1)\" matTooltip=\"Click to copy\" />\r\n                        <label class=\"ml-1\">Email2:</label>\r\n                        <input type=\"text\" readonly class=\"ml-1\" #email2 [value]=\"serverListConn?.email2 ? serverListConn?.email2 : ''\"\r\n                               (click)=\"copyToClipboard(email2)\" matTooltip=\"Click to copy\" />\r\n                        <label class=\"ml-1\">Email3:</label>\r\n                        <input type=\"text\" readonly class=\"ml-1\" #email3 [value]=\"serverListConn?.email3 ? serverListConn?.email3 : ''\"\r\n                               (click)=\"copyToClipboard(email3)\" matTooltip=\"Click to copy\" />\r\n                        <label class=\"ml-1\">Email4:</label>\r\n                        <input type=\"text\" readonly class=\"ml-1\" #email4 [value]=\"serverListConn?.email4 ? serverListConn?.email4 : ''\"\r\n                               (click)=\"copyToClipboard(email4)\" matTooltip=\"Click to copy\" />\r\n\r\n                    </div>\r\n                </mat-tab>\r\n            \r\n        </mat-tab-group>\r\n        </div>\r\n    </div>\r\n     \r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serverlist/server-connect/server-connect.dialog.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serverlist/server-connect/server-connect.dialog.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Connection info</h1>\r\n<div mat-dialog-content>\r\n    \r\n        <server-connect [serverId]=\"serverId\"></server-connect>\r\n    \r\n</div>\r\n<div mat-dialog-actions align=\"center\">\r\n    <!--<button mat-button [mat-dialog-close]=\"data.columns\">Close</button>-->\r\n    <!--<button mat-button [mat-dialog-close]=\"data.colToConfig\">Ok</button>-->\r\n    <button mat-button (click)=\"onClick()\">Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serverlist/server-filter-version/server-filter-version.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serverlist/server-filter-version/server-filter-version.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"mt-2\">\r\n    <mat-select placeholder=\"Select {{labelInfo}} version\" [(ngModel)]=\"selected\" (selectionChange)=\"onChangeVersion()\">\r\n        <mat-option value=\"\">Show all</mat-option>\r\n        <mat-option *ngFor=\"let version of sortSrv.sortObject(versionInfo, 'sortV', false); let i = index\" [value]=\"version?.versionNum\">\r\n            <span>{{version?.versionDisplay}}</span><span class=\"badge badge-primary badge-pill ml-1\">{{version?.countV}}</span>\r\n        </mat-option>\r\n    </mat-select>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serverlist/server-filter/server-filter.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serverlist/server-filter/server-filter.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-1 p-1\">\r\n    <button class=\"btn btn-block btn-outline-primary m-a-2\" (click)=changeCategory(0) [class.active]=\"currentCategory==0\">\r\n        Show all\r\n    </button>\r\n    <button *ngFor=\"let cat of categories\" class=\"btn btn-outline-primary btn-block ma-2\"\r\n      (click)=changeCategory(cat.advServerCategoryID) [class.active]=\"cat.advServerCategoryID==currentCategory\" >\r\n        {{cat.description}}\r\n    </button>   \r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serverlist/server-top-navigator/server-navigator.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serverlist/server-top-navigator/server-navigator.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<input type=\"search\" id=\"searchBox\"  (input)=\"onSearchType($event.target.value)\" [placeholder]=\"!notIn ? 'Server name...' : 'Not server name...'\">\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serverlist/serverdashboard/serverdashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serverlist/serverdashboard/serverdashboard.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navContent container-fluid\" style=\"height:1000px;min-height:750px;width:auto\">\r\n    <!--Header row-->\r\n    <!-- Issue row -->\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-12\">\r\n            <issues></issues> <!-- Issue card-->\r\n        </div> <!-- column -->\r\n    </div>\r\n    <!-- End of issues-->\r\n    <!-- Server list-->\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-12\">\r\n            <serverlist></serverlist>\r\n        </div> <!-- column -->\r\n\r\n    </div> <!--row-->\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <serverversions></serverversions>\r\n        </div>\r\n    </div>\r\n    <button id=\"scrollButton\" [ngClass]=\"{'show-scroll': showScroll}\" (click)=\"scrollToTop()\" class=\"scroll-to-top\">\r\n        Scroll To Top\r\n    </button>\r\n</div> <!--navContent-->\r\n        <!--End of main content-->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serverlist/serverlist.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serverlist/serverlist.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-dark mb-0\" style=\"display:inline-block;\" id=\"accordionServer\">\r\n    <div *ngIf=\"!serverLstSrv.isLoading; else loading\">\r\n        <!-- Header-->\r\n        <div class=\"card-header\" id=\"serverHeading\">\r\n            <div class=\"cardTitle\">\r\n                <h5>\r\n                    {{cardTitle}}\r\n                    <i [ngClass]=\"getHeaderClass()\" data-toggle=\"collapse\" href=\"#collapseServerTable\" (click)=\"expanded = !expanded\"></i>\r\n                </h5>\r\n            </div>\r\n        </div>\r\n        <!--End of card header -->\r\n        <!--Server table-->\r\n        <div class=\"collapse\" id=\"collapseServerTable\" data-parent=\"#accordionServer\">\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"col-12 mt-1\">\r\n                    <button type=\"button\" data-toggle=\"collapse\" href=\"#filterServer\"><i class=\"fa fa-filter\" aria-hidden=\"true\"></i></button>\r\n                    <span class=\"ml-2\"><label>Last Refresh:&nbsp;&nbsp;{{ lastRefresh | date:'medium' }}</label></span>\r\n                    <mat-checkbox class=\"ml-4\" color=\"warn\" id=\"yellowBoxes\" [(ngModel)]=\"filterYellowBox\"\r\n                                  (change)=\"filterByYellowBox()\" matTooltip=\"Filter on servers\">\r\n                        Servers w/issues: {{serversWithIssues || 0}}\r\n                    </mat-checkbox>\r\n                    <span matTooltip=\"Configure columns\" class=\"ml-5\" (click)=\"openConfigDialog()\">\r\n                        <i id=\"configCols\" class=\"fa fa-align-justify\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n\r\n                <div class=\"col-12 mt-1 collapse\" id=\"filterServer\">\r\n                    <server-navigator></server-navigator>\r\n                    <server-navigator [notIn]=\"true\" class=\"ml-1\"></server-navigator>\r\n                </div>\r\n\r\n                <div class=\"col-12 mt-1\">\r\n                    <table id=\"serverTable\" class=\"table table-bordered table-hover\">\r\n                        <thead class=\"thead-dark\">\r\n                            <tr>\r\n                                <th *ngFor=\"let col of serverCols; let i=index\"\r\n                                    (click)=\"setSort(i)\"\r\n                                    [ngClass]=\"{'unsortable': !col.Sortable}\"\r\n                                    matTooltip={{col.toolTip}}>\r\n                                    {{col.caption}}<span [ngClass]=\"getSortClass(i)\"></span>\r\n                                </th>\r\n                                <th></th> <!-- Connect button -->\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let server of sortSrv.sortObject(serverList, currentSortColName, isAsc); let i=index\" trackBy=\"trackByFnc\"\r\n                                [ngClass]=\"{'table-danger': server.yellowBox}\" (click)=\"setClickedRow(i, server?.serverID)\" [class.active]=\"i == selectedRow\">\r\n                                <td *ngFor=\"let col of serverCols; let i=index\">\r\n                                    <div *ngIf=\"col.colName == 'serverID'\" class=\"dropdrown\">\r\n                                        {{server?.serverID}}\r\n                                        <button class=\"btn btn-secondary ml-1 dropdown-toggle float-right\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\"\r\n                                                aria-haspopup=\"true\" aria-expanded=\"false\" matTooltip=\"Actions\"></button>\r\n                                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                                            <button class=\"dropdown-item\" (click)=\"postServerCmd(server?.serverID, 'continue')\" type=\"button\">Send continue</button>\r\n                                            <button class=\"dropdown-item\" [routerLink]=\"['/events', server?.advServerID]\">View details</button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"col.colName !== 'serverID'\">{{ server[col.colName] }}</div>\r\n                                </td>\r\n                                <td><button class=\"btn btn-secondary\" (click)=\"openConnect()\"><i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i></button></td>\r\n                            </tr>\r\n                        </tbody> <!-- Table body -->\r\n                    </table> <!--Server list table-->\r\n                    </div>\r\n                </div> <!-->card -->\r\n            </div>\r\n    </div>\r\n    <ng-template #loading>\r\n        <div class=\"p-1\" style=\"text-align:center;\">\r\n            <mat-spinner></mat-spinner>\r\n            <div><h5>Loading servers...</h5></div>\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serverlist/serverversions/serverversions.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serverlist/serverversions/serverversions.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"card border-dark mb-0\" style=\"display:inline-block;\" id=\"accordionServerV\">\r\n    <div *ngIf=\"!isLoading; else loading\">\r\n        <!-- Header--> \r\n        <div class=\"card-header\" id=\"serverVHeading\"\r\n             href=\"#collapseServerVTable\">\r\n            <div class=\"cardTitle\">\r\n                <h5>\r\n                {{cardTitle}}\r\n                <i [ngClass]=\"getHeaderClass()\" data-toggle=\"collapse\" href=\"#collapseServerVTable\" (click)=\"expanded = !expanded\"></i>\r\n                </h5>\r\n            </div>\r\n        </div>\r\n        <!--End of card header -->\r\n        <!--Server table-->\r\n        <div class=\"collapse\" id=\"collapseServerVTable\" data-parent=\"#accordionServerV\">\r\n            <div class=\"card-body p-0\">\r\n                <button mat-raised-button color=\"primary\" class=\"mt-1 mb-1 ml-1\" (click)=\"clearFilter()\">Clear filter</button>\r\n                <table id=\"serverVTable\" class=\"table table-bordered table-hover\">\r\n                    <thead class=\"thead-dark\">\r\n                        <tr>\r\n                            <th *ngFor=\"let col of tableCols; let i=index\"\r\n                                (click)=\"setSort(i)\"\r\n                                [ngClass]=\"{'unsortable': !col.Sortable}\"\r\n                                matTooltip={{col.toolTip}}>\r\n                                {{col.caption}}<span [ngClass]=\"getSortClass(i)\"></span>\r\n                            </th>\r\n                       </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr class=\"table-info p-0\">\r\n                            <td *ngFor=\"let col of tableCols; let i=index\" class=\"align-middle\">\r\n                                <div *ngIf=\"isComboFilter(col)\">\r\n                                    <mat-form-field>\r\n                                        <mat-select placeholder=\"Select {{col.caption}}\" [(ngModel)]=\"col.filterValue\" (selectionChange)=\"setFilter()\">\r\n                                            <mat-option [value]=\"\">Show all</mat-option>\r\n                                            <mat-option *ngFor=\"let filter of col.filterValues\" [value]=\"filter\">\r\n                                                {{filter}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                \r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let version of sortSrv.sortObject(serverVersions, currentSortColName, isAsc); let i=index\" trackBy=\"trackByFnc\"\r\n                            [class.active]=\"i == selectedRow\" click=\"setRow(i)\">\r\n                            <td *ngFor=\"let col of tableCols; let i=index\">\r\n                                {{ version[col.colName] }}\r\n                            </td>\r\n                        </tr>\r\n                    </tbody> <!-- Table body -->\r\n                </table> <!--Server list table-->\r\n            </div> <!-->card -->\r\n        </div>\r\n        \r\n    </div>\r\n    <ng-template #loading>\r\n        <div class=\"p-1\" style=\"text-align:center;\">\r\n            <mat-spinner></mat-spinner>\r\n            <div><h5>Loading versions...</h5></div>\r\n        </div>\r\n    </ng-template>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serverlist/table/table.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serverlist/table/table.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table webTableStyle table-bordered table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <th *ngIf=\"multiRowSelect\"></th>\r\n            <ng-container *ngFor=\"let col of configurableCols; let i=index\">\r\n                <th (click)=\"setSort(i)\" [ngClass]=\"{'unsortable': !col.Sortable}\" matTooltip={{col.toolTip}}>\r\n                    {{col.caption}}<span [ngClass]=\"getSortClass(i)\"></span>\r\n                </th>\r\n            </ng-container>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let row of tableData; let i=index\">\r\n            <td *ngIf=\"multiRowSelect\"><input type=\"checkbox\" /></td>\r\n            <td *ngFor=\"let col of configurableCols; let j=index\">\r\n                {{ row[col.colName] }}\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _serverlist_serverlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serverlist/serverlist.component */ "./src/app/serverlist/serverlist.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _serverlist_serverlist_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serverlist/serverlist.module */ "./src/app/serverlist/serverlist.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _serverlist_serverlist_component__WEBPACK_IMPORTED_MODULE_6__["ServerListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _serverlist_serverlist_component__WEBPACK_IMPORTED_MODULE_6__["ServerListComponent"], pathMatch: 'full' },
                { path: 'serverlist', component: _serverlist_serverlist_component__WEBPACK_IMPORTED_MODULE_6__["ServerListComponent"] }
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
            _serverlist_serverlist_module__WEBPACK_IMPORTED_MODULE_8__["ServerlistModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/serverlist/dialogs/confirm/confirmdialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/serverlist/dialogs/confirm/confirmdialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmedDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmedDialog", function() { return ConfirmedDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let ConfirmedDialog = class ConfirmedDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
};
ConfirmedDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
];
ConfirmedDialog = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'confirmdialog',
        template: __webpack_require__(/*! raw-loader!./confirmdialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/serverlist/dialogs/confirm/confirmdialog.component.html")
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
], ConfirmedDialog);



/***/ }),

/***/ "./src/app/serverlist/dialogs/slconfigdialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/serverlist/dialogs/slconfigdialog.component.ts ***!
  \****************************************************************/
/*! exports provided: ServerListConfigDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerListConfigDialog", function() { return ServerListConfigDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let ServerListConfigDialog = class ServerListConfigDialog {
    constructor(dialogRef, columns) {
        this.dialogRef = dialogRef;
        this.columns = columns;
    }
    get colToConfig() {
        return this.columns.filter(x => x.tableColumns.nonConfigurable == false);
    }
    onClick() {
        this.dialogRef.close();
    }
    setAll(set) {
        this.colToConfig.forEach(col => {
            col.visible = set;
        });
    }
    clearAll() {
        this.setAll(false);
    }
    selectAll() {
        this.setAll(true);
    }
};
ServerListConfigDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
];
ServerListConfigDialog = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'slconfigdialog',
        template: __webpack_require__(/*! raw-loader!./slconfigdialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/serverlist/dialogs/slconfigdialog.component.html")
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Array])
], ServerListConfigDialog);



/***/ }),

/***/ "./src/app/serverlist/helper/versioninfo.ts":
/*!**************************************************!*\
  !*** ./src/app/serverlist/helper/versioninfo.ts ***!
  \**************************************************/
/*! exports provided: versionInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versionInfo", function() { return versionInfo; });
class versionInfo {
    constructor(versionNum, countV, sortV) {
        this.versionNum = versionNum;
        this.countV = countV;
        this.sortV = sortV;
    }
    ;
    get versionDisplay() {
        if (this.versionNum == 'null') {
            return "None";
        }
        else {
            return this.versionNum;
        }
    }
}
versionInfo.ctorParameters = () => [
    { type: String },
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/app/serverlist/issues/issues.component.css":
/*!********************************************************!*\
  !*** ./src/app/serverlist/issues/issues.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#issueTable {\r\n    width:100%;\r\n}\r\n.cardSmall {\r\n    cursor: pointer;\r\n    \r\n}\r\n.card-header {\r\n    width: 100%;\r\n    \r\n}\r\n.cardBig {\r\n    \r\n}\r\n.fa-vc {\r\n    line-height: inherit !important;\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVybGlzdC9pc3N1ZXMvaXNzdWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlOztBQUVuQjtBQUVBO0lBQ0ksV0FBVzs7QUFFZjtBQUNBOztBQUVBO0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcmxpc3QvaXNzdWVzL2lzc3Vlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNpc3N1ZVRhYmxlIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLmNhcmRTbWFsbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbn1cclxuLmNhcmRCaWcge1xyXG4gICAgXHJcbn1cclxuXHJcbi5mYS12YyB7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/serverlist/issues/issues.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/serverlist/issues/issues.component.ts ***!
  \*******************************************************/
/*! exports provided: IssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesComponent", function() { return IssuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository */ "./src/app/serverlist/repository.ts");
/* harmony import */ var _services_sort_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sort.service */ "./src/app/serverlist/services/sort.service.ts");
/* harmony import */ var _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../table/table-column-config */ "./src/app/serverlist/table/table-column-config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let IssuesComponent = class IssuesComponent {
    constructor(sortSrv, repo, snackBar) {
        this.sortSrv = sortSrv;
        this.repo = repo;
        this.snackBar = snackBar;
        this._issuesDataFilter = [];
        this.expanded = false;
        this.issueCount = 0;
        this.$issueCount = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.issueOpen = false;
        this.lastRefresh = Date.now();
        this.isRefreshing = false;
        this.timerSub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.deleteCount = 0;
        this._tableHeader = [
            //{
            //    sortDir: SortDirection.NONE, visible: true, sorted: false, orderBy: 0, tableColumns:
            //        new TableColumnConfig({ colName: "selected", caption: '', Sortable: false })
            //},
            {
                sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].NONE, visible: true, sorted: false, orderBy: 0, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__["TableColumnConfig"]({ colName: "serverID", caption: 'ServerID', Sortable: true })
            },
            {
                sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].NONE, visible: true, sorted: false, orderBy: 1, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__["TableColumnConfig"]({ colName: "fileName", caption: 'File name', Sortable: true })
            },
            {
                sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].DESC, visible: true, sorted: true, orderBy: 2, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__["TableColumnConfig"]({ colName: "dateReceived", caption: 'Date received', Sortable: true, dataType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__["DataType"].DATE_TIME })
            },
            {
                sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].NONE, visible: true, sorted: false, orderBy: 3, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__["TableColumnConfig"]({ colName: "serverIP", caption: 'ServerIP', Sortable: true })
            }
        ];
        this._serverFilter = '';
    }
    ngOnInit() {
        this._tableConfig = { tableColConfig: this._tableHeader, currentSortCol: 0, currentSortColName: "serverID" };
        this._refreshIssueCount();
        this._refreshData();
    }
    get tableHeader() {
        return this._tableConfig.tableColConfig;
    }
    get serverFilter() {
        return this._serverFilter;
    }
    set serverFilter(fil) {
        this._serverFilter = fil;
    }
    get issuesData() {
        return this._issuesDataFilter;
    }
    getHeaderClass() {
        if (!this.expanded) {
            return "fa fa-caret-down fa-vc";
        }
        else {
            return "fa fa-caret-up fa-vc";
        }
    }
    deleteSelected() {
        this.deleteCount = 0;
        let selIssues = this._issuesDataFilter.filter(sel => sel.recordSelected == true)
            .map(val => val.issueID);
        this.deleteCount = selIssues.length;
        if (this.deleteCount > 0) {
            this.timerSub.unsubscribe();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(selIssues.map(id => this.repo.deleteIssue(id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(val => val), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this._deleteComplete())).subscribe();
        }
        else {
            this._openSnackBar("Nothing to delete");
        }
    }
    loadYellowBox(serverId, filePath, row) {
        this._issuesDataFilter[row].expanded = !this._issuesDataFilter[row].expanded;
        if (!this._issuesDataFilter[row].yellowBox) {
            this.repo.getIssueYB(serverId, filePath).subscribe(val => {
                if (this._issuesDataFilter[row]) {
                    this._issuesDataFilter[row].yellowBox = val.yellowBox;
                }
            });
        }
    }
    sendContinue(serverId) {
        this.repo.postServerCmd(serverId, 'continue')
            .subscribe(result => {
            console.log(result);
            this._openSnackBar(`Continue sent to ${serverId}`);
        });
    }
    _deleteComplete() {
        this._openSnackBar(`${this.deleteCount} issues deleted`);
        this._refreshData();
        this._refreshIssueCount();
    }
    selectAll($event) {
        this._issuesDataFilter.forEach(issue => {
            issue.recordSelected = true;
        });
    }
    refreshIssues() {
        this._refreshData();
    }
    _refreshData() {
        this.isRefreshing = true;
        this.repo.getIssues().subscribe(data => {
            this._issuesData = data;
            this._issuesDataFilter = data;
            this.serversWithIssues = this._issuesData.filter((obj, pos, arr) => {
                return arr.map(mapObj => mapObj.serverID).indexOf(obj.serverID) === pos;
            }).map(val => val.serverID).sort();
            this.lastRefresh = Date.now();
            this.isRefreshing = false;
        });
    }
    selectChange(event) {
        this._applyFilter();
    }
    _applyFilter() {
        if (this.serverFilter) {
            this._issuesDataFilter = this._issuesData.filter(x => x.serverID == this.serverFilter);
        }
        else {
            this._issuesDataFilter = this._issuesData;
        }
    }
    _refreshIssueCount() {
        this.timerSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(30000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => this.repo.getIssueCount())).subscribe(response => this.issueCount = response ? response.issueCount : 0);
    }
    _openSnackBar(msg) {
        let config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarConfig"]();
        config.duration = 500;
        this.snackBar.open(msg, undefined, config);
    }
    isColDateTime(index) {
        if (this.tableHeader[index].tableColumns.dataType === _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__["DataType"].DATE_TIME) {
            return true;
        }
        else {
            return false;
        }
    }
    get currentSortColName() {
        return this._tableConfig.currentSortColName;
    }
    get tableCols() {
        return this.tableHeader
            .filter(cols => cols.visible == true && cols.tableColumns.systemCol === false)
            .sort(col => col.orderBy)
            .map(colObj => colObj.tableColumns);
    }
    openIssueCard() {
        this.issueOpen = !this.issueOpen;
    }
    ngOnDestroy() {
        this.timerSub.unsubscribe();
    }
    getSortClass(colIndex) {
        return _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__["TableColHepler"].getSortClass(this.tableHeader, colIndex);
    }
    setSort(col) {
        _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__["TableHelper"].setSort(this._tableConfig, col);
    }
    get isAsc() {
        return _table_table_column_config__WEBPACK_IMPORTED_MODULE_3__["TableColHepler"].isAsc(this.tableHeader[this._tableConfig.currentSortCol].sortDir);
    }
    get sortedColumn() {
        return this.tableHeader[this._tableConfig.currentSortCol].tableColumns.sortCol;
    }
    getKey(index, issue) {
        return issue.issueID;
    }
};
IssuesComponent.ctorParameters = () => [
    { type: _services_sort_service__WEBPACK_IMPORTED_MODULE_2__["SortService"] },
    { type: _repository__WEBPACK_IMPORTED_MODULE_1__["Repository"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Boolean)
], IssuesComponent.prototype, "issueOpen", void 0);
IssuesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'issues',
        template: __webpack_require__(/*! raw-loader!./issues.component.html */ "./node_modules/raw-loader/index.js!./src/app/serverlist/issues/issues.component.html"),
        styles: [__webpack_require__(/*! ./issues.component.css */ "./src/app/serverlist/issues/issues.component.css")]
    }),
    __metadata("design:paramtypes", [_services_sort_service__WEBPACK_IMPORTED_MODULE_2__["SortService"], _repository__WEBPACK_IMPORTED_MODULE_1__["Repository"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
], IssuesComponent);



/***/ }),

/***/ "./src/app/serverlist/repository.ts":
/*!******************************************!*\
  !*** ./src/app/serverlist/repository.ts ***!
  \******************************************/
/*! exports provided: Repository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repository", function() { return Repository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Http, RequestMethod, Request, Response } from '@angular/http';



const serversUrl = '/api/servers';
const serverListUrl = '/api/serverListStartup';
const serverListConnect = '/api/cpr/connect';
const serverListUpdate = '/api/serverListStartup/update';
//const serverListStateUrl = '/api/serverListState';
const serverCategoryUrl = '/api/category';
const serverNameUrl = '/api/servers/name';
const detailTypeCodesUrl = '/api/statsDetail/getCodes';
const detailStatsUrl = '/api/statsDetail/getStats';
const eventsUrl = '/api/advEvents';
const eventsLatestUrl = '/api/advEvents/Latest';
const eventTypesUrl = '/api/advEvents/eventTypes';
const crossFootUrl = '/api/advCrossfoot';
const subEventsUrl = '/api/advSubEvents';
const fileLinkUrl = '/api/fileLink';
const cprIssuesUrl = '/api/cpr/issues';
const cprIssuesCountUrl = '/api/cpr/issues/count';
const cprIssuesYBUrl = '/api/cpr/issues/yellowBox';
const cprServerCmd = '/api/serverCmd';
const cprServerLstVersion = '/api/serverListVersion';
let Repository = class Repository {
    constructor(http) {
        this.http = http;
    }
    getFileLinkPromise() {
        const url = fileLinkUrl;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getFileLinkPromise', [])));
    }
    getServerList() {
        const url = serverListUrl;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getServerList', [])));
    }
    getServerListVersion() {
        const url = cprServerLstVersion;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getServerListVersion', [])));
    }
    getServerListUpdate() {
        const url = serverListUrl;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getServerListUpdate', [])));
    }
    getServerListConn(serverId) {
        const url = serverListConnect + '/' + serverId;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getServerListConn', [])));
    }
    getServersPromise() {
        const url = serversUrl;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getServersPromise', [])));
    }
    getServerName(serverId) {
        const url = serverNameUrl + '/' + serverId;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getServerName', [])));
    }
    postServerCmd(serverName, command) {
        const url = cprServerCmd;
        return this.http.post(url, { serverId: serverName, command: command })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postServerCmd', [])));
    }
    getIssues() {
        const url = cprIssuesUrl;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getIssues', [])));
    }
    getIssueYB(serverId, filePath) {
        const url = `${cprIssuesYBUrl}/${serverId}/${filePath}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getIssueYB')));
    }
    deleteIssue(id) {
        const url = `${cprIssuesUrl}/${id}`;
        return this.http.delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteIssue', [])));
    }
    getIssueCount() {
        const url = cprIssuesCountUrl;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getIssueCount', [])));
    }
    getEventsPromise(serverId, latest) {
        if (latest) {
            var url = eventsLatestUrl + '/' + serverId;
        }
        else {
            var url = eventsUrl + '/' + serverId;
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEventsPromise', [])));
    }
    getSubEventsPromise(eventId) {
        const url = subEventsUrl + '/' + eventId;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getSubEventsPromise', [])));
    }
    getCrossFootPromise(eventId) {
        const url = crossFootUrl + '/' + eventId;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCrossFootPromise', [])));
    }
    getStatCodesPromise() {
        const url = detailTypeCodesUrl;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getStatCodesPromise', [])));
    }
    getStatDetailsPromise(detailType) {
        const url = detailStatsUrl + '/' + detailType;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getStatDetailsPromise', [])));
    }
    getCategoriesPromise() {
        const url = serverCategoryUrl;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCategoriesPromise', [])));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
};
Repository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
Repository = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], Repository);



/***/ }),

/***/ "./src/app/serverlist/server-connect/server-connect.component.css":
/*!************************************************************************!*\
  !*** ./src/app/serverlist/server-connect/server-connect.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.tblConnect {\r\n    border-collapse: collapse;\r\n    border: none;\r\n    display: inline-block;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n.tblConnect td {\r\n    font-size: 75%;\r\n}\r\n\r\n\r\n.table-hover > tbody > tr.select-row:hover > td,\r\n.no-select > td {\r\n    background-color: white;\r\n}*/\r\n\r\n.field_set {\r\n    border-style: solid;\r\n    border-width: 1px;\r\n}\r\n\r\ninput[type=text] {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVybGlzdC9zZXJ2ZXItY29ubmVjdC9zZXJ2ZXItY29ubmVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFOztBQUVGO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvc2VydmVybGlzdC9zZXJ2ZXItY29ubmVjdC9zZXJ2ZXItY29ubmVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoudGJsQ29ubmVjdCB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnRibENvbm5lY3QgdGQge1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbn1cclxuXHJcblxyXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyLnNlbGVjdC1yb3c6aG92ZXIgPiB0ZCxcclxuLm5vLXNlbGVjdCA+IHRkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Ki9cclxuXHJcbi5maWVsZF9zZXQge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/serverlist/server-connect/server-connect.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/serverlist/server-connect/server-connect.component.ts ***!
  \***********************************************************************/
/*! exports provided: ServerConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerConnectComponent", function() { return ServerConnectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository */ "./src/app/serverlist/repository.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ServerConnectComponent = class ServerConnectComponent {
    constructor(snackBar, repo) {
        this.snackBar = snackBar;
        this.repo = repo;
        this.serverListConn = [];
        this.isLoading = false;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    ngOnInit() {
        this.sub = this.repo.getServerListConn(this.serverId).subscribe(conn => {
            this.serverListConn = conn;
        });
    }
    //ngOnChanges(changes: SimpleChanges) {
    //    for (let property in changes) {
    //        if (property === 'serverId') {
    //            if (changes[property].previousValue !== changes[property].currentValue) {
    //                this.refreshData();
    //            }
    //        }
    //    }
    //}
    //refreshData() {
    //    this.isLoading = true;
    //    this.sub = this.repo.getServerListConn(this.serverId).subscribe(conn => {
    //        this.serverListConn = conn;
    //        this.isLoading = false;
    //    });
    //}
    //ngOnDestroy() {
    //    this.sub.unsubscribe();
    //}
    copyToClipboard(item) {
        item.select();
        document.execCommand('copy');
        item.setSelectionRange(0, 0);
        this.openSnackBar('Copied');
    }
    openSnackBar(msg) {
        let config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        config.duration = 500;
        this.snackBar.open(msg, undefined, config);
    }
};
ServerConnectComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] },
    { type: _repository__WEBPACK_IMPORTED_MODULE_2__["Repository"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], ServerConnectComponent.prototype, "serverId", void 0);
ServerConnectComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'server-connect',
        template: __webpack_require__(/*! raw-loader!./server-connect.component.html */ "./node_modules/raw-loader/index.js!./src/app/serverlist/server-connect/server-connect.component.html"),
        styles: [__webpack_require__(/*! ./server-connect.component.css */ "./src/app/serverlist/server-connect/server-connect.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _repository__WEBPACK_IMPORTED_MODULE_2__["Repository"]])
], ServerConnectComponent);



/***/ }),

/***/ "./src/app/serverlist/server-connect/server-connect.dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/serverlist/server-connect/server-connect.dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ServerConnectDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerConnectDialog", function() { return ServerConnectDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let ServerConnectDialog = class ServerConnectDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.serverId = data.serverId;
    }
    onClick() {
        this.dialogRef.close();
    }
};
ServerConnectDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
];
ServerConnectDialog = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'server-connect-dialog',
        template: __webpack_require__(/*! raw-loader!./server-connect.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/serverlist/server-connect/server-connect.dialog.component.html")
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
], ServerConnectDialog);



/***/ }),

/***/ "./src/app/serverlist/server-filter-version/server-filter-version.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/serverlist/server-filter-version/server-filter-version.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcmxpc3Qvc2VydmVyLWZpbHRlci12ZXJzaW9uL3NlcnZlci1maWx0ZXItdmVyc2lvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/serverlist/server-filter-version/server-filter-version.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/serverlist/server-filter-version/server-filter-version.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ServerFilterVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerFilterVersion", function() { return ServerFilterVersion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_sort_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sort.service */ "./src/app/serverlist/services/sort.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ServerFilterVersion = class ServerFilterVersion {
    constructor(sortSrv) {
        this.sortSrv = sortSrv;
        this.versionInfo = [];
        this.versionSel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = '';
    }
    ngOnInit() {
    }
    onChangeVersion() {
        this.versionSel.emit(this.selected);
    }
    resetFilter() {
        this.selected = '';
        this.onChangeVersion();
    }
};
ServerFilterVersion.ctorParameters = () => [
    { type: _services_sort_service__WEBPACK_IMPORTED_MODULE_1__["SortService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], ServerFilterVersion.prototype, "versionInfo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], ServerFilterVersion.prototype, "labelInfo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], ServerFilterVersion.prototype, "versionSel", void 0);
ServerFilterVersion = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'server-filter-version',
        template: __webpack_require__(/*! raw-loader!./server-filter-version.component.html */ "./node_modules/raw-loader/index.js!./src/app/serverlist/server-filter-version/server-filter-version.component.html"),
        styles: [__webpack_require__(/*! ./server-filter-version.component.css */ "./src/app/serverlist/server-filter-version/server-filter-version.component.css")]
    }),
    __metadata("design:paramtypes", [_services_sort_service__WEBPACK_IMPORTED_MODULE_1__["SortService"]])
], ServerFilterVersion);



/***/ }),

/***/ "./src/app/serverlist/server-filter/server-filter.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/serverlist/server-filter/server-filter.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcmxpc3Qvc2VydmVyLWZpbHRlci9zZXJ2ZXItZmlsdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/serverlist/server-filter/server-filter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/serverlist/server-filter/server-filter.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServerFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerFilterComponent", function() { return ServerFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository */ "./src/app/serverlist/repository.ts");
/* harmony import */ var _services_serverlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/serverlist.service */ "./src/app/serverlist/services/serverlist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ServerFilterComponent = class ServerFilterComponent {
    constructor(repo, cd, serverLstSrv) {
        this.repo = repo;
        this.cd = cd;
        this.serverLstSrv = serverLstSrv;
        this.catChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentCategory = 0;
        this.serverCats = [];
    }
    ngOnInit() {
        this.refreshData();
    }
    refreshData() {
        this.repo.getCategoriesPromise().subscribe(res => {
            this.serverCats = res;
            this.cd.markForCheck();
        });
    }
    get categories() {
        return this.serverCats;
    }
    changeCategory(categoryId) {
        this.currentCategory = categoryId;
        this.catChange.emit(this.currentCategory);
    }
};
ServerFilterComponent.ctorParameters = () => [
    { type: _repository__WEBPACK_IMPORTED_MODULE_1__["Repository"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _services_serverlist_service__WEBPACK_IMPORTED_MODULE_2__["ServerListSrv"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], ServerFilterComponent.prototype, "catChange", void 0);
ServerFilterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'server-filter',
        template: __webpack_require__(/*! raw-loader!./server-filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/serverlist/server-filter/server-filter.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./server-filter.component.css */ "./src/app/serverlist/server-filter/server-filter.component.css")]
    }),
    __metadata("design:paramtypes", [_repository__WEBPACK_IMPORTED_MODULE_1__["Repository"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _services_serverlist_service__WEBPACK_IMPORTED_MODULE_2__["ServerListSrv"]])
], ServerFilterComponent);



/***/ }),

/***/ "./src/app/serverlist/server-top-navigator/server-navigator.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/serverlist/server-top-navigator/server-navigator.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=search]::-webkit-search-cancel-button {\r\n    -webkit-appearance: searchfield-cancel-button;\r\n}\r\n\r\n#searchBox {\r\n    padding: 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVybGlzdC9zZXJ2ZXItdG9wLW5hdmlnYXRvci9zZXJ2ZXItbmF2aWdhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2VydmVybGlzdC9zZXJ2ZXItdG9wLW5hdmlnYXRvci9zZXJ2ZXItbmF2aWdhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBzZWFyY2hmaWVsZC1jYW5jZWwtYnV0dG9uO1xyXG59XHJcblxyXG4jc2VhcmNoQm94IHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/serverlist/server-top-navigator/server-navigator.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/serverlist/server-top-navigator/server-navigator.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ServerNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerNavigatorComponent", function() { return ServerNavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_serverlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/serverlist.service */ "./src/app/serverlist/services/serverlist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ServerNavigatorComponent = class ServerNavigatorComponent {
    constructor(serverLstSrv) {
        this.serverLstSrv = serverLstSrv;
        this.searchString = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notIn = false;
        this.searchChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(e => this.searchString.emit(e));
    }
    //changeSearchString(search: string) {
    //    this.searchString.pipe(debouceTime(200)).emit(search);
    //}
    onSearchType(value) {
        this.searchChanged.next(value);
        if (this.notIn) {
            this.serverLstSrv.filterNotByString(value);
        }
        else {
            this.serverLstSrv.filterByString(value);
        }
    }
};
ServerNavigatorComponent.ctorParameters = () => [
    { type: _services_serverlist_service__WEBPACK_IMPORTED_MODULE_3__["ServerListSrv"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], ServerNavigatorComponent.prototype, "searchString", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], ServerNavigatorComponent.prototype, "notIn", void 0);
ServerNavigatorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'server-navigator',
        template: __webpack_require__(/*! raw-loader!./server-navigator.component.html */ "./node_modules/raw-loader/index.js!./src/app/serverlist/server-top-navigator/server-navigator.component.html"),
        styles: [__webpack_require__(/*! ./server-navigator.component.css */ "./src/app/serverlist/server-top-navigator/server-navigator.component.css")]
    }),
    __metadata("design:paramtypes", [_services_serverlist_service__WEBPACK_IMPORTED_MODULE_3__["ServerListSrv"]])
], ServerNavigatorComponent);



/***/ }),

/***/ "./src/app/serverlist/serverdashboard/serverdashboard.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/serverlist/serverdashboard/serverdashboard.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.scroll-to-top {\r\n    position: fixed;\r\n    bottom: 15px;\r\n    right: 15px;\r\n    opacity: 0;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.show-scroll {\r\n    opacity: 1;\r\n}\r\n\r\n#scrollButton {\r\n    background: black;\r\n    color:white;\r\n    padding:20px;\r\n    border:none;\r\n    cursor:pointer;\r\n    border-radius: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVybGlzdC9zZXJ2ZXJkYXNoYm9hcmQvc2VydmVyZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2VydmVybGlzdC9zZXJ2ZXJkYXNoYm9hcmQvc2VydmVyZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNjcm9sbC10by10b3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNob3ctc2Nyb2xsIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbiNzY3JvbGxCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/serverlist/serverdashboard/serverdashboard.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/serverlist/serverdashboard/serverdashboard.component.ts ***!
  \*************************************************************************/
/*! exports provided: ServerDashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerDashBoardComponent", function() { return ServerDashBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ServerDashBoardComponent = class ServerDashBoardComponent {
    constructor() {
        this.showScrollHeight = 300;
        this.hideScrollHeight = 10;
    }
    onWindowScroll() {
        if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
            this.showScroll = true;
        }
        else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
            this.showScroll = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 5));
            }
        })();
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServerDashBoardComponent.prototype, "onWindowScroll", null);
ServerDashBoardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'serverdashboard',
        template: __webpack_require__(/*! raw-loader!./serverdashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/serverlist/serverdashboard/serverdashboard.component.html"),
        styles: [__webpack_require__(/*! ./serverdashboard.component.css */ "./src/app/serverlist/serverdashboard/serverdashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ServerDashBoardComponent);



/***/ }),

/***/ "./src/app/serverlist/serverlist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/serverlist/serverlist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#serverTable {\r\n    table-layout: auto;\r\n    float: left;\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n    display: block;\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    \r\n}\r\n\r\n.fa-vc {\r\n    line-height: inherit !important;\r\n    cursor: pointer;\r\n}\r\n\r\n.cardIcon {\r\n    vertical-align: bottom;\r\n}\r\n\r\n#serverTableCard {\r\n    width: auto;\r\n}\r\n\r\n/*table thead tr {\r\n    text-decoration:underline;\r\n    cursor: pointer;\r\n    background-color: lightslategrey;\r\n}*/\r\n\r\n#configCols {\r\n    cursor: pointer;\r\n}\r\n\r\n.plusMinus {\r\n    cursor: pointer;\r\n}\r\n\r\n#serverTable thead tr {\r\n    cursor: pointer;\r\n}\r\n\r\nth.unsortable {\r\n    cursor: default;\r\n}\r\n\r\n#serverTable tr:hover {\r\n    background-color: #ffff99;\r\n    color: black;\r\n}\r\n\r\n#serverTable tr.active {\r\n    border-left: 2px solid #007aeb;\r\n    border-right: 2px solid #007aeb;\r\n}\r\n\r\n#serverTable tr.active td {\r\n    /*background-color: #007bff !important;*/\r\n    background-color: #007aeb;\r\n    color: #fff;\r\n    border-top: 2px solid #007aeb;\r\n    border-bottom: 2px solid #007aeb;\r\n    \r\n}\r\n\r\n.table-hover > tbody > tr.select-row:hover > td,\r\n.clsSubServerList > td {\r\n    background-color: white;\r\n}\r\n\r\n.pointer {\r\n    cursor: pointer;\r\n}\r\n\r\n#labelInfo {\r\n    font-weight: bold;\r\n}\r\n\r\n/*#refreshCheck {\r\n    align-content:center;\r\n    padding: 20px;\r\n}*/\r\n\r\n#supportissues {\r\n    color: red;\r\n    align-content: center;\r\n}\r\n\r\n/*#yellowBoxes {\r\n    color: red;\r\n    font-weight: 800;\r\n}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVybGlzdC9zZXJ2ZXJsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCx5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7Ozs7RUFJRTs7QUFDRjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwrQkFBK0I7QUFDbkM7O0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsZ0NBQWdDOztBQUVwQzs7QUFFQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjtJQUNJLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7OztFQUdFIiwiZmlsZSI6InNyYy9hcHAvc2VydmVybGlzdC9zZXJ2ZXJsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VydmVyVGFibGUge1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5mYS12YyB7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJkSWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcblxyXG5cclxuI3NlcnZlclRhYmxlQ2FyZCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG4vKnRhYmxlIHRoZWFkIHRyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcclxufSovXHJcbiNjb25maWdDb2xzIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBsdXNNaW51cyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3NlcnZlclRhYmxlIHRoZWFkIHRyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudGgudW5zb3J0YWJsZSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbiNzZXJ2ZXJUYWJsZSB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjk5O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jc2VydmVyVGFibGUgdHIuYWN0aXZlIHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwN2FlYjtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDdhZWI7XHJcbn1cclxuI3NlcnZlclRhYmxlIHRyLmFjdGl2ZSB0ZCB7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FlYjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDdhZWI7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwN2FlYjtcclxuICAgIFxyXG59XHJcblxyXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyLnNlbGVjdC1yb3c6aG92ZXIgPiB0ZCxcclxuLmNsc1N1YlNlcnZlckxpc3QgPiB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jbGFiZWxJbmZvIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiNyZWZyZXNoQ2hlY2sge1xyXG4gICAgYWxpZ24tY29udGVudDpjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59Ki9cclxuXHJcbiNzdXBwb3J0aXNzdWVzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qI3llbGxvd0JveGVzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59Ki9cclxuIl19 */"

/***/ }),

/***/ "./src/app/serverlist/serverlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/serverlist/serverlist.component.ts ***!
  \****************************************************/
/*! exports provided: ServerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerListComponent", function() { return ServerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repository */ "./src/app/serverlist/repository.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/filter.service */ "./src/app/serverlist/services/filter.service.ts");
/* harmony import */ var _services_sort_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/sort.service */ "./src/app/serverlist/services/sort.service.ts");
/* harmony import */ var _table_table_column_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/table-column-config */ "./src/app/serverlist/table/table-column-config.ts");
/* harmony import */ var _server_filter_version_server_filter_version_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server-filter-version/server-filter-version.component */ "./src/app/serverlist/server-filter-version/server-filter-version.component.ts");
/* harmony import */ var _dialogs_slconfigdialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogs/slconfigdialog.component */ "./src/app/serverlist/dialogs/slconfigdialog.component.ts");
/* harmony import */ var _dialogs_confirm_confirmdialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialogs/confirm/confirmdialog.component */ "./src/app/serverlist/dialogs/confirm/confirmdialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _serverlist_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./serverlist.state */ "./src/app/serverlist/serverlist.state.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _server_connect_server_connect_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./server-connect/server-connect.dialog.component */ "./src/app/serverlist/server-connect/server-connect.dialog.component.ts");
/* harmony import */ var _services_serverlist_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/serverlist.service */ "./src/app/serverlist/services/serverlist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














let ServerListComponent = class ServerListComponent {
    constructor(repo, router, filterSrv, sortSrv, confirmDialog, serverLstState, configDialog, connectDialog, serverLstSrv, ref) {
        this.repo = repo;
        this.router = router;
        this.filterSrv = filterSrv;
        this.sortSrv = sortSrv;
        this.confirmDialog = confirmDialog;
        this.serverLstState = serverLstState;
        this.configDialog = configDialog;
        this.connectDialog = connectDialog;
        this.serverLstSrv = serverLstSrv;
        this.ref = ref;
        this.expanded = false;
        this.serverListPersist = [];
        this.isLoading = false;
        this.filterYellowBox = false;
        this.connectCardOpen = false;
        this.selectedRow = 0;
        this.pollingTimer = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"]();
        this._lastRefreshSub = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"]();
        this.refreshOn = true;
    }
    ngOnInit() {
        this._serverTableConfig = { tableColConfig: _serverlist_state__WEBPACK_IMPORTED_MODULE_10__["ServerColumnState"].getColumns(), currentSortCol: 0, currentSortColName: "serverID" };
        //this._loadState();
        this._lastRefreshSub = this.serverLstSrv.lastRefresh.subscribe(result => {
            this._lastRefresh = result;
            this.ref.markForCheck();
        });
        this.serverLstSrv.loadData();
        this.serverLstSrv.serverList.subscribe(result => {
            this.serversFiltered = result;
            this.ref.markForCheck();
        });
        this.pollingTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["interval"])(30000).subscribe(() => this._refreshData());
    }
    //set currentSortCol(index: number) {
    //    this._serverTableConfig.currentSortCol = index;
    //}
    get currentSortCol() {
        return this._serverTableConfig.currentSortCol;
    }
    get serverList() {
        return this.serversFiltered;
    }
    get currentSortColName() {
        return this._serverTableConfig.currentSortColName;
    }
    get serverListColumns() {
        return this._serverTableConfig.tableColConfig;
    }
    get isFiltered() {
        return this.serverLstSrv.isFiltered;
    }
    getHeaderClass() {
        if (!this.expanded) {
            return "fa fa-caret-down fa-vc";
        }
        else {
            return "fa fa-caret-up fa-vc";
        }
    }
    get cardTitle() {
        if (this.serverLstSrv.isFiltered) {
            return `Server List (${this.serversFiltered.length}) *Filtered`;
        }
        else {
            return `Server List (${this.serversFiltered.length})`;
        }
    }
    get isAsc() {
        return _table_table_column_config__WEBPACK_IMPORTED_MODULE_5__["TableColHepler"].isAsc(this.serverListColumns[this.currentSortCol].sortDir);
    }
    //get sortedColumn(): string {
    //    return this.serverListColumns[this.currentSortCol].tableColumns.sortCol;
    //}
    get serverCols() {
        return this.serverListColumns.filter(cols => cols.visible == true).map(colObj => colObj.tableColumns);
    }
    get serversWithIssues() {
        return this.serverLstSrv.serversWithIssues;
    }
    get lastRefresh() {
        return this._lastRefresh;
    }
    get issuesClass() {
        if (this.serverLstSrv.serversWithIssues > 0) {
            return 'bg-danger text-white';
        }
        else {
            return 'bg-info text-black';
        }
    }
    openConnect() {
        this.connectCardOpen = !this.connectCardOpen;
        const config = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"]();
        config.data = { serverId: this.selectedServer };
        this.pollingTimer.unsubscribe();
        const dialogRef = this.configDialog.open(_server_connect_server_connect_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ServerConnectDialog"], config);
        dialogRef.afterClosed().subscribe(close => {
            this._refreshData();
            this.ref.detectChanges();
            console.log('Connection dialog closed');
        });
    }
    openConfigDialog() {
        this.pollingTimer.unsubscribe();
        const dialogRef = this.configDialog.open(_dialogs_slconfigdialog_component__WEBPACK_IMPORTED_MODULE_7__["ServerListConfigDialog"], { data: this.serverListColumns });
        dialogRef.afterClosed().subscribe(close => {
            _serverlist_state__WEBPACK_IMPORTED_MODULE_10__["ServerColumnState"].saveColumns(this.serverListColumns);
            this._refreshData();
        });
    }
    //private _loadState() {
    //    this.currentSortColName = this.serverLstState.currentSortColName;
    //    //this.serverFilter = this.serverLstState.serverFilter;
    //    //this.serverNotFilter = this.serverLstState.serverNotFilter;
    //}
    //private _saveState() {
    //    this.serverLstState.currentSortColName = this.currentSortColName;
    //    //this.serverLstState.serverFilter = this.serverFilter;
    //    //this.serverLstState.serverNotFilter = this.serverNotFilter;
    //}
    ngOnDestroy() {
        this.pollingTimer.unsubscribe();
        this._lastRefreshSub.unsubscribe();
    }
    _refreshData() {
        this.serverLstSrv.refreshData();
        this.ref.markForCheck();
    }
    //public sortTable(col: string) {
    //    this.serverListColumns.forEach(s => s.sortDir = SortDirection.NONE);
    //    var colSel = this.serverListColumns[this.serverListColumns.findIndex(c => c.tableColumns.colName === col)];
    //    colSel.sortDir = SortDirection.ASC;
    //    colSel.sorted = true;
    //}
    setSort(col) {
        _table_table_column_config__WEBPACK_IMPORTED_MODULE_5__["TableHelper"].setSort(this._serverTableConfig, col);
    }
    isColVisible(colName) {
        return this.serverListColumns.find(name => name.tableColumns.colName == colName).visible;
    }
    setClickedRow(i, serverId) {
        this.selectedRow = i;
        this.selectedServer = serverId;
    }
    getSortClass(colIndex) {
        return _table_table_column_config__WEBPACK_IMPORTED_MODULE_5__["TableColHepler"].getSortClass(this._serverTableConfig.tableColConfig, colIndex);
    }
    filterByYellowBox() {
        if (this.filterYellowBox === true) {
            this.serverLstSrv.filterByYellowBox(true);
        }
        else {
            this.serverLstSrv.filterByYellowBox(null);
        }
    }
    timeBGClass(time) {
        if (time > 60) {
            return "bg-danger text-white";
        }
        else if (time > 30) {
            return 'bg-warning text-white';
        }
        else {
            return 'bg-success text-white';
        }
    }
    postServerCmd(serverId, cmd) {
        const dialogRef = this.confirmDialog.open(_dialogs_confirm_confirmdialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmedDialog"], {
            data: { title: 'Server command', question: `Do you wish to send a ${cmd} to ${serverId}?`, confirmed: false }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result) {
                console.log("Command sent");
                this.repo.postServerCmd(serverId, cmd)
                    .subscribe(result => console.log(result));
            }
            else {
                console.log("Command not sent");
            }
        });
    }
    trackByFnc(index, item) {
        if (!item)
            return null;
        return item.serverID;
    }
};
ServerListComponent.ctorParameters = () => [
    { type: _repository__WEBPACK_IMPORTED_MODULE_1__["Repository"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"] },
    { type: _services_sort_service__WEBPACK_IMPORTED_MODULE_4__["SortService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _serverlist_state__WEBPACK_IMPORTED_MODULE_10__["ServerListState"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _services_serverlist_service__WEBPACK_IMPORTED_MODULE_13__["ServerListSrv"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_server_filter_version_server_filter_version_component__WEBPACK_IMPORTED_MODULE_6__["ServerFilterVersion"]),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
], ServerListComponent.prototype, "versionFilters", void 0);
ServerListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'serverlist',
        template: __webpack_require__(/*! raw-loader!./serverlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/serverlist/serverlist.component.html"),
        providers: [_services_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"]],
        styles: [__webpack_require__(/*! ./serverlist.component.css */ "./src/app/serverlist/serverlist.component.css")]
    }),
    __metadata("design:paramtypes", [_repository__WEBPACK_IMPORTED_MODULE_1__["Repository"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"],
        _services_sort_service__WEBPACK_IMPORTED_MODULE_4__["SortService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _serverlist_state__WEBPACK_IMPORTED_MODULE_10__["ServerListState"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _services_serverlist_service__WEBPACK_IMPORTED_MODULE_13__["ServerListSrv"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
], ServerListComponent);



/***/ }),

/***/ "./src/app/serverlist/serverlist.module.ts":
/*!*************************************************!*\
  !*** ./src/app/serverlist/serverlist.module.ts ***!
  \*************************************************/
/*! exports provided: ServerlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerlistModule", function() { return ServerlistModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dialogs_slconfigdialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/slconfigdialog.component */ "./src/app/serverlist/dialogs/slconfigdialog.component.ts");
/* harmony import */ var _server_connect_server_connect_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-connect/server-connect.dialog.component */ "./src/app/serverlist/server-connect/server-connect.dialog.component.ts");
/* harmony import */ var _server_connect_server_connect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server-connect/server-connect.component */ "./src/app/serverlist/server-connect/server-connect.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/table.component */ "./src/app/serverlist/table/table.component.ts");
/* harmony import */ var _issues_issues_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./issues/issues.component */ "./src/app/serverlist/issues/issues.component.ts");
/* harmony import */ var _server_filter_server_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./server-filter/server-filter.component */ "./src/app/serverlist/server-filter/server-filter.component.ts");
/* harmony import */ var _server_filter_version_server_filter_version_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./server-filter-version/server-filter-version.component */ "./src/app/serverlist/server-filter-version/server-filter-version.component.ts");
/* harmony import */ var _server_top_navigator_server_navigator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./server-top-navigator/server-navigator.component */ "./src/app/serverlist/server-top-navigator/server-navigator.component.ts");
/* harmony import */ var _serverdashboard_serverdashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./serverdashboard/serverdashboard.component */ "./src/app/serverlist/serverdashboard/serverdashboard.component.ts");
/* harmony import */ var _serverversions_serverversions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./serverversions/serverversions.component */ "./src/app/serverlist/serverversions/serverversions.component.ts");
/* harmony import */ var _dialogs_confirm_confirmdialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialogs/confirm/confirmdialog.component */ "./src/app/serverlist/dialogs/confirm/confirmdialog.component.ts");
/* harmony import */ var _services_sort_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/sort.service */ "./src/app/serverlist/services/sort.service.ts");
/* harmony import */ var _services_serverlist_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/serverlist.service */ "./src/app/serverlist/services/serverlist.service.ts");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/filter.service */ "./src/app/serverlist/services/filter.service.ts");
/* harmony import */ var _services_jsfunc_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/jsfunc.service */ "./src/app/serverlist/services/jsfunc.service.ts");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./repository */ "./src/app/serverlist/repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















let ServerlistModule = class ServerlistModule {
};
ServerlistModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dialogs_slconfigdialog_component__WEBPACK_IMPORTED_MODULE_2__["ServerListConfigDialog"],
            _server_connect_server_connect_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ServerConnectDialog"],
            _server_connect_server_connect_component__WEBPACK_IMPORTED_MODULE_4__["ServerConnectComponent"],
            _table_table_component__WEBPACK_IMPORTED_MODULE_5__["WebTableComponent"],
            _issues_issues_component__WEBPACK_IMPORTED_MODULE_6__["IssuesComponent"],
            _server_filter_server_filter_component__WEBPACK_IMPORTED_MODULE_7__["ServerFilterComponent"],
            _server_filter_version_server_filter_version_component__WEBPACK_IMPORTED_MODULE_8__["ServerFilterVersion"],
            _server_top_navigator_server_navigator_component__WEBPACK_IMPORTED_MODULE_9__["ServerNavigatorComponent"],
            _serverdashboard_serverdashboard_component__WEBPACK_IMPORTED_MODULE_10__["ServerDashBoardComponent"],
            _serverversions_serverversions_component__WEBPACK_IMPORTED_MODULE_11__["ServerVersionsComponent"],
            _dialogs_confirm_confirmdialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmedDialog"]
        ],
        providers: [
            _services_sort_service__WEBPACK_IMPORTED_MODULE_13__["SortService"],
            _services_serverlist_service__WEBPACK_IMPORTED_MODULE_14__["ServerListSrv"],
            _services_filter_service__WEBPACK_IMPORTED_MODULE_15__["FilterService"],
            _services_jsfunc_service__WEBPACK_IMPORTED_MODULE_16__["JsFuncService"],
            _repository__WEBPACK_IMPORTED_MODULE_17__["Repository"]
        ]
    })
], ServerlistModule);



/***/ }),

/***/ "./src/app/serverlist/serverlist.state.ts":
/*!************************************************!*\
  !*** ./src/app/serverlist/serverlist.state.ts ***!
  \************************************************/
/*! exports provided: ServerListState, INITIAL_STATE, ServerListPersist, ServerListColsDefault, ServerColumnState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerListState", function() { return ServerListState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerListPersist", function() { return ServerListPersist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerListColsDefault", function() { return ServerListColsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerColumnState", function() { return ServerColumnState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table/table-column-config */ "./src/app/serverlist/table/table-column-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ServerListState = class ServerListState {
    constructor() {
        this.currState = INITIAL_STATE;
    }
    ngOnInit() {
    }
    get currentSortColName() {
        return this.currState.currentSortColName;
    }
    set currentSortColName(name) {
        this.currState.currentSortColName = name;
    }
    get serverNotFilter() {
        return this.currState.serverNotFilter;
    }
    set serverNotFilter(filterNot) {
        this.currState.serverNotFilter = filterNot;
    }
    get serverFilter() {
        return this.currState.serverFilter;
    }
    set serverFilter(filterSrv) {
        this.currState.serverFilter = filterSrv;
    }
};
ServerListState = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
], ServerListState);

const INITIAL_STATE = {
    currentSortColName: "serverID",
    serverFilter: { serverID: '', catID: '', cprV: '', advantageServerV: '', paServV: '', yellowBox: '' },
    serverNotFilter: { serverID: '' },
};
class ServerListPersist {
    constructor(serverId, expanded) {
        this.serverId = serverId;
        this.expanded = expanded;
    }
}
ServerListPersist.ctorParameters = () => [
    { type: String },
    { type: Boolean }
];
const ServerListColsDefault = [
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].ASC, visible: true, sorted: true, orderBy: 0, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "serverID", caption: 'ServerID', Sortable: true, nonConfigurable: true })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: true, sorted: false, orderBy: 1, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "cpr", caption: 'cpr', Sortable: true, nonConfigurable: true })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: true, sorted: false, orderBy: 2, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "srv", caption: 'srv', Sortable: true, nonConfigurable: true })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: true, sorted: false, orderBy: 3, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "png", caption: 'png', Sortable: true, nonConfigurable: true })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 4, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "serverIP", caption: 'ServerIP', Sortable: true })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 5, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "cprV", caption: 'CprV', Sortable: true, sortCol: 'ncprV' })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 6, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "advantageServerV", caption: 'AdvServerV', Sortable: true, sortCol: 'nAdvServerV' })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 7, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "paServV", caption: 'PaServV', Sortable: true, sortCol: 'nPaServV' })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 8, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "vAdvEIS", caption: 'AdvEISv', Sortable: true, sortCol: 'nvAdvEIS' })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 9, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "vAWSServ", caption: 'AWSServV', Sortable: true, sortCol: 'nvAWSServ' })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 10, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "vAdvOE", caption: 'AdvOEv', Sortable: true, sortCol: 'nvAdvOE' })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 11, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "vAdvEIS_l", caption: 'AdvEIS_lv', Sortable: true, sortCol: 'nvAdvEIS_l' })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 12, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "vGetData", caption: 'GetDataV', Sortable: true, sortCol: 'nvGetData' })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 13, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "vPockAdv", caption: 'PockAdvV', Sortable: true, sortCol: 'nvPockAdv' })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 14, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "vOrdApprov", caption: 'OrdApprovV', Sortable: true, sortCol: 'nvOrdApprov' })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 15, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "vPauSetup", caption: 'PauSetupV', Sortable: true, sortCol: 'nvPauSetup' })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 16, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "vSecAdmin", caption: 'SecAdminV', Sortable: true, sortCol: 'nvSecAdmin' })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 17, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "advServV", caption: 'AdvServV', Sortable: true, sortCol: 'nadvServV' })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].NONE, visible: false, sorted: false, orderBy: 18, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColumnConfig"]({ colName: "daysReboot", caption: 'Rebooted', Sortable: true }),
    }
];
class ServerColumnState {
    static saveColumns(cols) {
        localStorage.setItem("ServerListColState", JSON.stringify(cols));
    }
    static getColumns() {
        return ServerListColsDefault;
        //localStorage.setItem("ServerListColState", "");
        //let cols = localStorage.getItem("ServerListColState");
        //if (cols) {
        //    if (cols.length == ServerListColsDefault.length) {
        //        return JSON.parse(cols);
        //    } else {
        //        return ServerListColsDefault;
        //    }
        //} else {
        //    return ServerListColsDefault;
        //}
    }
}


/***/ }),

/***/ "./src/app/serverlist/serverversions/serverversions.component.css":
/*!************************************************************************!*\
  !*** ./src/app/serverlist/serverversions/serverversions.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.fa-vc {\r\n    line-height: inherit !important;\r\n    cursor: pointer;\r\n}\r\n\r\n.card-header {\r\n    width: 100%;\r\n}\r\n\r\n.filterRow tr:hover {\r\n    background-color: cornflowerblue !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVybGlzdC9zZXJ2ZXJ2ZXJzaW9ucy9zZXJ2ZXJ2ZXJzaW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQyIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcmxpc3Qvc2VydmVydmVyc2lvbnMvc2VydmVydmVyc2lvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZhLXZjIHtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZpbHRlclJvdyB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/serverlist/serverversions/serverversions.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/serverlist/serverversions/serverversions.component.ts ***!
  \***********************************************************************/
/*! exports provided: ServerVersionsComponent, serverVCols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerVersionsComponent", function() { return ServerVersionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverVCols", function() { return serverVCols; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository */ "./src/app/serverlist/repository.ts");
/* harmony import */ var _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../table/table-column-config */ "./src/app/serverlist/table/table-column-config.ts");
/* harmony import */ var _services_sort_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sort.service */ "./src/app/serverlist/services/sort.service.ts");
/* harmony import */ var _services_jsfunc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/jsfunc.service */ "./src/app/serverlist/services/jsfunc.service.ts");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/filter.service */ "./src/app/serverlist/services/filter.service.ts");
/* harmony import */ var _services_serverlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/serverlist.service */ "./src/app/serverlist/services/serverlist.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let ServerVersionsComponent = class ServerVersionsComponent {
    constructor(repo, sortSrv, jsFunc, filterSrv, serverLstSrv) {
        this.repo = repo;
        this.sortSrv = sortSrv;
        this.jsFunc = jsFunc;
        this.filterSrv = filterSrv;
        this.serverLstSrv = serverLstSrv;
        this.expanded = false;
        this.isLoading = false;
        this._serverVersions = [];
        this._serverVersionsFiltered = [];
        this._serverFilter = {};
        this.selectedRow = 0;
        this.subFilter = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
    }
    ngOnDestroy() {
        this.subFilter.unsubscribe();
    }
    ngOnInit() {
        this._tableConfig = { tableColConfig: serverVCols, currentSortCol: 0, currentSortColName: "serverid" };
        this._tableConfig.tableColConfig.forEach(header => {
            this._serverFilter[header.tableColumns.colName] = '';
        });
        this._serverFilterId = '';
        this.refreshData();
        this.subFilter = this.serverLstSrv.serverFilter.subscribe(result => {
            this._serverFilterId = result['serverID'];
            this._applyFilter();
        });
    }
    get tableHeader() {
        return this._tableConfig.tableColConfig;
    }
    get currentSortColName() {
        return this._tableConfig.currentSortColName;
    }
    get tableCols() {
        return this.tableHeader.filter(cols => cols.visible == true).map(colObj => colObj.tableColumns);
    }
    get isAsc() {
        return _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColHepler"].isAsc(this.tableHeader[this._tableConfig.currentSortCol].sortDir);
    }
    get cardTitle() {
        if (this.serverLstSrv.isFiltered) {
            return `Versions (${this._serverVersionsFiltered.length}) *Filtered`;
        }
        else {
            return `Versions List (${this._serverVersionsFiltered.length})`;
        }
    }
    get serverVersions() {
        return this._serverVersionsFiltered;
    }
    clearFilter() {
        this._tableConfig.tableColConfig.forEach(header => {
            this._serverFilter[header.tableColumns.colName] = '';
            header.tableColumns.filterValue = '';
        });
        this._serverVersionsFiltered = this._serverVersions;
    }
    refreshData() {
        this.isLoading = true;
        this.repo.getServerListVersion().subscribe(versions => {
            this._serverVersions = versions;
            this._serverVersionsFiltered = this._serverVersions;
            this._refreshFilterValues();
            this.isLoading = false;
        });
    }
    setRow(row) {
        this.selectedRow = row;
    }
    getHeaderClass() {
        if (!this.expanded) {
            return "fa fa-caret-down fa-vc";
        }
        else {
            return "fa fa-caret-up fa-vc";
        }
    }
    setSort(col) {
        _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableHelper"].setSort(this._tableConfig, col);
    }
    getSortClass(colIndex) {
        return _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColHepler"].getSortClass(this.tableHeader, colIndex);
    }
    isComboFilter(col) {
        if (col.filterType === _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo)
            return true;
        else
            return false;
    }
    setFilter() {
        this._applyFilter();
    }
    trackByFnc(index, item) {
        if (!item)
            return null;
        return item.serverId;
    }
    _applyFilter() {
        this.tableHeader.forEach(header => {
            this._serverFilter[header.tableColumns.colName] = header.tableColumns.filterValue;
        });
        this._serverFilter['serverId'] = this._serverFilterId;
        //console.log(this._serverFilterId);
        this._serverVersionsFiltered = this.filterSrv.filterByObject(this._serverVersions, this._serverFilter);
        this._refreshFilterValues();
    }
    _refreshFilterValues() {
        this.tableHeader.forEach(header => {
            let groups = this.jsFunc.groupBy(this._serverVersionsFiltered, header.tableColumns.colName);
            let values = Object.keys(groups);
            header.tableColumns.filterValues = values.sort();
        });
    }
};
ServerVersionsComponent.ctorParameters = () => [
    { type: _repository__WEBPACK_IMPORTED_MODULE_1__["Repository"] },
    { type: _services_sort_service__WEBPACK_IMPORTED_MODULE_3__["SortService"] },
    { type: _services_jsfunc_service__WEBPACK_IMPORTED_MODULE_4__["JsFuncService"] },
    { type: _services_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"] },
    { type: _services_serverlist_service__WEBPACK_IMPORTED_MODULE_6__["ServerListSrv"] }
];
ServerVersionsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'serverversions',
        template: __webpack_require__(/*! raw-loader!./serverversions.component.html */ "./node_modules/raw-loader/index.js!./src/app/serverlist/serverversions/serverversions.component.html"),
        styles: [__webpack_require__(/*! ./serverversions.component.css */ "./src/app/serverlist/serverversions/serverversions.component.css")]
    }),
    __metadata("design:paramtypes", [_repository__WEBPACK_IMPORTED_MODULE_1__["Repository"], _services_sort_service__WEBPACK_IMPORTED_MODULE_3__["SortService"], _services_jsfunc_service__WEBPACK_IMPORTED_MODULE_4__["JsFuncService"],
        _services_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"], _services_serverlist_service__WEBPACK_IMPORTED_MODULE_6__["ServerListSrv"]])
], ServerVersionsComponent);

const serverVCols = [
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: true, orderBy: 0, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "serverId", caption: 'ServerId', Sortable: true })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 1, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "eisv", caption: 'EISV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 2, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "eisLocalV", caption: 'EISLocalV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 3, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "getDataV", caption: 'GetDataV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 4, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "advantageServerV", caption: 'AdvantageServerV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 5, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "cprv", caption: 'CPRV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 6, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "paServV", caption: 'PaServV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 7, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "advOEV", caption: 'AdvOEV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 8, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "orderApprovalV", caption: 'OrderApprovalV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 9, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "pauSetupV", caption: 'PAUSetupV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 10, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "securityAdminV", caption: 'SecurityAdminV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 11, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "pockAdvV", caption: 'PockAdvV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 12, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "advServV", caption: 'AdvServV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 13, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "invMonitorServV", caption: 'InvMonitorServV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 14, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "awsServV", caption: 'AWSServV', Sortable: true, filterType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["FilterType"].Combo })
    },
    {
        sortDir: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC, visible: true, sorted: false, orderBy: 15, tableColumns: new _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["TableColumnConfig"]({ colName: "lastUpdated", caption: 'Updated', Sortable: true, dataType: _table_table_column_config__WEBPACK_IMPORTED_MODULE_2__["DataType"].DATE_TIME })
    }
];


/***/ }),

/***/ "./src/app/serverlist/services/filter.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/serverlist/services/filter.service.ts ***!
  \*******************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
    providedIn: 'root'
});
class FilterService {
    constructor() {
        this.notFilter = false;
    }
    filterByObject(inputArr, filterBy, notFilter = false) {
        if (!inputArr || !filterBy)
            return inputArr;
        this.notFilter = notFilter;
        return inputArr.filter(this.objectFilter(filterBy));
    }
    objectFilter(filterBy) {
        return value => {
            for (const key in filterBy) {
                if (!this.isMatching(filterBy[key], value[key])) {
                    return false;
                }
            }
            return true;
        };
    }
    isMatching(filter, val) {
        switch (typeof filter) {
            case 'boolean':
                return this.filterByBoolean(filter)(val);
            case 'string':
                return this.filterByString(filter)(val);
            case 'object':
                return this.objectFilter(filter)(val);
        }
        return this.filterDefault(filter)(val);
    }
    filterDefault(filter) {
        if (!this.notFilter)
            return (value) => filter === undefined || filter == value;
        else
            return (value) => filter !== undefined || filter != value;
    }
    filterByString(filter) {
        if (filter) {
            filter = filter.toLowerCase();
        }
        if (!this.notFilter) {
            return value => !filter || (value ? (value).toLowerCase().indexOf(filter) !== -1 : false);
        }
        else {
            return value => !filter || (value ? (value).toLowerCase().indexOf(filter) === -1 : false);
        }
    }
    filterByBoolean(filter) {
        if (!this.notFilter)
            return value => value === filter;
        else
            return value => value !== filter;
    }
}


/***/ }),

/***/ "./src/app/serverlist/services/jsfunc.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/serverlist/services/jsfunc.service.ts ***!
  \*******************************************************/
/*! exports provided: JsFuncService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsFuncService", function() { return JsFuncService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let JsFuncService = class JsFuncService {
    groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
            const key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key] = acc[key] || [];
            acc[key].push(obj);
            return acc;
        }, {});
    }
    groupByKeys(objectArray, property) {
        return objectArray.map(item => item[property])
            .filter((value, index, self) => self.indexOf(value) === index);
    }
};
JsFuncService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
], JsFuncService);



/***/ }),

/***/ "./src/app/serverlist/services/serverlist.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/serverlist/services/serverlist.service.ts ***!
  \***********************************************************/
/*! exports provided: ServerListSrv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerListSrv", function() { return ServerListSrv; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository */ "./src/app/serverlist/repository.ts");
/* harmony import */ var _helper_versioninfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/versioninfo */ "./src/app/serverlist/helper/versioninfo.ts");
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.service */ "./src/app/serverlist/services/filter.service.ts");
/* harmony import */ var _jsfunc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jsfunc.service */ "./src/app/serverlist/services/jsfunc.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let ServerListSrv = class ServerListSrv {
    constructor(repo, filterSrv, jsFunc) {
        this.repo = repo;
        this.filterSrv = filterSrv;
        this.jsFunc = jsFunc;
        this._serverListData = [];
        this.isLoading = false;
        //Holds filtered parameters
        this._serverFilter = { serverID: '', catID: '', cprV: '', advantageServerV: '', paServV: '', yellowBox: '' };
        this._serverNotFilter = { serverID: '' };
        //Temporary, need to hold a lot more versions
        this.cprVersions = [];
        this.advantageSrvV = [];
        this.paServV = [];
        this._serverListSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._serverFilterSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._serverFilter);
        this._lastRefreshSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Date.now());
    }
    get serverFilter() {
        return this._serverFilterSub.asObservable();
    }
    get isFiltered() {
        return this._serverFilter.serverID.length > 0 || this._serverNotFilter.serverID.length > 0;
    }
    //Outside components can subscribe the data
    get serverList() {
        return this._serverListSub.asObservable();
    }
    ngOnInit() {
        this._serverListFiltered = [];
    }
    ngOnDestroy() {
        //this._pollingTimer.unsubscribe();
    }
    refreshData() {
        return this.repo.getServerList()
            .subscribe(result => {
            this._serverListSub.next(result);
            this._lastRefreshSub.next(Date.now());
            this._filterServer();
        });
    }
    get serversWithIssues() {
        return this._serverListData.filter(x => x.yellowBox == true).length;
    }
    get lastRefresh() {
        return this._lastRefreshSub.asObservable();
    }
    loadData() {
        this.isLoading = true;
        this.repo.getServerList().subscribe(results => {
            this.isLoading = false;
            this._serverListData = results;
            this._serverListFiltered = this._serverListData.slice();
            this._serverListSub.next(results);
            this._filterServer();
            this._lastRefreshSub.next(Date.now());
            this.isLoading = false;
        });
        //this._pollingTimer.unsubscribe();
        //this._pollingTimer = interval(this._intervalTimer)
        //    .pipe(
        //        startWith(0),
        //        switchMap(() => this.repo.getServerList())
        //    )
        //    .subscribe(results => {
        //        this.isLoading = false;
        //        this._serverListData = results;
        //        this._dataStore.serverListFiltered = this._serverListData.slice();
        //        this._serverList.next(Object.assign({}, this._dataStore).serverListFiltered);
        //        this._filterServer();
        //        this.lastRefresh = Date.now();
        //    });
    }
    filterByString(serverId) {
        this._serverFilter.serverID = serverId;
        this._filterServer();
    }
    filterNotByString(serverId) {
        this._serverNotFilter['serverID'] = serverId;
        this._filterServer();
    }
    filterByYellowBox(val) {
        this._serverFilter['yellowBox'] = val;
        this._filterServer();
    }
    _refreshVersionFilterData() {
        let cprVObject = this.jsFunc.groupBy(this._serverListFiltered, 'cprV');
        this.cprVersions = Object.keys(cprVObject).map((group) => {
            return new _helper_versioninfo__WEBPACK_IMPORTED_MODULE_3__["versionInfo"](group, cprVObject[group].length, cprVObject[group][0]['ncprV']);
        });
        let advServV = this.jsFunc.groupBy(this._serverListFiltered, 'advantageServerV');
        this.advantageSrvV = Object.keys(advServV).map((group) => {
            return new _helper_versioninfo__WEBPACK_IMPORTED_MODULE_3__["versionInfo"](group, advServV[group].length, advServV[group][0]['nAdvServerV']);
        });
        let paServV = this.jsFunc.groupBy(this._serverListFiltered, 'paServV');
        this.paServV = Object.keys(paServV).map((group) => {
            return new _helper_versioninfo__WEBPACK_IMPORTED_MODULE_3__["versionInfo"](group, paServV[group].length, paServV[group][0]['nPaServV']);
        });
    }
    _filterServer() {
        this._serverListFiltered = this.filterSrv.filterByObject(this._serverListData, this._serverFilter);
        if (this._serverNotFilter['serverID'].length > 0) {
            this._serverListFiltered = this.filterSrv.filterByObject(this._serverListFiltered, this._serverNotFilter, true);
        }
        this._refreshVersionFilterData();
        this._serverFilterSub.next(this._serverFilter);
        this._serverListSub.next(this._serverListFiltered);
    }
};
ServerListSrv.ctorParameters = () => [
    { type: _repository__WEBPACK_IMPORTED_MODULE_2__["Repository"] },
    { type: _filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"] },
    { type: _jsfunc_service__WEBPACK_IMPORTED_MODULE_5__["JsFuncService"] }
];
ServerListSrv = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_repository__WEBPACK_IMPORTED_MODULE_2__["Repository"], _filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"], _jsfunc_service__WEBPACK_IMPORTED_MODULE_5__["JsFuncService"]])
], ServerListSrv);



/***/ }),

/***/ "./src/app/serverlist/services/sort.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/serverlist/services/sort.service.ts ***!
  \*****************************************************/
/*! exports provided: SortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortService", function() { return SortService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SortService = class SortService {
    _objArrayCheck(array) {
        const item0 = array[0];
        const check = !!(array.length && item0 !== null && Object.prototype.toString.call(item0) === '[object Object]');
        return check;
    }
    stringSort(input, field, asc) {
        const sorted = input.sort((a, b) => {
            var returnVal = 0;
            if (a[field] < b[field])
                returnVal = -1;
            if (a[field] > b[field])
                returnVal = 1;
            return asc ? returnVal : returnVal * -1;
        });
        return sorted;
    }
    numericSort(arrayInput, field, asc) {
        const sorted = arrayInput.sort((a, b) => {
            if (a[field] === b[field]) {
                return 0;
            }
            else if (a[field] === null) {
                return asc ? 1 : -1;
            }
            else if (b[field] === null) {
                return asc ? -1 : 1;
            }
            else {
                return asc ? a[field] - b[field] : b[field] - a[field];
            }
        });
        return sorted;
    }
    sortObject(arrayInput, field, asc = true) {
        if (!arrayInput)
            return;
        if (!field || !this._objArrayCheck(arrayInput)) {
            return;
        }
        if (typeof arrayInput[0][field] === 'string' || arrayInput[field] instanceof String) {
            return this.stringSort(arrayInput, field, asc);
        }
        else if (typeof arrayInput[0][field] === 'number') {
            return this.numericSort(arrayInput, field, asc);
        }
        else {
            return this.stringSort(arrayInput, field, asc);
        }
    }
};
SortService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
], SortService);



/***/ }),

/***/ "./src/app/serverlist/table/table-column-config.ts":
/*!*********************************************************!*\
  !*** ./src/app/serverlist/table/table-column-config.ts ***!
  \*********************************************************/
/*! exports provided: TableColumnConfig, TableHelper, TableColHepler, DataType, SortDirection, FilterType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColumnConfig", function() { return TableColumnConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHelper", function() { return TableHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColHepler", function() { return TableColHepler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return DataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterType", function() { return FilterType; });
;
class TableColumnConfig {
    constructor({ colName, sortCol = '', toolTip = '', Sortable = true, nonConfigurable = false, caption = '', dataType = DataType.DEFAULT, systemCol = false, filterType = FilterType.TextBox }) {
        this.filterValues = [];
        this.colName = colName;
        this.toolTip = toolTip;
        this.Sortable = Sortable;
        this.nonConfigurable = nonConfigurable;
        this.sortCol = sortCol;
        this.caption = caption;
        this.dataType = dataType;
        this.systemCol = systemCol;
        this.filterType = filterType;
        this.filterValue = '';
        this.filterCount = {};
        if (sortCol.length == 0) {
            this.sortCol = this.colName;
        }
    }
}
TableColumnConfig.ctorParameters = () => [
    { type: undefined }
];
class TableHelper {
    static setSort(tableHeader, col) {
        if (tableHeader.tableColConfig[col].tableColumns.Sortable) {
            tableHeader.tableColConfig.forEach(c => {
                c.sorted = false;
            });
            tableHeader.currentSortCol = col;
            tableHeader.currentSortColName = tableHeader.tableColConfig[col].tableColumns.colName;
            tableHeader.tableColConfig[col].sorted = true;
            tableHeader.tableColConfig[col].sortDir = TableColHepler.switchNextSort(tableHeader.tableColConfig[col].sortDir);
        }
    }
}
class TableColHepler {
    static getSortIconClass(sortDir) {
        switch (sortDir) {
            case SortDirection.ASC:
                return 'fa fa-sort-asc';
            case SortDirection.DESC:
                return 'fa fa-sort-desc';
            default:
                return '';
        }
    }
    static getSortClass(tableHeader, colIndex) {
        if (tableHeader[colIndex].sorted == true) {
            return TableColHepler.getSortIconClass(tableHeader[colIndex].sortDir);
        }
        else {
            return '';
        }
    }
    static isDropDownCombo(filterType) {
        if (filterType == FilterType.Combo)
            return true;
        else
            return false;
    }
    static isAsc(sortDir) {
        switch (sortDir) {
            case SortDirection.ASC:
                return true;
            default:
                return false;
        }
    }
    static switchNextSort(sortDir) {
        switch (sortDir) {
            case SortDirection.ASC:
                return SortDirection.DESC;
            case SortDirection.DESC:
                return SortDirection.ASC;
            default:
                return SortDirection.ASC;
        }
    }
}
var DataType;
(function (DataType) {
    DataType[DataType["DEFAULT"] = 0] = "DEFAULT";
    DataType[DataType["DATE_TIME"] = 1] = "DATE_TIME";
})(DataType || (DataType = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["NONE"] = 0] = "NONE";
    SortDirection[SortDirection["ASC"] = 1] = "ASC";
    SortDirection[SortDirection["DESC"] = 2] = "DESC";
})(SortDirection || (SortDirection = {}));
var FilterType;
(function (FilterType) {
    FilterType[FilterType["TextBox"] = 0] = "TextBox";
    FilterType[FilterType["Combo"] = 1] = "Combo";
})(FilterType || (FilterType = {}));


/***/ }),

/***/ "./src/app/serverlist/table/table.component.css":
/*!******************************************************!*\
  !*** ./src/app/serverlist/table/table.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".webTableStyle {\r\n    float: left;\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n  \r\n}\r\n\r\nth.unsortable {\r\n    cursor: default;\r\n}\r\n\r\ntr {\r\n    height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVybGlzdC90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zZXJ2ZXJsaXN0L3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2ViVGFibGVTdHlsZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBcclxufVxyXG5cclxudGgudW5zb3J0YWJsZSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbnRyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/serverlist/table/table.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/serverlist/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: WebTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebTableComponent", function() { return WebTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _table_column_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-column-config */ "./src/app/serverlist/table/table-column-config.ts");
/* harmony import */ var _services_sort_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sort.service */ "./src/app/serverlist/services/sort.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let WebTableComponent = class WebTableComponent {
    constructor(sortSrv) {
        this.sortSrv = sortSrv;
        this.multiRowSelect = false;
        this.currentSortCol = 0;
    }
    get configurableCols() {
        return this.columnsConfig.filter(cols => cols.visible == true).map(colObj => colObj.tableColumns);
    }
    get currentSortColName() {
        return this.columnsConfig[this.currentSortCol].tableColumns.colName;
    }
    getSortClass(colIndex) {
        if (this.columnsConfig[colIndex].sorted == true) {
            return _table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColHepler"].getSortIconClass(this.columnsConfig[colIndex].sortDir);
        }
        else {
            return '';
        }
    }
    setSort(col) {
        if (this.columnsConfig[col].tableColumns.Sortable) {
            for (var i = 0, len = this.columnsConfig.length; i < len; i++) {
                this.columnsConfig[i].sorted = false;
            }
            this.currentSortCol = col;
            this.columnsConfig[col].sorted = true;
            this.columnsConfig[col].sortDir = _table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColHepler"].switchNextSort(this.columnsConfig[col].sortDir);
        }
    }
    get isAsc() {
        return _table_column_config__WEBPACK_IMPORTED_MODULE_1__["TableColHepler"].isAsc(this.columnsConfig[this.currentSortCol].sortDir);
    }
};
WebTableComponent.ctorParameters = () => [
    { type: _services_sort_service__WEBPACK_IMPORTED_MODULE_2__["SortService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], WebTableComponent.prototype, "columnsConfig", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], WebTableComponent.prototype, "tableData", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], WebTableComponent.prototype, "multiRowSelect", void 0);
WebTableComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'webTable',
        template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/serverlist/table/table.component.html"),
        styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/serverlist/table/table.component.css")]
    }),
    __metadata("design:paramtypes", [_services_sort_service__WEBPACK_IMPORTED_MODULE_2__["SortService"]])
], WebTableComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jmska_000\Source\Repos\sparta\Sparta\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map