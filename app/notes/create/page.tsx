'use client';

import { useState, useEffect } from 'react';
import { 
  Container, 
  Paper, 
  Typography, 
  Box, 
  TextField, 
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Chip,
  CircularProgress
} from '@mui/material';
import { ArrowBack, Add as AddIcon, Save as SaveIcon } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Constants for select options
const CATEGORIES = ['Work', 'Personal', 'Ideas', 'Projects', 'Learning'];
const PRIORITIES = ['High', 'Medium', 'Low'];
const STATUSES = ['Active', 'Completed', 'Archived'];

interface NoteForm {
  title: string;
  content: string;
  category: string;
  priority: string;
  status: string;
  tags: string[];
}

export default function CreateNotePage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [formErrors, setFormErrors] = useState<Partial<NoteForm>>({});
  
  const [note, setNote] = useState<NoteForm>({
    title: '',
    content: '',
    category: '',
    priority: 'Medium',
    status: 'Active',
    tags: []
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateForm = (): boolean => {
    const errors: Partial<NoteForm> = {};
    
    if (!note.title.trim()) errors.title = 'Title is required';
    if (!note.category) errors.category = 'Category is required';
    if (!note.content.trim()) errors.content = 'Content is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddTag = () => {
    if (newTag.trim() && !note.tags.includes(newTag.trim())) {
      setNote({
        ...note,
        tags: [...note.tags, newTag.trim()]
      });
      setNewTag('');
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      // TODO: Implement API call to create note
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      console.log('Creating note:', note);
      router.push('/');
    } catch (error) {
      console.error('Error creating note:', error);
      // TODO: Show error message to user
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper 
          elevation={2}
          sx={{ 
            p: 4,
            borderRadius: 2,
            backgroundColor: 'background.paper',
            minHeight: '60vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CircularProgress />
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Button 
        component={Link} 
        href="/" 
        startIcon={<ArrowBack />}
        sx={{ mb: 4 }}
        size="large"
      >
        Back
      </Button>
      
      <Paper 
        elevation={2}
        sx={{ 
          p: 4,
          borderRadius: 2,
          backgroundColor: 'background.paper'
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 4,
            fontWeight: 600,
            color: 'primary.main'
          }}
        >
          Create New Note
        </Typography>

        <Stack spacing={3}>
          <TextField
            label="Title"
            value={note.title}
            onChange={(e) => {
              setNote({ ...note, title: e.target.value });
              if (formErrors.title) {
                setFormErrors({ ...formErrors, title: undefined });
              }
            }}
            fullWidth
            required
            error={!!formErrors.title}
            helperText={formErrors.title}
          />

          <FormControl fullWidth error={!!formErrors.category}>
            <InputLabel>Category</InputLabel>
            <Select
              value={note.category}
              label="Category"
              onChange={(e) => {
                setNote({ ...note, category: e.target.value });
                if (formErrors.category) {
                  setFormErrors({ ...formErrors, category: undefined });
                }
              }}
            >
              {CATEGORIES.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select
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
            <InputLabel>Status</InputLabel>
            <Select
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
            onChange={(e) => {
              setNote({ ...note, content: e.target.value });
              if (formErrors.content) {
                setFormErrors({ ...formErrors, content: undefined });
              }
            }}
            multiline
            rows={6}
            fullWidth
            required
            error={!!formErrors.content}
            helperText={formErrors.content}
          />

          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Tags
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {note.tags.map((tag) => (
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
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddTag();
                    }
                  }}
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
            size="large"
            onClick={handleSubmit}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : <SaveIcon />}
            sx={{ mt: 2 }}
          >
            {loading ? 'Creating...' : 'Create Note'}
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}