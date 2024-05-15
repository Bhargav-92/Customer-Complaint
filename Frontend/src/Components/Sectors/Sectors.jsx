import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Sectors() {
  const [area, setArea] = React.useState('');

  const handleChange = (event) => {
    setArea(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 500 }}>
      <FormControl fullWidth={true}>
        <InputLabel id="demo-simple-select-label">Sectors</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={area}
          label="Area"
          onChange={handleChange}
        >
          <MenuItem>Sector</MenuItem>
          <MenuItem value={"RMC"}>RMC</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}
