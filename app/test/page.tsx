import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

function Page() {
  const [sorting, setSorting] = React.useState([]);
  const [filtering, setFiletering] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiletering,
  });

  return (
    <table>
      <thead>
        <tr key={headerGroup.id}>
          {buildHeaderGroups.headers.map((header) => (
            <th
              key={header.id}
              onClick={header.column.getToggleSortingHandler()}
            >
              {header.isPlaceholder ? null : (
                <div>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getcontext()
                  )}
                  {}
                </div>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{table.getRowModel().rows.map((row) => {})}</tbody>
    </table>
  );
}

export default Page;

const table = useReactTable({
  data,
  columns,
  getFilteredRowModel: getFilteredRowModel(),
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  state: {
    globalFilter: setGlobalFilter,
    onSortingChange: setSortingChange,
  },
});

return (
  <table>
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} onSelect={}></th>
          ))}
        </tr>
      ))}
      <th>
        <tr>
          <th></th>
        </tr>
      </th>
    </thead>
    <tbody>
      <tr>
        <td></td>
      </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
);
