'use client';

import { useMemo } from 'react';
import { format } from 'date-fns';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { todos } from "../data/todos";
import { Box, IconButton, Tooltip } from '@mui/material';
import { Launch as LaunchIcon } from '@mui/icons-material';
import Link from 'next/link';

interface Todo {
  date: string;
  title: string;
  tasks: string[];
}

export default function TodoTable() {
  const columns = useMemo<MRT_ColumnDef<Todo>[]>(() => [
    {
      accessorKey: 'date',
      header: 'Date',
      Cell: ({ cell }) => {
        const rawDate = cell.getValue<string>();
        const date = new Date(rawDate + 'T00:00:00Z'); // Enforce UTC
        return format(date, 'yyyy-MM-dd');
      },
    },
    {
      accessorKey: 'title',
      header: 'Title',
    },
    {
      accessorKey: 'tasks',
      header: 'Tasks',
      Cell: ({ row }) => (
        <Box component="ul" sx={{ m: 0, pl: 2 }}>
          {row.original.tasks.map((task, index) => (
            <li key={`${row.original.date}-${index}`}>{task}</li>
          ))}
        </Box>
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip title="View Details">
            <IconButton
              component={Link}
              href={`/todos/${row.original.date}`}
              size="small"
            >
              <LaunchIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ], []);

  return (
    <MaterialReactTable
      columns={columns}
      data={todos}
      enableColumnOrdering
      enableGlobalFilter
      enablePagination
      enableSorting
      muiTableContainerProps={{
        sx: { maxHeight: '400px' },
      }}
      initialState={{
        density: 'compact',
        pagination: { pageSize: 5, pageIndex: 0 },
        sorting: [{ id: 'date', desc: false }],
      }}
      muiSearchTextFieldProps={{
        size: 'small',
        variant: 'outlined',
        placeholder: 'Search todos...',
      }}
      enableRowSelection={false}
      enableColumnActions={false}
      enableColumnFilters={false}
      enableDensityToggle={false}
      enableFullScreenToggle={false}
    />
  );
}
