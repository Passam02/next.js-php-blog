"use client"  
import Link from "next/link";
import { Avatar, Grid, Box, Icon, Checkbox, FormControlLabel, TextField, Button, Typography, Container } from "@mui/material";
import UndoIcon from '@mui/icons-material/Undo';
export default function forgotPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          pb: 6,
          pt: 3,
          marginTop: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{alignSelf: "flex-start"}}>
          <UndoIcon viewBox="0 0 16 16"></UndoIcon>
        </Link>
           
        
        <Typography component="h1" variant="h6" py={4}>
          Provide Email adress on which you created an account. Instructions on how to reset your password will be sent there
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Reset Password
          </Button>
        </Box>
      </Box>
    </Container>
  );
}