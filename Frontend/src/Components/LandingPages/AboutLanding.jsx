import React from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Counter from '../CounterUpPage/Counter';

const AboutLanding = () => {
    return (
        <>
            <Grid container md={12} justifyContent={'center'} alignItems={'center'} p={15}>
                <Grid item md={4}>
                    <Stack direction={'column'} spacing={2}>
                        <Typography variant="h5" >
                            Work progress
                        </Typography>
                        <Typography variant='h2' fontWeight={600} color={'#F57C00'}>
                            How it Works
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item md={6} spacing={10}>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima alias vitae molestias minus fugiat quaerat labore, consectetur recusandae porro obcaecati accusamus quam, tenetur doloribus quod distinctio ex. Exercitationem cupiditate, beatae quos dignissimos quidem numquam praesentium officiis possimus amet et.
                    </Typography>
                </Grid>
                <Grid item md={2} p={10}>
                    <Button variant='contained' sx={{
                        background: '#F57C00',
                        color: '#fff',
                        ":hover": {
                            background: '#ffff',
                            border: '1px solid #F57C00',
                            color: '#F57C00'
                        }
                    }}>
                        Complaint
                    </Button>
                </Grid>
            </Grid>

            {/* Counter Up animation page */}
            <Box pt={16}>
                <Counter />
            </Box>
        </>
    )
}

export default AboutLanding
