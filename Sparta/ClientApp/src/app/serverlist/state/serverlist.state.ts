import { Store, State, Action, StateContext, Selector } from '@ngxs/store';
import { ServerListStartUp } from '../models/serverlist.model';
import { FetchAllServers } from './serverlist.action';
import { Repository } from '../repository';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface ServerListStateModel {
    serverListStartup: ServerListStartUp[];
    currentSelectedServer: string;
}

@State<ServerListStateModel>({
    name: 'serverlist',
    defaults: {
      serverListStartup: [],
      currentSelectedServer: ""
    }
  })
  export class ServerListState {
    constructor(private repo: Repository) {

    }

    @Selector()
    static getServerList(state: ServerListStateModel) {
        return state.serverListStartup;
    }

    @Action(FetchAllServers)
    public fetchAllServers(ctx: StateContext<ServerListStateModel>, action: FetchAllServers) 
    {
        const state = ctx.getState(); // always returns the freshest slice of state
        return this.repo.getServerList().pipe(
          tap((result) => {
              if (result != undefined || result != null)
              {
                  ctx.setState({
                      ...state,
                      serverListStartup: result
                  });
              }
      }));
    }
    
  }