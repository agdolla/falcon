// @flow
export type TableType = {

  // TODO: Temporary. Not sure how else to store the state
  //       of a table's parent for tab breadcrumb routing
  databaseName: string,
  tableName: string,
  columns: Array<string>,
  rows: Array<{
    columnName: string,
    value: Array<any>
  }>
};
