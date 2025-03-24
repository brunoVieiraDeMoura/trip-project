import { Box } from '@mui/material';
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

export default function Home() {
  return (
    <Box sx={{ width: '100%' }}>
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
  );
}
