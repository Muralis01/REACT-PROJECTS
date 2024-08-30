import { Alert, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
function App()
{
    const [name,setName] = useState(' ');
    const handleChange = (event)=>
    {
        setName(event.target.value);
    };
    const handleSubmit =()=>
    {
        alert('Hello,${name}');
    };
    return (
        <Container maxWidth="sm" style={{marginTop:'50px'}}>
            <Typography variant="h4" gutterBottom>
                Welcome !!!
            </Typography>
            <TextField
            label="Enter your Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange = {handleSubmit}
            style={{marginBottom:'20px'}}
            />
            <button variant="contained" color="primary" onClick={handleSubmit}>Submit</button>

        </Container>
    );
}
export default App;