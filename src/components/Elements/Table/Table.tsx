import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import * as React from "react";

type TableColumn<Entry> = {
  title: string;
  field: keyof Entry;
  Cell?({ entry }: { entry: Entry }): React.ReactElement;
};

export type TableProps<Entry> = {
  data: Entry[];
  columns: TableColumn<Entry>[];
};

export const Table = <Entry extends { id: string }>({
  data,
  columns,
}: TableProps<Entry>) => {
  if (!data?.length) {
    return (
      <div className="flex h-80 flex-col items-center justify-center bg-white text-neutral-500">
        <ArchiveBoxIcon className="h-16 w-16" />
        <h4>No Entries Found</h4>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto lg:-mx-8 sm:-mx-6">
        <div className="inline-block min-w-full py-2 align-middle lg:px-8 sm:px-6">
          <div className="overflow-hidden border-b border-neutral-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  {columns.map((column, index) => (
                    <th
                      key={column.title + index}
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500"
                      scope="col"
                    >
                      {column.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((entry, entryIndex) => (
                  <tr
                    key={entry?.id || entryIndex}
                    className="odd:bg-white even:bg-neutral-100"
                  >
                    {columns.map(({ Cell, field, title }, columnIndex) => (
                      <td
                        key={title + columnIndex}
                        className="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-900"
                      >
                        {Cell ? <Cell entry={entry} /> : entry[field]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
