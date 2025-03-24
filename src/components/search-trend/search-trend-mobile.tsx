'use client';

import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';
import Image from 'next/image';
import { SearchTrendObject } from './search-trend-object';
import React from 'react';

export default function SearchTrendComponent() {
  const [active, setActive] = React.useState(SearchTrendObject[0].nome);

  const activeDestination = SearchTrendObject.find(
    (item) => item.nome === active,
  );
  const lowestPrice =
    activeDestination &&
    Math.min(
      ...activeDestination.mes.map((month) => Number(month.precoInicial)),
    );

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
      }}
    >
      <Box
        sx={{ position: 'absolute', height: '100%', width: '100%', zIndex: -1 }}
      >
        <Image
          priority={true}
          src="/background.jpg"
          alt="always add alt"
          fill
          style={{ objectFit: 'cover', objectPosition: '25% 20%' }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1,
          background:
            'linear-gradient(180deg,rgba(0, 0, 0, .35),rgba(0, 0, 0, 0.05) 75%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1,
          background:
            'linear-gradient(0deg,rgba(255, 255, 255, 1) 40%,rgba(252, 252, 252, 0.05)70%)',
        }}
      />
      <Box sx={{ zIndex: 32, p: 2 }}>
        <Typography
          sx={{ mt: 2, fontWeight: '500' }}
          variant="h3"
          color="secondary.light"
        >
          Encontre os melhores valores para sua viagem.
        </Typography>
        <List
          sx={{
            background: '#ffffff',
            borderRadius: 2,
            mt: 4,
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 2px 8px 0px',
            p: 2,
          }}
        >
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              width: '100%',
              overflow: 'auto',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
            }}
            disablePadding
          >
            <Box
              sx={{
                p: 2,
                display: 'flex',
                gap: 2,
              }}
            >
              {SearchTrendObject.map((item, index) => (
                <ListItemButton
                  key={index}
                  onClick={() => {
                    setActive(item.nome);
                  }}
                  sx={{
                    p: 2,
                    border: '2px solid #eee',
                    borderRadius: '16px',
                    display: 'flex',
                    flex: '0 0 auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                    scrollSnapAlign: 'start',
                    backgroundColor:
                      active === item.nome ? 'primary.main' : 'inherit',
                    borderColor: active === item.nome ? 'primary.main' : '#eee',
                    '&:hover': {
                      backgroundColor:
                        active === item.nome ? 'primary.main' : 'inherit',
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: active === item.nome ? 'bold' : 'inherit',
                    }}
                    color={
                      active === item.nome ? 'secondary.light' : 'grey.500'
                    }
                  >
                    {item.nome}
                  </Typography>
                </ListItemButton>
              ))}
            </Box>
          </ListItem>
          <Typography sx={{ mt: 2 }} variant="body2" color="grey.400">
            Os preços são baseados em hotéis de 2 estrelas, cadastre-se e
            personalize sua experiência.
          </Typography>
          {SearchTrendObject.map((item, index) => (
            <Box key={index}>
              {active !== item.nome ? null : (
                <Box>
                  {item.nome === active &&
                    item.mes.map((itemMes, index) => (
                      <List
                        sx={{
                          backgroundColor:
                            Number(itemMes.precoInicial) === lowestPrice
                              ? '#FF9944'
                              : 'inherit',

                          borderRadius: 2,
                          mt: 2,
                          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 2px 8px 0px',
                        }}
                        key={index}
                      >
                        <ListItem
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'start',

                            width: '100%',
                          }}
                          disablePadding
                        >
                          <ListItemButton
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                fontWeight:
                                  Number(itemMes.precoInicial) === lowestPrice
                                    ? 'bold'
                                    : '',
                              }}
                              color={
                                Number(itemMes.precoInicial) === lowestPrice
                                  ? 'white'
                                  : 'grey.700'
                              }
                            >
                              {itemMes.nome}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                              <Typography
                                variant="body2"
                                color={
                                  Number(itemMes.precoInicial) === lowestPrice
                                    ? 'grey.100'
                                    : 'grey.700'
                                }
                              >
                                {itemMes.moeda}
                                {itemMes.precoInicial}.00
                              </Typography>
                              <Typography
                                variant="body2"
                                color={
                                  Number(itemMes.precoInicial) === lowestPrice
                                    ? 'grey.200'
                                    : 'grey.700'
                                }
                              >
                                {itemMes.texto}
                              </Typography>
                              <Typography
                                variant="body2"
                                color={
                                  Number(itemMes.precoInicial) === lowestPrice
                                    ? 'grey.100'
                                    : 'grey.700'
                                }
                              >
                                {itemMes.moeda}
                                {itemMes.precoFinal}.00
                              </Typography>
                            </Box>
                          </ListItemButton>
                        </ListItem>
                      </List>
                    ))}
                </Box>
              )}
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
}
