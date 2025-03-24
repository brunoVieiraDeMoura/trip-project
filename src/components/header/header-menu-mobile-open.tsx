'use client';

import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';
import { ListaConfig, ListaMenu } from './menu-mobile-object-list';

export default function MenuMobileOpen({
  setOpenDrawer,
}: {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Box
        sx={{
          height: '100%',
          p: 2,
        }}
        role="presentation"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={() => setOpenDrawer(false)}
            edge="end"
            aria-label="menu"
          >
            <ArrowBackIosIcon sx={{ fontSize: '24px', colo: '#616161' }} />
          </IconButton>
          <Box sx={{ width: '100%', textAlign: 'center', ml: -2 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold' }}
              color="grey.700"
            >
              Menu
            </Typography>
          </Box>
        </Box>
        <List sx={{ mt: 4, gap: 1, display: 'flex', flexDirection: 'column' }}>
          {ListaMenu.map((menu, index) => (
            <Box key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ gap: 2 }}
                  onClick={() => setOpenDrawer(false)}
                >
                  {menu.icon}
                  <Link href={menu.link}>
                    <Typography variant="body1" color="initial">
                      {menu.nome}
                    </Typography>
                  </Link>
                </ListItemButton>
              </ListItem>
              {index < ListaMenu.length - 1 ? (
                <Divider sx={{ mt: 1 }} variant="middle" component="li" />
              ) : null}
            </Box>
          ))}
        </List>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: 'bold' }} variant="h4" color="grey.700">
            Configurações
          </Typography>
          <List
            sx={{ mt: 4, gap: 1, display: 'flex', flexDirection: 'column' }}
          >
            {ListaConfig.map((menu, index) => (
              <Box key={index}>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ gap: 2 }}
                    onClick={() => setOpenDrawer(false)}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        {menu.icon}
                        <Link href={menu.link}>
                          <Typography variant="body1" color="secondary">
                            {menu.nome}
                          </Typography>
                        </Link>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="initial">
                          {menu.detail}
                        </Typography>
                      </Box>
                    </Box>
                  </ListItemButton>
                </ListItem>
                {index < ListaConfig.length - 1 ? (
                  <Divider sx={{ mt: 1 }} variant="middle" component="li" />
                ) : null}
              </Box>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
}
