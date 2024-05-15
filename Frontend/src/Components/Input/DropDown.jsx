import * as React from 'react';
import { useState, useEffect } from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function DropDown({ label, optionsData, value, onChange, isRequired, placeholder }) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (optionsData && optionsData.length > 0) {
            setOptions(optionsData);
        }
    }, [optionsData]);

    return (
        <FormControl>
            <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
                {label}
                {isRequired && <span style={{ color: 'red' }}>*</span>}
            </FormLabel>
            <Select
                id="select-field-demo-button"
                value={value}
                onChange={onChange}
                placeholder={options.length > 0 ? placeholder : "No options available"}
                disabled={options.length === 0}
                indicator={<KeyboardArrowDown />}
                sx={{
                    [`& .${selectClasses.indicator}`]: {
                        transition: '0.2s',
                        [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                        },
                    },
                    background: '#EAE9E9',
                    border: 'none',
                }}
                slotProps={{
                    button: {
                        'aria-labelledby': 'select-field-demo-label select-field-demo-button',
                    },
                }}
            >
                {options.map((option) => (
                    <Option key={option.id} value={option.id}>
                        {option.name}
                    </Option>
                ))}
            </Select>

        </FormControl>
    );
}
