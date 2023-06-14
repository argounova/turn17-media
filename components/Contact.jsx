import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Contact() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: 'var(--char4)'
      }}
      noValidate
      autoComplete="off"
    >
        <div style={{ width: '60%' }}>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--mb1-3)' }}>
            <TextField
                required
                id="name"
                label="Name"
                variant="filled"
            />
            <TextField
                required
                id="email"
                label="Email"
                variant="filled"
            />
            <TextField
                required
                id="message"
                label="Message"
                variant="filled"
                fullWidth
                multiline
                minRows={5}
            />   
        </div>
        <div style={{ width: '33vw', backgroundColor: 'var(--mb1-3)' }}>
            <p style={{ fontStyle: 'italic', fontSize: '30px', color: 'var(--char3)', padding: '20px' }}>
                Contact us for all your webbin' needs!
            </p>
        </div>     
    </Box>
  );
}