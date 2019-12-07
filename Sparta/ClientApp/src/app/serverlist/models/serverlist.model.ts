import { ServerConnect } from './serverconnect.model';

export class ServerListStartUp {
    expanded: boolean;
    serverConnect: ServerConnect;
    serverConnectLoaded: boolean;

    constructor(
        public serverID: string,
        public versionSent: string,
        public tZDiff: number,
        public snapShot: string,
        public lastTry: string,
        public lastGood: string,
        public cpr: number,
        public srv: number,
        public png: number,
        public catID: number,
        public snapDT: string,
        public versionAlertStatus: number,
        public advServerID: number,
        public lastCheckIn: string,
        public paServIP: string,
        public serverIP: string,
        public cprV: string,
        public advantageServerV: string,
        public paServV: string,
        public ncprV: number,
        public nPaServV: number,
        public nAdvServerV: number,
        public yellowBox: boolean,
        public vAdvEIS: string,
        public nvAdvEIS: number,
        public vAWSServ: string,
        public nvAWSServ: number,
        public vAdvOE: string,
        public nvAdvOE: number,
        public vAdvEIS_l: string,
        public nvAdvEIS_l: number,
        public vGetData: string,
        public nvGetData: number,
        public vPockAdv: string,
        public nvPockAdv: number,
        public vOrdApprov: string,
        public nvOrdApprov: number,
        public vPauSetup: string,
        public nvPauSetup: number,
        public vSecAdmin: string,
        public nvSecAdmin: number,
        public advServV: string,
        public nadvServV: number,
        public daysReboot: number
    ) {
        this.expanded = false;
        this.serverConnectLoaded = false;
        
    }
}

export class ServerListUpdate {
    constructor(
        public serverId: string,
        public snapShot: string,
        public lastTry: string,
        public lastGood: string,
        public cpr: number,
        public srv: number,
        public png: number,
        public versionAlertStatus: number,
        public snapDT: string,
        public lastCheckIn: string
    ) { }
}

export class CPRNumbers {
    serverId: string;
    previousCpr: number;
    previousSrv: number;
    previousPng: number;
}

export class serverCommand {
    constructor(
        public serverId: string,
        public command: string
    ) { }
}
