import React from 'react'
import ComplaintStatus from '../Components/ComplaintStatus/ComplaintStatus'
import { Box } from '@mui/material'
import Footer from '../Components/Footer/Footer'

const MyComplaint = () => {
  return (
    <>
      <Box p={12}>
        <ComplaintStatus/>
      </Box>
      <Box >
        <Footer/>
      </Box>
    </>
  )
}

export default MyComplaint
