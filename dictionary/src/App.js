import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

function App() {
  const [category, setCategory] = useState("en");
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      console.log(data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // dictionaryApi();
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

  console.log(meanings);

  return (
    <div className="App" style={{ height: '100vh', backgroundColor: "#282c34", color: 'white' }}>
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
        {meanings &&
          <Definitions word={word} meanings={meanings} category={category} />}
      </Container>
    </div>
  );
}

export default App;
