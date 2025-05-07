import { AppBar, Toolbar, Typography } from "@mui/material";
import NavbarActions from './NavbarActions';

export default function NavbarServer() {
    console.log("NavbarServer rendered");
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component="h1" 
          sx={{ 
            flexGrow: 1,
            fontWeight: 600
          }}
        >
          Task Manager
        </Typography>
        <NavbarActions />
      </Toolbar>
    </AppBar>
  );
}