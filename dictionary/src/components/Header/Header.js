import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import categories from '../../data/category';
import './Header.css';

const Header = ({ setCategory, category, word, setWord }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            mode: 'dark',
        },
    });

    const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("");
    }


    return (
        <div>
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" label="Search a Word" className="search" variant="standard" value={word} onChange={(e) => setWord(e.target.value)}>
                    </TextField>
                    <FormControl variant="standard" className="select">
                        <InputLabel id="demo-simple-select-standard-label">Language</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            onChange={(e) => handleChange(e)}
                            value={category}
                        >
                            {categories.map((option) => (<MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>))}
                        </Select>
                    </FormControl>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header