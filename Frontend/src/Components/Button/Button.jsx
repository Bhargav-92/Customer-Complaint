import React from 'react';
import Button from '@mui/joy/Button';

const CustomButton = ({ sx, title }) => {
  return (
    <>
      <Button sx={sx}>{title}</Button>
    </>
  );
};

export default CustomButton;
