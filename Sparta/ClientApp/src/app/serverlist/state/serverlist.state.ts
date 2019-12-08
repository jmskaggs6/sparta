import { Store, State, Action, StateContext, Selector } from '@ngxs/store';
import { ServerListStartUp } from '../models/serverlist.model';
import { FetchAllServers, 
  SetServerListCols, SetServerListFilter,
   GetServerListCols, GetServerListFilters 
  } from './serverlist.action';
import { Repository } from '../repository';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SortDirection, ITableColConfigState, TableColumnConfig } from '../table/table-column-config';
import { ServerListColsDefault } from './state.configuration';

export interface ServerListStateModel {
    serverListStartup: ServerListStartUp[];
    currentSelectedServer: string;
    serverListSortCol: string;
    serverListFilter: any;
    serverListNotFilter: any;
    serverListCols: ITableColConfigState[];
}

@State<ServerListStateModel>({
    name: 'serverlist',
    defaults: {
      serverListSortCol: "serverID",
      serverListStartup: [],
      currentSelectedServer: "",
      serverListFilter: { serverID: '', catID: '', cprV: '', advantageServerV: '', paServV: '', yellowBox: '' },
      serverListNotFilter: { serverID: '' }, 
      serverListCols: ServerListColsDefault
    }
  })
  export class ServerListState {
    constructor(private repo: Repository) {

    }

    @Selector()
    static getServerListColumns(state: ServerListStateModel) {
      return state.serverListSortCol;
    }
    
    @Selector()
    static getServerList(state: ServerListStateModel) {
        return state.serverListStartup;
    }

    @Selector()
    static getServerFilter(state: ServerListStateModel) {
      return state.serverListFilter;
    }

    @Selector()
    static getServerNotFilter(state: ServerListStateModel) {
      return state.serverListNotFilter;
    }

    @Selector()
    static getServerListSortCol(state: ServerListStateModel) {
      return state.serverListSortCol;
    }

    @Action(SetServerListCols)
    public setServerListCols(ctx: StateContext<ServerListStateModel>, action: SetServerListCols) {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        serverListCols: action.payload
      })
    }

    @Action(SetServerListFilter)
    public setServerListFilter(ctx: StateContext<ServerListStateModel>, action: SetServerListFilter) {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        serverListFilter: action.payload
      })
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