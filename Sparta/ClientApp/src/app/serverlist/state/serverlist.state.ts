import { Store, State } from '@ngxs/store';
import { ServerListStartUp } from '../models/serverlist.model';

export interface ServerListStateModel {
    serverListStartup: ServerListStartUp[];
    currentServer: string;
}

@State<ServerListStateModel>({
    name: 'zoo',
    defaults: {
      serverListStartup: [],
      currentServer: ""
    }
  })
  export class ServerListState {
  }