import Navbar from "../components/Navbar";
import TodoTable from "../components/TodoTable";
import NotesTable from "../components/NotesTable";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 4, 
            justifyContent: 'center'
          }}
        >
          <Box 
            sx={{ 
              width: 500,
              height: 500,
              p: 2,
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              overflow: 'auto'
            }}
          >
            <Typography variant="h5" gutterBottom>
              Todo List
            </Typography>
            <TodoTable />
          </Box>

          <Box 
            sx={{ 
              width: 500,
              height: 500,
              p: 2,
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              overflow: 'auto'
            }}
          >
            <Typography variant="h5" gutterBottom>
              Notes
            </Typography>
            <NotesTable />
          </Box>
        </Box>
      </Container>
    </>
  );
}