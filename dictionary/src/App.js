import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';
import { styled, alpha } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { grey } from '@mui/material/colors';

function App() {
  const [category, setCategory] = useState("en");
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [LightTheme, setLightTheme] = useState(false);

  const DarkMode = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: grey[600],
      '&:hover': {
        backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: grey[600],
    },
  }));

  useEffect(() => {
    const dictionaryApi = async () => {
      try {
        const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
        console.log(data);
        setMeanings(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    dictionaryApi();
  }, [category, word]);

  return (
    <div className="App" style={{ height: '100vh', backgroundColor: LightTheme ? "#282c34" : "#fff", color: LightTheme ? "white" : 'black', transition: "all 0.7s linear" }}>
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: 'space-evenly' }}>
        <div
          style={{ position: "absolute", top: 0, right: 10, paddingTop: 10 }}
        >
          <span>{LightTheme ? "Dark" : "Light"} Mode</span>
          <DarkMode checked={LightTheme} onChange={() => setLightTheme(!LightTheme)} />
        </div>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} LightTheme={LightTheme} />
        {meanings &&
          <Definitions word={word} meanings={meanings} category={category} LightTheme={LightTheme} />}
      </Container>
    </div>
  );
}

export default App;
