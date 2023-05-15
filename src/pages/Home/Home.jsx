import { Box, Button, ButtonGroup, Container } from '@mui/material';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();
  React.useEffect(() => {
    document.title = 'Home | Example React JS Program';
  }, []);

  return (
    <Fragment>
      <Container>
        <h1 style={{ textAlign: 'center' }}>Beranda</h1>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" onClick={() => navigate('/FormOrder')} sx={{ borderRadius: '50px' }}>
            Pesanan Baru
          </Button>
          <Button variant="contained" onClick={() => navigate('/Order')} sx={{ borderRadius: '50px' }}>
            List Pemesanan
          </Button>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={() => navigate('/Login')}>Login</Button>
            <Button onClick={() => navigate('/Register')}>Register</Button>
          </ButtonGroup>
        </Box>
      </Container>
    </Fragment>
  );
}

export default Home;
