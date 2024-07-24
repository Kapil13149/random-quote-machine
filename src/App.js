import React, { useEffect, useState } from "react";
import axios from "axios";
import QuoteBox from './components/QuoteBox'
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.error('Error fetching the quote',error);
    }
  }
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
    <QuoteBox 
      quote={quote}
      author={author}
      onNewQuote={fetchQuote}
    />
    </div>
  );
}

export default App;