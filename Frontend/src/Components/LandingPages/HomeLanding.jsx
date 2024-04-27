import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import HomePng from '../../assets/homePage.png';
import styles from '../../CSS/style.module.css';
import { Link } from 'react-router-dom';

const btnStyle = {
    background: '#F57C00',
    color: '#fff',
    border: '1px solid #F57C00',
    "&:hover": {
        background: '#fff',
        color: '#F57C00',
    }
};

const HomeLanding = () => {
    return (
        <Grid container mt={10} sx={{
            padding: {
                md: '5rem',
                xs: '5px'
            },
            display: 'flex',
            flexDirection: 'row'
        }}>
            <Grid item md={6}>
                <Box>
                    <Typography variant='h1' fontWeight={550} sx={{
                        color: '#F57C00'
                    }}>
                        Customer<br />
                        <Typography variant='h1' color={'#2D3748'} fontWeight={400}>
                            Service
                        </Typography>
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{
                            fontSize: {
                                md: '6rem',
                                xs: '5rem'
                            },
                            color: '#F57C00'
                        }}>|</Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            <Typography>
                                Voluptate neque in inventore illo voluptatem vel consequuntur officiis aliquid quo
                            </Typography>
                        </Typography>
                    </Box>
                    <Stack direction={'row'} mt={3} spacing={5}>
                        <Link to={'/complaint'} styles={{ textDecoration: 'none', color: '#000' }}>
                            <Button variant='contained' sx={{ ...btnStyle }}>
                                Complaint
                            </Button>
                        </Link>
                        <Link to='/faq' styles={{ textDecoration: 'none', color: '#000' }}>
                            <Button variant="outlined" sx={{ ...btnStyle, color: '#F57C00', background: 'none' }}>
                                More Info
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Grid>
            <Grid item md={3}>
                <Box sx={{
                    display: {
                        md: 'block',
                        xs: 'none'
                    }
                }}>
                    <img src={HomePng} className={styles.HomeImage} alt={'Home'} height={480} width={680} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default HomeLanding;
