
export class versionInfo {
    constructor(
        public versionNum: string,
        public countV: number,
        public sortV: number
    ) { };

    get versionDisplay(): string {
        if (this.versionNum == 'null') {
            return "None";
        } else {
            return this.versionNum;
        }
    }
}
