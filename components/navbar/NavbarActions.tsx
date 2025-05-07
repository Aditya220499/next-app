'use client';

import { Button } from "@mui/material";
import Link from "next/link";

export default function NavbarActions() {
    console.log("NavbarActions rendered");
  return (
    <nav>
      <Button 
        color="inherit" 
        component={Link} 
        href="/"
        sx={{ 
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          }
        }}
      >
        Home
      </Button>
    </nav>
  );
}