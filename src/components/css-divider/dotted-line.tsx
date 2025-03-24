import { Box } from '@mui/material';

export default function DottedLine() {
  return (
    <Box
      sx={{
        m: 2,
        mt: 4,
        mb: 4,
        border: 'none',
        borderTop: '8px dotted rgba(255,153,68,.2)',
      }}
    />
  );
}
