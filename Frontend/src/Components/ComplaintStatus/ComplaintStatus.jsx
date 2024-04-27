import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import ComplaintRequest from './PendingRequests';
import AcceptedRequest from './AcceptedRequest';
import PendingRequests from './PendingRequests';

function CustomTabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 ,}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function ComplaintStatus() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={10} md={8}>
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ borderBottom: '1px solid black', display: 'inline-block' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Pending" />
              <Tab label="Completed" sx={{ marginLeft: { md: '20rem', xs: '6rem' } }} />
            </Tabs>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={10} md={8}>
        <CustomTabPanel value={value} index={0}>
          <PendingRequests />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AcceptedRequest/>
        </CustomTabPanel>
      </Grid>
    </Grid>
  );
}
