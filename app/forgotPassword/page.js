"use client"  
import Link from "next/link";
import { useState } from "react";
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
  const [sent, togglesent] = useState(false)

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
        {sent ?
        <UndoIcon viewBox="0 0 16 16" onClick={() => togglesent(!sent)} sx={{alignSelf:"flex-start", cursor: 'pointer'}}></UndoIcon> 
        :
        <Link href="/" style={{alignSelf: "flex-start"}}>
        <UndoIcon viewBox="0 0 16 16"></UndoIcon>
        </Link>
        }
           
        {sent ? 
        <Typography component="h1" variant="h6" py={4}>
          Instruction on how to reset your password has been sent to your email.
        </Typography>
        :
        <Typography component="h1" variant="h6" py={4}>
          Provide Email adress on which you created an account. Instructions on how to reset your password will be sent there
        </Typography>
        }
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {sent ?
          ''
          :
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
          }
          {sent ?
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
              Send again
            </Button>
            :
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => togglesent(!sent)}
            >
              Reset Password
            </Button>
          }
        </Box>
      </Box>
    </Container>
  );
}