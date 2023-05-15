import { Button, Container, IconButton } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function FormOrder() {
  const navigate = useNavigate();
  const [formLoginAdmin, setFormLoginAdmin] = useState({ orderName: 'asdasd', orderDescription: '123' });

  React.useEffect(() => {
    document.title = 'New Order';
  }, []);

  const handleSubmitOrder = async (data) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `https://643437481c5ed06c9592229a.mockapi.io/api/v1/FormOrder`,
        data: data,
      });
      console.log(res);
      //   navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <IconButton onClick={() => navigate('/')} sx={{ color: 'black' }}>
            <ArrowBackIcon />
          </IconButton>
          <h1>Form Pemesanan</h1>
        </div>
        <Button variant="contained" onClick={() => handleSubmitOrder()} sx={{ borderRadius: '50px' }}>
          Pesanan Baru
        </Button>
      </Container>
    </Fragment>
  );
}

export default FormOrder;
