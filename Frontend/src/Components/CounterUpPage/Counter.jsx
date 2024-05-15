import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Grid, Stack, Typography, Button } from "@mui/material";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import EastIcon from '@mui/icons-material/East';
import Tracking from '../../assets/figma/tracking.png'
import Language from '../../assets/figma/language.png'
import ChatBot from '../../assets/figma/chatbot.png'
import { Link } from "react-router-dom";
import style from '../../CSS/style.module.css'


const icon = {
    fontSize: '2.5rem'
}
const font = {
    fontSize: '2rem'
}
const btn = {
    background: '#19BE6F',
    padding: '.5rem',
    color: '#fff',
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '1px',
    ":hover": {
        background: '#19BE6F',
        color: '#fff',
    }
}
const hideMenu = {
    display: {
        sm: "none",
        xs: "none",
        lg: "block",
        md: "block"
    }

}

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                <div>
                    <article
                        className={style.CounterUp}
                    >
                        <Grid sx={{
                            ...hideMenu,
                            p: 4,
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: '#ECEAEA',
                            marginTop: "-8rem",
                            width: '80%',
                            borderRadius: '.6rem'

                        }}>

                            <Grid container lg={12} sx={{ alignItems: 'center', fontFamily: 'Rubik', justifyContent: 'center' }} spacing={8}>
                                <Grid item lg={8} sm={12} xs={12}>
                                    <Typography sx={{
                                        color: '#062A3F',
                                        fontSize: '2rem',
                                        fontWeight: 'bolder'
                                    }}>
                                        Provided services Lorem ipsum dolor sit amet.</Typography>

                                </Grid>
                                <Grid item lg={4} sm={12} xs={12} sx={{ paddingLeft: '3rem' }}>
                                    <Link to="/faq" style={{ textDecoration: 'none' }}>
                                        <Button sx={{ ...btn }}>
                                            More Details
                                            <EastIcon sx={{ fontSize: '15px', marginLeft: '2px' }} />
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>

                            <Grid container lg={12} spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '3rem', fontFamily: 'Rubik', width: '100%' }}>
                                <Grid item lg={4} sm={12} xs={12} >

                                    <Stack direction="row">
                                        <img src={Tracking} height="150px" width="150px" />
                                        <Stack direction="column" marginLeft={2}>
                                            <Typography sx={{ fontWeight: 'bolder', marginBottom: '1rem' }}>Language Support</Typography>
                                            <Typography>We provide language support to assist customers who may not understand English, allowing them to lodge complaints in their native language.</Typography>
                                        </Stack>
                                    </Stack>

                                </Grid>
                                <Grid item lg={4} sm={12} xs={12}>

                                    <Stack direction="row">
                                        <img src={Language} height="150px" width="150px" />
                                        <Stack direction="column" marginLeft={2}>
                                            <Typography sx={{ fontWeight: 'bolder', marginBottom: '1rem' }}>Complaint Tracking</Typography>
                                            <Typography>Our system enables real-time tracking of submitted complaints, providing updates on progress and actions taken for full transparency and customer satisfaction.</Typography>
                                        </Stack>
                                    </Stack>

                                </Grid>
                                <Grid item lg={4} sm={12} xs={12}>

                                    <Stack direction="row">
                                        <img src={ChatBot} height="150px" width="150px" />
                                        <Stack direction="column" marginLeft={2}>
                                            <Typography sx={{ fontWeight: 'bolder', marginBottom: '1rem' }}>Chat Bot</Typography>
                                            <Typography>Our chat bot assists users in raising and resolving basic complaints, streamlining the process for convenience.</Typography>
                                        </Stack>
                                    </Stack>

                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid container lg={8} className={style.CounterOn}  sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={2} sm={6} xs={6} md={6}>
                                <Stack direction="column" sx={{ justifyContent: 'center', alignItems: 'center' }} >
                                    <PersonAddAltIcon sx={{ ...icon }} />
                                    <div style={{ ...font }}>{counterOn && <CountUp start={0} end={200} duration={2} />}+</div>
                                    <Typography>Complaints</Typography>
                                </Stack>
                            </Grid>
                            <Grid item lg={2} sm={6} xs={6} md={6}>
                                <Stack direction="column" sx={{ justifyContent: 'center', alignItems: 'center' }} >
                                    <AddTaskIcon sx={{ ...icon }} />
                                    <div style={{ ...font }}>{counterOn && <CountUp start={0} end={160} duration={2} />}+</div>
                                    <Typography>Solved </Typography>
                                </Stack>
                            </Grid>
                            <Grid item lg={2} sm={6} xs={6} md={6}>
                                <Stack direction="column" sx={{ justifyContent: 'center', alignItems: 'center' }} >
                                    <PendingActionsIcon sx={{ ...icon }} />
                                    <div style={{ ...font }}>{counterOn && <CountUp start={0} end={40} duration={2} />}+</div>
                                    <Typography>Pending </Typography>
                                </Stack>
                            </Grid>
                            <Grid item lg={2} sm={6} xs={6} md={6}>
                                <Stack direction="column" sx={{ justifyContent: 'center', alignItems: 'center' }} >
                                    <GTranslateIcon sx={{ ...icon }} />
                                    <div style={{ ...font }}>{counterOn && <CountUp start={0} end={20} duration={2} />}+</div>
                                    <Typography>Languages</Typography>
                                </Stack>
                            </Grid>
                        </Grid>

                    </article>
                </div>

            </ScrollTrigger>
        </>

    )
}
export default Counter;