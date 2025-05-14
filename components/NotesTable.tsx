'use client';

import { notes } from "../data/notes";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  IconButton,
  Chip,
  Stack,
  Tooltip
} from "@mui/material";
import { 
  Launch as ViewIcon,
  Edit as EditIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon 
} from '@mui/icons-material';
import Link from 'next/link';
import { useState } from 'react';

export default function NotesTable() {
  const [data, setData] = useState(notes);

  const handleToggleFavorite = (noteId: number) => {
    setData(prev => 
      prev.map(note => 
        note.id === noteId 
          ? { ...note, is_favorite: !note.is_favorite }
          : note
      )
    );
  };

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((note) => (
            <TableRow key={note.id} hover>
              <TableCell>{note.title}</TableCell>
              <TableCell>
                <Chip 
                  label={note.category} 
                  size="small"
                  color={note.category === 'Work' ? 'primary' : 'secondary'}
                />
              </TableCell>
              <TableCell>
                <Chip 
                  label={note.priority} 
                  size="small"
                  color={
                    note.priority === 'High' ? 'error' :
                    note.priority === 'Medium' ? 'warning' : 'success'
                  }
                />
              </TableCell>
              <TableCell>
                <Stack direction="row" spacing={0.5} flexWrap="wrap">
                  {note.tags.map((tag) => (
                    <Chip 
                      key={tag} 
                      label={tag} 
                      size="small" 
                      variant="outlined" 
                    />
                  ))}
                </Stack>
              </TableCell>
              <TableCell>
                <Chip 
                  label={note.status} 
                  size="small"
                  color={note.status === 'Active' ? 'info' : 'success'}
                />
              </TableCell>
              <TableCell align="right">
                <Stack direction="row" spacing={1} justifyContent="flex-end">
                  <Tooltip title="View Note">
                    <IconButton 
                      component={Link} 
                      href={`/notes/${note.id}`}
                      size="small"
                      color="info"
                    >
                      <ViewIcon />
                    </IconButton>
                  </Tooltip>
                  {/* <Tooltip title="Edit Note">
                    <IconButton 
                      component={Link}
                      href={`/notes/${note.id}/edit`}
                      size="small"
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip> */}
                  {/* <Tooltip title="Toggle Favorite">
                    <IconButton
                      size="small"
                      color="warning"
                      onClick={() => handleToggleFavorite(note.id)}
                    >
                      {note.is_favorite ? <StarIcon /> : <StarBorderIcon />}
                    </IconButton>
                  </Tooltip> */}
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}