'use client';

import { notes } from "../data/notes";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link as MuiLink } from "@mui/material";
import Link from "next/link";

export default function NotesTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notes.map(note => (
            <TableRow key={note.id}>
              <TableCell>{note.title}</TableCell>
              <TableCell>
                <MuiLink component={Link} href={`/notes/${note.id}`} underline="hover">
                  Open
                </MuiLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
