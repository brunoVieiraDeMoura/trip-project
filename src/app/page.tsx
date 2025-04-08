import { Box, Typography } from '@mui/material';
import HeaderComponent from '../components/header/header-component-mobile';
import HomeComponent from '../components/home/home-component-mobile';
import SearchTrendComponent from '../components/search-trend/search-trend-mobile';
import HotelSearchComponent from '../components/only-hotel-search/hotel-component-mobile';
import TransferSearchComponent from '../components/only-transfer-search/transfer-component-mobile';
import InformationComponent from '../components/systeminfo/information-component-mobile';
import DottedLine from '../components/css-divider/dotted-line';
import AppDownloadComponent from '../components/app-download/app-download-component';
import RecentlyViewComponent from '../components/recently-view/recently-view-component';
import FooterComponent from '../components/footer/footer-component';
import DevicesIcon from '@mui/icons-material/Devices';
export default function Home() {
  return (
    <Box sx={{ width: '100%' }}>
      {/* MOBILE */}
      <Box
        sx={{
          width: '100%',
          display: {
            xs: 'flex',
            sm: 'none',
          },
          flexDirection: 'column',
        }}
      >
        <HeaderComponent />
        <HomeComponent />
        <SearchTrendComponent />
        <HotelSearchComponent />
        <TransferSearchComponent />
        <DottedLine />
        <InformationComponent />
        <DottedLine />
        <AppDownloadComponent />
        <RecentlyViewComponent />
        <FooterComponent />
      </Box>
      {/* DESKTOP */}
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: {
            xs: 'none',
            sm: 'flex',
          },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: '100%',
          }}
        >
          <DevicesIcon sx={{ color: '#ccc', fontSize: '4rem' }} />
          <Typography textAlign="center" variant="h3" color="grey.400">
            Site Desenvolvido apenas para Mobile
          </Typography>
          <Typography
            sx={{ mt: 2 }}
            gutterBottom
            textAlign="center"
            variant="body1"
            color="grey.400"
          >
            Este frontend demonstrativo foi desenvolvido apenas para versões
            mobile, Redimencione a tela com F12 ou use o seu celular.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
