export class AdvServer {
    constructor(
        public advServerId?: number,
        public advDataAccessV?: string,
        public advServEngineV?: string,
        public advServStarted?: string,
        public advServV?: string,
        public inventivLibV?: string,
        public serverDescription?: string,
        public serverName?: string,
        public active?: boolean,
        public itemCodingDT?: string,
        public customerCodingDT?: string,
        public advServerCategoryID?: number,
        public lastCheckIn?: string,
        public advServRunning?: boolean,
        public advOEServRunning?: boolean,
        public aWSServiceRunning?: boolean
) { }
}