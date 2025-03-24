'use client';

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import React from 'react';
import MenuMobileOpen from './header-menu-mobile-open';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function HeaderComponent() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <>
      <AppBar
        position="relative"
        sx={{
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px',
          background:
            'linear-gradient(125deg, rgba(255,255,255,1)30%,rgba(255,255,255,1))',
          display: 'flex',
          alignItems: {
            md: 'end',
          },
          justifyContent: 'end',
        }}
      >
        <Box
          sx={{
            display: {
              md: 'none',
            },
          }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Link
                style={{
                  display: 'flex',
                  width: '100%',
                  gap: 4,
                }}
                href={'/'}
              >
                {/* <Image src="/icon-logo.png" height={28} width={28} alt="logo" /> */}
                <Box
                  sx={{
                    display: 'flex',
                    height: '100%',
                  }}
                >
                  <Typography
                    sx={{ fontWeight: '500' }}
                    variant="h4"
                    color="grey.700"
                  >
                    safe
                  </Typography>
                  <Typography
                    sx={{ fontWeight: '500' }}
                    variant="h4"
                    color="primary"
                  >
                    trip
                  </Typography>
                </Box>
              </Link>
            </Box>
            <Box>
              <IconButton>
                <AccountCircleIcon
                  sx={{ fontSize: '30px', color: '#616161' }}
                />
              </IconButton>
              <IconButton
                onClick={() => setOpenDrawer(true)}
                edge="end"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon sx={{ fontSize: '30px', color: '#616161' }} />
              </IconButton>
            </Box>
            <Drawer
              anchor="right"
              open={openDrawer}
              PaperProps={{
                sx: { width: '100%' },
              }}
              onClose={() => setOpenDrawer(false)}
            >
              <MenuMobileOpen setOpenDrawer={setOpenDrawer} />
            </Drawer>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
}
