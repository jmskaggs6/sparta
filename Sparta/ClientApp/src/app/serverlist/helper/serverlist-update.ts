import { ServerListStartUp, ServerListUpdate } from '../models/serverlist.model';

export class UpdateServerList {
    public static update(startUp: ServerListStartUp[], updateArr: ServerListUpdate[]) {
        startUp.forEach(start => {
            var updateItem = updateArr.filter(x =>
                x.serverId === start.serverID)[0];
            
            if (updateItem) {
                start.cpr = updateItem.cpr;
                start.lastCheckIn = updateItem.lastCheckIn;
                start.lastGood = updateItem.lastGood;
                start.lastTry = updateItem.lastTry;
                start.png = updateItem.png;
                start.snapDT = updateItem.snapDT;
                start.snapShot = updateItem.snapShot;
                start.srv = updateItem.srv;
                start.versionAlertStatus = updateItem.versionAlertStatus;
            }
        });
    }

}
