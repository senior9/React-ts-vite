import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Box } from '@material-ui/core';
import Stack from '@mui/material/Stack';



const UserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error,setError ]= useState('')
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !phone || !email) {
      setError('Please enter all required fields');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ name, phone, email }));
    navigate('/secondPage');
  };

  return (
    <Stack maxWidth="sm" sx={{ width: '100%' }} spacing={2}>
      <form onSubmit={handleSubmit}> 
        <Box my={2}>
          <TextField 
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            // required
          />
        </Box>
        <Box my={2}>
          <TextField
            label="Phone Number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            // required
          />
        </Box>
        
        <Box my={2}>
         <div> 
         <TextField
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            // required
            fullWidth
          />
         </div>
        </Box>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <br />
        <Box my={2}>
          <Button type="submit" variant="outlined" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Stack>
  );
};

export default UserForm;