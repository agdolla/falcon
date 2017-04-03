// @flow
import type { TableType } from './tableType';

export type DatabaseType = {
  databaseName: string,
  tables: Array<TableType>
};
