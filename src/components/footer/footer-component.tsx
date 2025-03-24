'use client';

import {
  Box,
  Divider,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Button,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';
import Link from 'next/link';

export default function FooterComponent() {
  const [pais, setPais] = React.useState('PT-BR');
  const handleChange = (event: SelectChangeEvent) => {
    setPais(event.target.value as string);
  };

  return (
    <Box sx={{ height: '100%', background: '#616161', mt: 4 }}>
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <Typography variant="h4" color="dark.light">
            logo
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <IconButton aria-label="Example">
              <TwitterIcon sx={{ color: '#fff' }} />
            </IconButton>
            <IconButton aria-label="Example">
              <InstagramIcon sx={{ color: '#fff' }} />
            </IconButton>
            <IconButton aria-label="Example">
              <WhatsAppIcon sx={{ color: '#fff' }} />
            </IconButton>
            <IconButton aria-label="Example">
              <FacebookIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ minWidth: 120, maxWidth: '70%', mt: 2 }}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="demo-simple-select-label">{pais}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={pais}
              label={pais}
              onChange={handleChange}
            >
              <MenuItem value={'PT-BR'}>Português</MenuItem>
              <MenuItem value={'EN-US'}>Inglês</MenuItem>
              <MenuItem value={'ES-MX'}>Espanhõl</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 4, gap: 2 }}>
          <Link href={'/'}>Quem somos</Link>
          <Link href={'/'}>Vagas</Link>
          <Link href={'/'}>Imprensa</Link>
          <Link href={'/'}>Publicidade e Investidores</Link>
        </Box>
        <Divider
          sx={{ background: 'rgba(255,255,255,0.5)', mt: 4, mb: 4 }}
          component="li"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Link href={'/'}>App nome - acesse agora</Link>
          <Link href={'/'}>Afiliados</Link>
          <Link href={'/'}>Termos e Condições</Link>
          <Link href={'/'}>Central de ajuda</Link>
        </Box>
        <Divider
          sx={{ background: 'rgba(255,255,255,0.5)', mt: 4, mb: 4 }}
          component="li"
        />
        <Box>
          <Typography variant="h4" color="dark.light" gutterBottom>
            Quer dicas exclusivas para a sua próxima viagem?
          </Typography>
          <Typography variant="body1" color="grey.300">
            Inscreva-se em nossa newsletter.
          </Typography>
          <Box>
            <Input
              type="email"
              sx={{
                mt: 2,
                p: 1,
                gap: 2,
                border: '1px solid #fff',
                borderRadius: 1,
              }}
              placeholder="Digite seu email.."
              startAdornment={<MailIcon sx={{ color: '#fff' }} />}
              endAdornment={
                <Button
                  sx={{ textTransform: 'none', boxShadow: 'none' }}
                  variant="contained"
                  color="primary"
                >
                  Enviar
                </Button>
              }
            />
          </Box>
        </Box>

        <Typography
          sx={{ mt: 4 }}
          textAlign="center"
          variant="body2"
          color="grey.500"
        >
          © 2025 safetrip , Todos os direitos reservados.
        </Typography>
        <Typography
          sx={{ mt: 2 }}
          textAlign="center"
          variant="body2"
          color="primary"
        >
          bruno.moura.code@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}
