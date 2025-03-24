import { Box, List, ListItem, Typography, Button } from '@mui/material';
import { TransladosObject } from './only-transfer-object';

export default function TransferSearchComponent() {
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
          Translados
        </Typography>
        <Button
          sx={{ textTransform: 'none', fontWeight: '500' }}
          variant="text"
          color="primary"
        >
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
            {TransladosObject.map((item, index) => (
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
                  {item.nomeTranslados}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant="body2" gutterBottom color="grey.700">
                    {item.empresa}
                  </Typography>
                  <Typography variant="body2" gutterBottom color="grey.700">
                    {item.detailTranslados}
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
                  {item.descriptionTranslados}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1 }}>
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
