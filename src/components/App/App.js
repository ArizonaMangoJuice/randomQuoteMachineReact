import React, { useState, useEffect } from 'react';
import './App.css';
import {quotes} from '../../quotes'

let intentTweet = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='

const randomQuote = () => {
  let randomNumber = Math.floor(Math.random() * (quotes.length-1 - 0 + 1) + 0)
  let randomQuote = quotes[randomNumber]
  return randomQuote
}

let newRandomColor = () => {
  let colors = ['#091540', '#7692FF', '#4C212A', '#00635D', '#5A5766']
  let randomNumber = Math.floor(Math.random() * (colors.length-1-0+1) + 0)
  return colors[randomNumber]
}

function App() {
  const [quote, setQuote] = useState(null)
  const [clicked, setClicked] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [randomColor, setRandomColor] = useState('')

  useEffect(() => {
    if(!quote) newQuote()
  })

  const newQuote = () => {
    setQuote(randomQuote())
    setClicked(true)
    setHidden(true)
    setRandomColor(newRandomColor())
    setTimeout(() => {
      setClicked(false)
      setHidden(false)
    }, 520)
  }

  return (
    <div className={`quote-container ${clicked ? 'fade-in' : ''}`} style={{backgroundColor: randomColor}}>
      <div className='quote-box' id='quote-box'>
        <p className={`quote ${clicked ? 'fade-in' : ''}`} id="text" style={{color: randomColor}}>{quote ? quote.text : quotes[0].text}</p>
        <p className={`author ${ clicked ? 'fade-in' : ''}`} id="author" style={{color: randomColor}}>{quote ? quote.author : quotes[0].author}</p>
        <div className='bottom-bar'>
          <div className='social'>
            <a id="tweet-quote" href={`${intentTweet}${quote ? encodeURI(quote.text) : encodeURI(quotes[0].text)}`} className='social-button' style={{backgroundColor: randomColor}}><i className="fab fa-twitter"></i></a>
            <a href='https://www.tumblr.com/' className='social-button' style={{backgroundColor: randomColor}}><i className="fab fa-tumblr"></i></a>
          </div>
          <button id="new-quote" onClick={() => newQuote()} className={hidden ? 'hidden' : `new-quote fade-in`} style={{backgroundColor: randomColor}}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;

