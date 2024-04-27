import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useState, useEffect } from 'react';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function DropDown({ label, optionsData, isRequired, placeholder }) {
    const [options, setOptions] = useState([])

    // It Check Condition that OptionData(json) data should not be null and lenght also greater than zero
    useEffect(() => {
        if (optionsData && optionsData.length > 0) {
            setOptions(optionsData)
        }
    }, [optionsData])

    return (
        <FormControl >
            <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
                {/* Children Data */}
                {label}
                {isRequired && <span style={{ color: 'red' }}>*</span>}
            </FormLabel>
            <Select
                placeholder={placeholder}
                indicator={<KeyboardArrowDown />}
                sx={{
                    [`& .${selectClasses.indicator}`]: {
                        transition: '0.2s',
                        [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                        },
                    },
                    background: '#EAE9E9',
                    border: 'none'
                }}
                slotProps={{
                    button: {
                        id: 'select-field-demo-button',
                        // TODO: Material UI set aria-labelledby correctly & automatically
                        // but Base UI and Joy UI don't yet.
                        'aria-labelledby': 'select-field-demo-label select-field-demo-button',
                    },
                }}
            >
                {options.map(option => (
                    <Option key={option.id} value={option.id}>
                        {option.name}
                    </Option>
                ))}
            </Select>
        </FormControl>
    );
}