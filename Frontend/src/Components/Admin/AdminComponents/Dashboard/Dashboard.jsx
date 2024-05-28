import React from 'react'
import PendingRequest from '../Cards/PendingRequest'
import CompletedRequest from '../Cards/ComplatedRequest'
import TotalComplaints from '../Cards/TotalComplaints'
import User from '../Cards/User'
import { Box, Divider, Grid, Typography } from '@mui/material'
import LineChartComponent from '../Charts/LineChart'
import PieChartComponent from '../Charts/PieChart'
import RecentComplaints from '../RecentComplaints/RecentComplaints'

const Dashboard = () => {
    return (
        <>
            <Box p={3}>
                <Grid container md={12} p={3}>
                    <Grid md={3} p={2}>
                        <PendingRequest />
                    </Grid>
                    <Grid md={3} p={2}>
                        <CompletedRequest />
                    </Grid>
                    <Grid md={3} p={2}>
                        <TotalComplaints />
                    </Grid>
                    <Grid md={3} p={2}>
                        <User />
                    </Grid>
                    <Grid lg={12}>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                            Line Chart
                            <Divider sx={{ mt: 4, width: '100%', border: '1px solid orange' }} />
                        </Typography>
                        {/* <LineChartComponent /> */}
                    </Grid>
                    <Divider sx={{ mt: 4, width: '100%', border: '1px solid orange' }} />
                    <Grid lg={12}>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                            Pie Chart
                            <Divider sx={{ mt: 4, width: '100%', border: '1px solid orange' }} />
                        </Typography>
                        <PieChartComponent />
                    </Grid>
                    <Grid lg={12}>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                            Recent Complaints
                            <Divider sx={{ mt: 4, width: '100%', border: '1px solid orange' }} />
                        </Typography>
                        <RecentComplaints />
                    </Grid>

                    <Grid lg={12}>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                            Recent Users
                            <Divider sx={{ mt: 4, width: '100%', border: '1px solid orange' }} />
                        </Typography>
                        <RecentComplaints />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Dashboard
