import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import categories from '../../data/category';
import './Header.css';

const Header = ({ setCategory, setMeanings, category, word, setWord, LightTheme }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightTheme ? "#000" : "#fff",
            },
            type: LightTheme ? "light" : "dark",
        },
    });

    const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("");
        setMeanings([]);
    }

    return (
        <div>
            <span className="title">{word ? word : "Lingual Look"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" style={{
                        textColor: darkTheme ? 'black' : 'white',
                    }} label="Search a Word" className="search" variant="standard" value={word} onChange={(e) => setWord(e.target.value)}>
                    </TextField>
                    <FormControl variant="standard" className="select" style={{
                        color: darkTheme ? 'black' : 'white',
                    }}>
                        <InputLabel >Language</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={category}
                            label="Language"
                            onChange={handleChange}
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