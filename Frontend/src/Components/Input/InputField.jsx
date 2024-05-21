import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ label, placeholder, isRequired, name, value, onChange, readOnly, sx }) => {
    return (
        <TextField
            label={label}
            placeholder={placeholder}
            required={isRequired}
            name={name}
            value={value}
            onChange={onChange}
            InputProps={{
                readOnly: readOnly,
            }}
            sx={sx}
            fullWidth
        />
    );
};

export default InputField;
