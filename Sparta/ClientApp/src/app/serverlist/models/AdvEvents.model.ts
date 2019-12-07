export class AdvEvents implements IAdvEvents {

    constructor(
        public advEventID: string,
        public advServerID: number,
        public dTInserted: string,
        public dTUpdated: string,
        public endDT: string,
        public eventMessage: string,
        public eventType: string,
        public fileLinkId: string,
        public fileType: string,
        public folderIndex: string,
        public startDT: string,
        public totalRunTime: number,
        public includeInTotal: boolean,
        public showSubEvents: boolean,
        public isCrossfoot: boolean
    ) {
        showSubEvents = false;
        
    }
}

export interface IAdvEvents {
    advEventID: string;
    advServerID: number;
    dTInserted: string;
    dTUpdated: string;
    endDT: string;
    eventMessage: string;
    eventType: string;
    fileLinkId: string;
    fileType: string;
    folderIndex: string;
    startDT: string;
    totalRunTime: number;
    includeInTotal: boolean;
    showSubEvents: boolean;
    isCrossfoot: boolean;
}