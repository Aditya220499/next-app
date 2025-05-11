'use client';

import { notes } from "../../../data/notes";
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Button,
  TextField,
  Stack,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { 
  ArrowBack, 
  Delete as DeleteIcon, 
  Save as SaveIcon, 
  Add as AddIcon 
} from '@mui/icons-material';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Constants for select options
const CATEGORIES = ['Work', 'Personal', 'Ideas', 'Projects', 'Learning'];
const PRIORITIES = ['High', 'Medium', 'Low'];
const STATUSES = ['Active', 'Completed', 'Archived'];

interface Note {
  id: number;
  title: string;
  content: string;
  category: string;
  priority: string;
  status: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export default function NotePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const noteData = notes.find(n => n.id.toString() === params.id);
  const [newTag, setNewTag] = useState('');
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  
  const [note, setNote] = useState<Note>(noteData || {
    id: parseInt(params.id),
    title: '',
    content: '',
    category: '',
    priority: 'Medium',
    status: 'Active',
    tags: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  });

  const handleAddTag = () => {
    if (newTag.trim() && !note.tags.includes(newTag.trim())) {
        if (note.tags.length >= 5) {
          alert('You can only add up to 5 tags.');
          return;
        }
      setNote({
        ...note,
        tags: [...note.tags, newTag.trim()]
      });
      setNewTag('');
    }
  };

  const handleUpdate = () => {
    if (!note.title.trim()) {
      alert('Title is required');
      return;
    }
    // TODO: Implement update logic
    console.log('Updating note:', note);
    router.push('/');
  };

  const handleDelete = () => {
    // TODO: Implement delete logic
    console.log('Deleting note:', note);
    setShowDeleteDialog(false);
    router.push('/');
  };

  if (!noteData) {
    return (
      <Container maxWidth="md">
        <Box sx={{ 
          py: 8, 
          textAlign: 'center',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant="h4" color="error" gutterBottom>
            Note not found
          </Typography>
          <Button 
            component={Link} 
            href="/" 
            startIcon={<ArrowBack />}
            variant="contained"
            size="large"
          >
            Back to Dashboard
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Button 
          component={Link} 
          href="/" 
          startIcon={<ArrowBack />}
          size="large"
        >
          Back
        </Button>
        <Button
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => setShowDeleteDialog(true)}
          size="large"
        >
          Delete
        </Button>
      </Stack>
      
      <Paper 
        elevation={2}
        sx={{ 
          p: 4,
          borderRadius: 2,
          backgroundColor: 'background.paper'
        }}
      >
        <Stack spacing={3}>
          <TextField
            label="Title"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            fullWidth
            variant="outlined"
            required
          />

          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              value={note.category}
              label="Category"
              onChange={(e) => setNote({ ...note, category: e.target.value })}
            >
              {CATEGORIES.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              labelId="priority-label"
              value={note.priority}
              label="Priority"
              onChange={(e) => setNote({ ...note, priority: e.target.value })}
            >
              {PRIORITIES.map((priority) => (
                <MenuItem key={priority} value={priority}>
                  {priority}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              value={note.status}
              label="Status"
              onChange={(e) => setNote({ ...note, status: e.target.value })}
            >
              {STATUSES.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Content"
            value={note.content}
            onChange={(e) => setNote({ ...note, content: e.target.value })}
            fullWidth
            multiline
            rows={6}
            variant="outlined"
          />

          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Tags
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {note.tags?.map((tag) => (
                  <Chip 
                    key={tag} 
                    label={tag} 
                    onDelete={() => {
                      setNote({
                        ...note,
                        tags: note.tags.filter(t => t !== tag)
                      });
                    }}
                    sx={{ mb: 1 }}
                  />
                ))}
              </Stack>
              <Stack direction="row" spacing={1}>
                <TextField
                  label="New Tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  size="small"
                //   onKeyPress={(e) => {
                //     if (e.key === 'Enter') {
                //       handleAddTag();
                //     }
                //   }}
                />
                <Button
                  startIcon={<AddIcon />}
                  onClick={handleAddTag}
                  variant="outlined"
                >
                  Add Tag
                </Button>
              </Stack>
            </Stack>
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
            onClick={handleUpdate}
            sx={{ mt: 2 }}
          >
            Save Changes
          </Button>
        </Stack>
      </Paper>

      <Dialog
        open={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
      >
        <DialogTitle>Delete Note</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this note? This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteDialog(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}