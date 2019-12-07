export class AdvCrossFoot implements IAdvCrossFoot {
    constructor(
        public advCrossfootID: string,
        public advEventID: string,
        public caseEquiv: number,
        public cases: number,
        public dollars: number,
        public droppedTooEarly: number,
        public duplicateLineItems: number,
        public finishedDT: string,
        public loadedLineItems: number,
        public startDT: string,
        public totalLineItems: number,
        public units: number
    ) { }
}

export interface IAdvCrossFoot {
    advCrossfootID: string;
    advEventID: string;
    caseEquiv: number;
    cases: number;
    dollars: number;
    droppedTooEarly: number;
    duplicateLineItems: number;
    finishedDT: string;
    loadedLineItems: number;
    startDT: string;
    totalLineItems: number;
    units: number;
}