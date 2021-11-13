import { Alert, TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch('https://boiling-beach-16570.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: '50%' }}
          label='Email'
          type='email'
          onBlur={handleOnBlur}
          variant='standard'
        />

        <Button
          type='submit'
          style={{
            backgroundColor: '#94c300',
            color: '#fff',
            marginTop: '4px',
            fontWeight: 'bold',
          }}
          variant='contained'
        >
          Make Admin
        </Button>
      </form>
      {success && <Alert severity='success'>Made Admin successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
