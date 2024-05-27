import React from 'react'
import PendingRequest from '../Cards/PendingRequest'
import CompletedRequest from '../Cards/ComplatedRequest'
import TotalComplaints from '../Cards/TotalComplaints'
import User from '../Cards/User'
import { Grid } from '@mui/material'

const Dashboard = () => {
    return (
        <>
            <div>
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
                    <Grid>
                        
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Dashboard
