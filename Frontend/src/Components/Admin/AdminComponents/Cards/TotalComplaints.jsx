import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

const hoverEffect = {
  background: '#fff',
  color: '#000',
  ':hover': {
    background: '#f57c00',
    color: '#fff',
  }
}
export default function TotalComplaints() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', ...hoverEffect }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Total Complaints
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" >
            {'Complaints'}
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