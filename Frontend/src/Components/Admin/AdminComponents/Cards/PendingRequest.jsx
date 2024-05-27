import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

const hoverEffect = {
  background: '#fff',
  color: '#000',
  marginTop: '20px',
  boxShadow: '4px 8px 8px rgba(0, 0, 0, 0.2)',
  transition: '.2s linear',
  ':hover': {
      background: '#FFA500',
      color: '#fff',
      boxShadow: '0 0 10px #000',
      '& .MuiSvgIcon-root': { // Target the CheckCircleOutlineRoundedIcon
          color: '#fff',
      },
  }
}
export default function PendingRequest() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', ...hoverEffect }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Pending Complaints
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" >
            {'20'}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia sx={{
        color:'crimson',
        width: 151,
        height: 151,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <WarningAmberRoundedIcon sx={{
          fontSize: '4rem',
        }} />
      </CardMedia>
    </Card>
  );
}