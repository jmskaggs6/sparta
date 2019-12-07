export class CPRIssue {

    constructor(
        public issueID?: number,
        public serverID?: string,
        public fileName?: string,
        public filePath?: string,
        public fileSize?: number,
        public dateReceived?: string,
        public serverIP?: string,
        public recordSelected?: boolean,
        public yellowBox?: string,
        public expanded?: boolean
    ) {
        recordSelected = false;
        
    }
}

export class CPRIssueYellowBox {
    constructor(
        public serverId?: string,
        public filePath?: string,
        public yellowBox?: string
    ) { }
}

export class CPRIssueCount {
    constructor(
        public issueCount?: number
    ) {  }
}

export class IssueServerList {
    constructor(
        public serverId: string
    ) {}
}
