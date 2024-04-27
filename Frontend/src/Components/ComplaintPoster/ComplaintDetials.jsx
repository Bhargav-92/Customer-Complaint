import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import './detailsStyle.css'

const ComplaintDetials = () => {
    return (
            <Box justifyContent={'center'} alignItems={'center'} display={'flex'} p={10}>
                <Stack direction={'column'}>
                    <div className='BackgroundImage'>
                        <Typography variant='h3' fontWeight={600} letterSpacing={1} color={'#fff'}  pl={6} width={'46rem'}>
                            One Website, One Platform,
                            <p style={{
                                marginTop: '10px'
                            }}>Many Government Services</p>
                        </Typography>
                    </div>
                </Stack>
            </Box>
    )
}

export default ComplaintDetials
