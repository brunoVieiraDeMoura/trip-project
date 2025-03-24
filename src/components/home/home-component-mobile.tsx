'use client';

import { Box, List, Typography, Button } from '@mui/material';

import Image from 'next/image';
import React from 'react';

import HomeSearchComponents from './home-search-components';

export default function HomeComponent() {
  return (
    <>
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography
          sx={{ mt: 1, fontWeight: '500' }}
          variant="h3"
          color="grey.700"
          gutterBottom
        >
          <Box sx={{ color: '#FF9944' }}>Economize até 60% </Box>na sua viagem.
        </Typography>
        <Typography variant="body1" color="secondary">
          Comparamos preços de hotéis, voos, pedágios, restaurantes, passeios e
          atrações turísticas em mais de 200 sites.
        </Typography>

        <List
          sx={{
            background: '#fff',
            borderRadius: 2,
            mt: 2,
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              p: 2,
              gap: 1,
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              alignSelf="start"
              variant="h5"
              color="secondary"
              gutterBottom
            >
              Qual meio de transporte?
            </Typography>
            <HomeSearchComponents />
          </Box>
          <Box sx={{ m: 2 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ fontWeight: 'bold' }}
            >
              Encontrar Pacotes
            </Button>
          </Box>
        </List>
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Image
            src="/logo-booking.svg"
            alt="booking"
            height={200}
            width={140}
          />

          <Image
            src="/logo-hotels.svg"
            alt="booking"
            height={200}
            width={120}
          />
          <Typography variant="body1" color="grey.500">
            +100 Sites
          </Typography>
        </Box>
      </Box>
    </>
  );
}
