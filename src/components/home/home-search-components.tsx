'use client';

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ObjectTravel } from './home-mobile-object-list';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import React from 'react';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';

export default function HomeSearchComponents() {
  // search
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    libraries: ['places'],
  });

  // data

  const [openData, setOpenData] = React.useState(false);
  // const [dataTravel, setDataTravel] = React.useState('');
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenData(newOpen);
  };

  // transporte
  const [keyNameActive, setKeyNameActive] = React.useState(
    ObjectTravel[0].keyName,
  );
  console.log(keyNameActive);
  const [activeTransfer, setActiveTransfer] = React.useState(
    ObjectTravel[0].nome,
  );

  return (
    <Box>
      <Box
        sx={{
          p: 1,
          borderRadius: 2,
          display: 'flex',
          gap: 2,
        }}
      >
        {ObjectTravel.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            {/* TRANSPORTE */}
            <IconButton
              onClick={() => {
                setActiveTransfer(item.nome);
                setKeyNameActive(item.keyName);
              }}
              sx={{
                p: 2,
                border: '1px solid #bdbdbd',
                borderRadius: 2,
                boxShadow: 'rgba(149, 157, 165, 0.1) 0px 1px 2px',
                backgroundColor:
                  activeTransfer === item.nome ? 'primary.main' : 'inherit',
                borderColor:
                  activeTransfer === item.nome ? 'primary.main' : '#eee',
                '&:hover': {
                  backgroundColor:
                    activeTransfer === item.nome ? 'primary.main' : 'inherit',
                },
              }}
            >
              {item.nome === 'Ônibus' ? (
                <DirectionsBusIcon
                  sx={{
                    fontSize: '32px',
                    color: item.nome === activeTransfer ? '#fff' : 'inherit',
                  }}
                  color="secondary"
                />
              ) : item.nome === 'Carro' ? (
                <DirectionsCarIcon
                  sx={{
                    fontSize: '32px',
                    color: item.nome === activeTransfer ? '#fff' : 'inherit',
                  }}
                  color="secondary"
                />
              ) : item.nome === 'Uber' ? (
                <LocalTaxiIcon
                  sx={{
                    fontSize: '32px',
                    color: item.nome === activeTransfer ? '#fff' : 'inherit',
                  }}
                  color="secondary"
                />
              ) : item.nome === 'Avião' ? (
                <AirplanemodeActiveIcon
                  sx={{
                    fontSize: '32px',
                    color: item.nome === activeTransfer ? '#fff' : 'inherit',
                  }}
                  color="secondary"
                />
              ) : null}
            </IconButton>
            <Typography variant="body2" color="secondary">
              {item.nome}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider
        sx={{ mt: 2, mb: 2, background: 'rgba(0,0,0,0.01)' }}
        variant="middle"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {/* PARTIDA E DESTINO */}
        <ListItem
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            width: '100%',
            background: '#fdfdfd',
            boxShadow: 'rgba(100, 100, 111, 0.05) 0px 1px .5px .5px',
            borderRadius: 1,
          }}
          disablePadding
        >
          <Box
            sx={{
              width: '100%',
            }}
          >
            <ListItemButton onClick={toggleDrawer(true)} sx={{ width: '100%' }}>
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  gap: '8px',
                }}
              >
                <SearchIcon sx={{ fontSize: '32px' }} color="secondary" />
                <Box>
                  <Typography variant="body2" color="grey.400">
                    Partida / Destino
                  </Typography>
                  <Typography variant="body1" color="grey.700">
                    Para onde?
                  </Typography>
                </Box>
              </Box>
            </ListItemButton>
            <Drawer
              anchor="bottom"
              open={openData}
              sx={{ zIndex: '1' }}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{
                  display: 'flex',
                  px: 2,
                  pb: 2,
                  height: '500px',
                  overflow: 'auto',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    borderTop: '2px solid #9e9e9e',
                    width: '10%',
                    mt: 2,
                    alignSelf: 'center',
                  }}
                />

                <Box
                  sx={{
                    zIndex: 123,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{ mt: 2 }}
                    textAlign="center"
                    variant="h3"
                    color="primary"
                    gutterBottom
                  >
                    Escolha o Local
                  </Typography>
                  {isLoaded && (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        mt: 2,
                      }}
                    >
                      <Typography variant="body1" color="grey.700">
                        Partindo de
                      </Typography>
                      <Autocomplete>
                        <TextField label="De onde você vai sair..." />
                      </Autocomplete>
                      <Typography
                        sx={{ mt: 1 }}
                        variant="body1"
                        color="grey.700"
                      >
                        Destino
                      </Typography>
                      <Autocomplete>
                        <TextField label="Para onde você vai..." />
                      </Autocomplete>
                    </Box>
                  )}
                </Box>
              </Box>
            </Drawer>
          </Box>
        </ListItem>
        {/* DATA */}
        <ListItem
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            width: '100%',
            background: '#fdfdfd',
            boxShadow: 'rgba(100, 100, 111, 0.05) 0px 1px .5px .5px',
            borderRadius: 1,
          }}
          disablePadding
        >
          <Box
            sx={{
              width: '100%',
            }}
          >
            <ListItemButton sx={{ width: '100%' }}>
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  gap: '8px',
                }}
              >
                <DateRangeIcon sx={{ fontSize: '32px' }} color="secondary" />
                <Box>
                  <Typography variant="body2" color="grey.400">
                    Chegada / Saída
                  </Typography>
                  <Typography variant="body1" color="grey.700">
                    Selecione as datas
                  </Typography>
                </Box>
              </Box>
            </ListItemButton>
          </Box>
        </ListItem>
        {/* HOSPEDES */}
        <ListItem
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            width: '100%',
            background: '#fdfdfd',
            boxShadow: 'rgba(100, 100, 111, 0.05) 0px 1px .5px .5px',
            borderRadius: 1,
          }}
          disablePadding
        >
          <Box
            sx={{
              width: '100%',
            }}
          >
            <ListItemButton sx={{ width: '100%' }}>
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  gap: '8px',
                }}
              >
                <PeopleOutlineIcon
                  sx={{ fontSize: '32px' }}
                  color="secondary"
                />
                <Box>
                  <Typography variant="body2" color="grey.400">
                    2 hóspedes, 1 quarto
                  </Typography>
                  <Typography variant="body1" color="grey.700">
                    Hóspedes e quartos
                  </Typography>
                </Box>
              </Box>
            </ListItemButton>
          </Box>
        </ListItem>

        {/* VALOR MÁXIMO */}
        <ListItem
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            width: '100%',
            background: '#fdfdfd',
            boxShadow: 'rgba(100, 100, 111, 0.05) 0px 1px .5px .5px',
            borderRadius: 1,
          }}
          disablePadding
        >
          <Box
            sx={{
              width: '100%',
            }}
          >
            <ListItemButton sx={{ width: '100%' }}>
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  gap: '8px',
                }}
              >
                <LocalAtmIcon sx={{ fontSize: '32px' }} color="secondary" />
                <Box>
                  <Typography variant="body2" color="grey.400">
                    Valor máximo
                  </Typography>
                  <Typography variant="body1" color="grey.700">
                    R$1200,00
                  </Typography>
                </Box>
              </Box>
            </ListItemButton>
          </Box>
        </ListItem>
      </Box>
    </Box>
  );
}
