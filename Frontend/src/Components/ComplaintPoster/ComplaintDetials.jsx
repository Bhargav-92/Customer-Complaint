import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import './detailsStyle.css';

const ComplaintDetails = () => {
  return (
    <Box>
      <Stack direction="column" width="100%">
        <Box className="BackgroundImage">
          <Typography
            variant="h3"
            fontWeight={600}
            letterSpacing={1}
            color="#fff"
            margin={4}
          >
            One Website, One Platform,
            <Typography variant="h3" sx={{ marginTop: '10px' }}>
              Many Government Services
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ComplaintDetails;
