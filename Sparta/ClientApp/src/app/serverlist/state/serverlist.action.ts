import { ServerListStartUp } from '../models/serverlist.model';
import { ITableColConfigState } from '../table/table-column-config';

export class FetchAllServers {
    static readonly type = '[ServerList] Fetch All'
}

export class GetServerListCols {
  static readonly type = '[ServerListCols] Get';
}

export class GetServerListFilters {
  static readonly type = '[ServerListFilter] Get';
}

export class SetServerListCols {
  static readonly type = '[SeverListCols] Set';
  constructor(public payload: any) {
  }
}

export class SetServerListFilter {
  static readonly type = '[ServerListFilter] Set';
  constructor(public payload: any) {}
}