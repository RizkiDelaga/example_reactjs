import { Container, IconButton, Paper } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';

function ListOrder() {
  const navigate = useNavigate();
  const [listOrder, setListOrder] = useState([]);

  React.useEffect(() => {
    document.title = 'List ListOrder';
    getListOrder();
  }, []);

  const getListOrder = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://643437481c5ed06c9592229a.mockapi.io/api/v1/FormOrder`,
      });
      console.log(res);
      setListOrder(() => res.data);
      console.log(res.data);
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
          <h1>List Produk</h1>
        </div>
        {listOrder.length !== 0
          ? listOrder.map((item, index) => {
              return (
                <Paper elevation={3} sx={{ display: 'flex', gap: '10px', mb: 2, p: 2, borderRadius: '16px' }}>
                  <h4>{index + 1}. </h4>
                  <div>
                    <h4>{item.orderName}</h4>
                    <p>{item.orderDescription}</p>
                  </div>
                </Paper>
              );
            })
          : null}
      </Container>
    </Fragment>
  );
}

export default ListOrder;
