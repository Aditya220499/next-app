import Navbar from "../components/navbar/index";
import NotesTable from "../components/NotesTable";
import { Box, Container, Typography, Paper } from "@mui/material";

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
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 3,
              fontWeight: 600,
              color: 'primary.main'
            }}
          >
            My Notes
          </Typography>
          
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