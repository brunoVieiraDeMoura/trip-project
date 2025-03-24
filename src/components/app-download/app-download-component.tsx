import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function AppDownloadComponent() {
  return (
    <Box
      sx={{
        color: 'red',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Typography
        sx={{ p: 2, fontWeight: '500' }}
        variant="h3"
        color="grey.700"
      >
        Baixe o app <span style={{ color: '#FF9944' }}>“nome”</span>
      </Typography>
      <Image width={1920} height={1080} src={'/download-app.jpg'} alt="img" />
    </Box>
  );
}
