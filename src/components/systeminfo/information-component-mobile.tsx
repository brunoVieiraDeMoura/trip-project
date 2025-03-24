import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function InformationComponent() {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            justifyContent: 'center',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Image
            width={96}
            height={96}
            alt="Icone de Pesquisa"
            src={'/system-icon-search.png'}
          />
          <Box>
            <Typography
              sx={{ fontWeight: '500' }}
              variant="h4"
              color="grey.700"
              gutterBottom
            >
              Busca instantânea
            </Typography>
            <Typography variant="body2" color="secondary">
              Encontre rapidamente entre milhões de hotéis a melhor opção para
              sua estadia.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            border: 'none',
            alignSelf: 'center',
            borderTop: '2px solid rgba(255,153,68,.1)',
            width: '80%',
          }}
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              sx={{ fontWeight: '500' }}
              variant="h4"
              color="grey.700"
              gutterBottom
            >
              Análise completa
            </Typography>
            <Typography variant="body2" color="secondary">
              Encontre rapidamente entre milhões de hotéis a melhor opção para
              sua estadia.
            </Typography>
          </Box>
          <Image
            width={96}
            height={96}
            alt="Icone de Pesquisa"
            src={'/system-icon-analytic.png'}
          />
        </Box>
        <Box
          sx={{
            border: 'none',
            alignSelf: 'center',
            borderTop: '2px solid rgba(255,153,68,.1)',
            width: '80%',
          }}
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            justifyContent: 'center',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Image
            width={96}
            height={96}
            alt="Icone de Pesquisa"
            src={'/system-icon-money.png'}
          />
          <Box>
            <Typography
              sx={{ fontWeight: '500' }}
              variant="h4"
              color="grey.700"
              gutterBottom
            >
              Melhores ofertas
            </Typography>
            <Typography variant="body2" color="secondary">
              Descubra descontos imperdíveis e reserve sua hospedagem pelo menor
              preço.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
