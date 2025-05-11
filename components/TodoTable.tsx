'use client';

import { todos } from "../data/todos";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link as MuiLink } from "@mui/material";
import Link from "next/link";

export default function TodoTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map(todo => (
            <TableRow key={todo.date}>
              <TableCell>{todo.date}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>
                <MuiLink component={Link} href={`/todos/${todo.date}`} underline="hover">
                  View/Edit
                </MuiLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
