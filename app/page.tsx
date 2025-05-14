import Navbar from "../components/navbar/index";
import NotesTable from "../components/NotesTable";
import { Box, Container, Typography, Paper, Button } from "@mui/material";
import { Add as AddIcon } from '@mui/icons-material';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Paper 
          elevation={2} 
          sx={{ 
            p: 3,
            borderRadius: 2,
            backgroundColor: 'background.paper'
          }}
        >
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3
          }}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 600,
                color: 'primary.main'
              }}
            >
              My Notes
            </Typography>
            
            <Button
              component={Link}
              href="/notes/create"
              variant="contained"
              startIcon={<AddIcon />}
              size="large"
            >
              Create New Note
            </Button>
          </Box>
          
          <Box sx={{ 
            minHeight: 'calc(100vh - 250px)',
            borderRadius: 1,
            overflow: 'auto'
          }}>
            <NotesTable />
          </Box>
        </Paper>
      </Container>
    </>
  );
}