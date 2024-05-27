import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import './detailsStyle.css';

const ComplaintDetails = () => {
    return (
        <Box justifyContent='center' alignItems='center' display='flex'>
            <Stack direction='column' alignItems='center' width='100%'>
                <Box 
                    className='BackgroundImage'
                   
                >
                    <Typography 
                        variant='h3' 
                        fontWeight={600} 
                        letterSpacing={1} 
                        color='#fff'  
                        maxWidth='100%' // Added to ensure text does not overflow on smaller screens
                        sx={{
                            paddingTop:{
                                md:'3rem',
                                xs:'2rem'
                            }
                        }}
                    >
                        One Website, One Platform,
                        <Typography component='p' variant='h3' sx={{ marginTop: '10px' }}>
                            Many Government Services
                        </Typography>
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}

export default ComplaintDetails;
