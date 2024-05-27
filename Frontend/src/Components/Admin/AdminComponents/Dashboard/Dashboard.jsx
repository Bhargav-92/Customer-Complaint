import React from 'react'
import PendingRequest from '../Cards/PendingRequest'
import CompletedRequest from '../Cards/ComplatedRequest'
import TotalComplaints from '../Cards/TotalComplaints'
import User from '../Cards/User'
import { Divider, Grid, Typography } from '@mui/material'
import LineChartComponent from '../Charts/LineChart'
import PieChartComponent from '../Charts/PieChart'

const Dashboard = () => {
    return (
        <>
            <div>
                <Grid container md={12} p={3}>
                    <Grid md={3} p={2}>
                        <PendingRequest />
                        <Divider sx={{ mt: 4 , width: '100%', border: '1px solid black'}} />
                    </Grid>
                    <Grid md={3} p={2}>
                        <CompletedRequest />
                        <Divider sx={{ mt: 4 , width: '100%', border: '1px solid black'}} />
                    </Grid>
                    <Grid md={3} p={2}>
                        <TotalComplaints />
                        <Divider sx={{ mt: 4 , width: '100%', border: '1px solid black'}} />
                    </Grid>
                    <Grid md={3} p={2}>
                        <User />
                        <Divider sx={{ mt: 4 , width: '100%', border: '1px solid black'}} />
                    </Grid>
                    <Grid  lg={12}>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                            Line Chart
                            <Divider sx={{ mt: 4 , width: '100%', border: '1px solid orange'}} />
                        </Typography>
                        <LineChartComponent />
                    </Grid>
                    <Divider sx={{ mt: 4 , width: '100%', border: '1px solid orange'}} />
                    <Grid  lg={12}>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                            Pie Chart
                            <Divider sx={{ mt: 4 , width: '100%', border: '1px solid orange'}} />
                        </Typography>
                        <PieChartComponent />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Dashboard
