import React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

function InputField({ label, placeholder, value, onChange, isRequired }) {
  return (
    <FormControl>
      <FormLabel>
        {label}
        {isRequired && <span style={{ color: 'red' }}>*</span>}
      </FormLabel>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        sx={{
          background: '#EAE9E9',
          color: '#000',
          border: 'none'
        }}
      />
    </FormControl>
  );
}

export default InputField;
