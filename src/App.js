import { useEffect, useState } from 'react';
import './App.css';
import QuoteTemplate from './components/QuoteTemplate';




function App() {

  const [quote, setQuote] = useState({
    content: 'Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.',
    author: 'Mother Teresa'
  });
  const [allQuotes, setAlllQuotes] = useState([]);

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(res => res.json())
      .then(data => setAlllQuotes(data))
  }, [])


  function handleOnCLick() {
    const random = Math.floor(Math.random() * allQuotes.length);
    const quote_value = allQuotes[random];

    setQuote({
      content: quote_value.text,
      author: quote_value.author
    })

    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30) + 70;
    const lightness = Math.floor(Math.random() * 20) + 70;

    const randomColor = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
    document.documentElement.style.setProperty('--main-bg-color', randomColor);
  }

  return (
    <div className="App">
      <QuoteTemplate
        newQuote={handleOnCLick}
        content={quote.content}
        author={quote.author}
      />
    </div>
  );
}

export default App;
