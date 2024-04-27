import { Box, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import InputField from '../Components/Input/InputField';
import CustomButton from '../Components/Button/Button';
import Footer from '../Components/Footer/Footer';

const Profile = () => {
    const arrow = ">";
    const SubmitText = "Submit"
    return (
        <>
            <Box p={15}>
                <Typography fontSize={'1.3rem'}>
                    <Link to="/home" style={{ textDecoration: 'none', color: '#000' }}>
                        Home
                    </Link>
                    &gt; Profile
                </Typography>
            </Box>
            <Grid container md={12} p={3} spacing={6}>
                <Grid item xs={12} md={4} pl={2} sx={{
                    display: {
                        md: 'block',
                        xs: 'none'
                    }
                }}
                >
                    <Stack spacing={2} >
                        <Link to="/home" style={{ textDecoration: 'none', color: '#000' }}>
                            <Typography>
                                Dashboard
                            </Typography>
                        </Link>
                        <hr />
                        <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                            <Typography>
                                Logout
                            </Typography>
                        </Link>
                        <hr />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={8} width={14} justifyContent="center" alignItems="center">
                    <form method='post'>
                        <Stack direction={'column'} spacing={5} >
                            <InputField label={'First Name'} placeholder={'Enter First Name'} isRequired={true} />
                            <InputField label={'Email Id'} placeholder={'Enter First Name'} isRequired={true} />
                            <InputField label={'Phone'} placeholder={'Enter First Name'} isRequired={true} />
                            <InputField label={'New Password'} placeholder={'Enter First Name'} isRequired={true} />
                            <InputField label={'Confirm Password'} placeholder={'Enter First Name'} isRequired={true} />
                            <TextField
                                type='file'
                                variant='outlined'
                            />
                            <CustomButton title={SubmitText} sx={{
                                background: '#F57C00',
                                fontSize: '1.2rem'
                            }}>
                                {SubmitText}
                            </CustomButton>
                        </Stack>
                    </form>
                </Grid>
            </Grid>
            <Box>
                <Footer />
            </Box>
        </>
    )
}

export default Profile
