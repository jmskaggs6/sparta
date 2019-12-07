export class StatsDetailType {
    constructor(
        public statsDetailTypeID?: number,
        public serverId?: string,
        public serverName?: string,
        public companyID?: string,
        public entryTypeCode?: string,
        public recordCount?: number,
        public dateUpdated?: string,
        public companyName?: string
    ) { }
}
