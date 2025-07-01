import React, { useState } from 'react';
import { Skull } from '../../Components/Skull';
import { Switch } from '@mui/material';

export const Dashboard = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    }
    return (
        <div>
            <Switch checked={checked} onChange={handleChange} />
            {checked ? (
                <Skull isSvg/>
            ) : (
                <Skull />
            )}
        </div>
    )
}