import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [area, setArea] = React.useState('');

  const handleChange = (event) => {
    setArea(event.target.value);
  };

  return (
    <Box sx={{ m:1, minWidth: 100 }}>
      <FormControl fullWidth={true}>
        <InputLabel id="demo-customized-select-label">Area</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select-native"
          value={area}
          label="Area"
          onChange={handleChange}
        >
          <MenuItem value={"Raiya Road"}>Raiya Road</MenuItem>
          <MenuItem value={"Kalawad Road"}>Kalawad Road</MenuItem>
          <MenuItem value={"SadhuVaswani Road"}>SadhuVaswani Road</MenuItem>
          <MenuItem value={"Kotecha Chowk"}>Kotecha Chowk</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
