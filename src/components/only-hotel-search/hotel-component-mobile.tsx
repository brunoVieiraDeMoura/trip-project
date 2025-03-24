import { Box, List, ListItem, Typography, Button } from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { OnlyHostelObject } from './only-hotel-object';
export default function HotelSearchComponent() {
  return (
    <Box sx={{ color: '#333' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          mt: 2,
          mb: -2,
        }}
      >
        <Typography sx={{ fontWeight: '500' }} variant="h4" color="grey.700">
          Hotéis
        </Typography>
        <Button sx={{ textTransform: 'none' }} variant="text" color="primary">
          Ver mais →
        </Button>
      </Box>
      <List
        sx={{
          background: 'none',
          borderRadius: 2,
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
              display: 'flex',
              gap: 2,
              p: 2,
            }}
          >
            {/* aqui */}
            {OnlyHostelObject.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  p: 2,
                  width: '320px',
                  borderRadius: 2,
                  flexDirection: 'column',
                  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 2px 12px 0px',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '200px',
                    background: `no-repeat url("${item.urlImage}")`,
                    backgroundSize: 'cover',
                    borderRadius: 2,
                  }}
                />
                <Typography
                  sx={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    mt: 1,
                    // maxWidth: '200px',
                  }}
                  variant="h6"
                  color="grey.700"
                >
                  {item.nomeHotel}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <BeachAccessIcon
                    sx={{ fontSize: '20px', color: '#616161' }}
                  />
                  <Typography variant="body2" gutterBottom color="grey.700">
                    {item.detailHotel}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    mt: 1,
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                    textOverflow: 'ellipsis',
                  }}
                  variant="body1"
                  color="grey.600"
                >
                  {item.descriptionHotel}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Box
                      sx={{
                        border: 'solid 2px #FF9944',
                        p: 1,
                        borderRadius: 1,
                      }}
                    >
                      <Typography variant="h6" color="primary">
                        {item.note}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1" color="grey.700">
                        {item.quality}
                      </Typography>
                      <Typography variant="body2" color="grey.500">
                        {item.avaliation}
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    sx={{ textTransform: 'none' }}
                    variant="contained"
                    color="primary"
                  >
                    Ver preços
                  </Button>
                </Box>
              </Box>
            ))}
            {/* aqui */}
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}
