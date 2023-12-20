import { useState } from 'react'
import './styles/CSS.css'

let quotes = [{author: 'Albert Einstein', content: 'The world as we have created it is a process of our     thinking. It cannot be changed without changing our thinking.'},
              {author: 'Jane Austen', content: 'The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.'},
              {author: 'André Gide', content: 'It is better to be hated for what you are than to be loved for what you are not.'},
              {author: 'Marilyn Monroe', content: '“Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.”'},
              {author: 'Eleanor Roosevelt', content: 'A woman is like a tea bag; you never know how strong it is until it\'s in hot water.'},
              {author: 'Steve Martin', content: 'A day without sunshine is like, you know, night.'},
              {author: 'Dr. Seuss', content: 'I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.'},
              {author: 'Douglas Adams', content: 'I may not have gone where I intended to go, but I think I have ended up where I needed to be.'},
              {author: 'Elie Wiesel', content: 'The opposite of love is not hate, it\'s indifference. The opposite of art is not ugliness, it\'s indifference. The opposite of faith is not heresy, it\'s indifference. And the opposite of life is not death, it\'s indifference.'},
              {author: 'Friedrich Nietzsche', content: 'It is not a lack of love, but a lack of friendship that makes unhappy marriages.'},
              {author: 'Mark Twain', content: 'Good friends, good books, and a sleepy conscience: this is the ideal life.'},
              {author: 'Allen Saunders', content: 'Life is what happens to us while we are making other plans.'},
              {author: 'Ralph Waldo Emerson', content: 'For every minute you are angry you lose sixty seconds of happiness.'},
              {author: 'Mother Teresa', content: 'If you judge people, you have no time to love them.'},
              {author: 'Garrison Keillor', content: 'Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.'},
              {author: 'Bob Marley', content: 'One good thing about music, when it hits you, you feel no pain.'}]

function App() {
  //Save the quote array index to the state with a random valid value as the start
  const [index, setIndex] = useState(Math.floor(Math.random()*quotes.length));

  //Because we are passing the index as props, we are setting a delay to make the new index so that the quote does not change before the animation finishes
  function getRandomIndex() {
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random()*quotes.length);
      setIndex(randomIndex);
    }, 2000)
    animation();
  }

  function animation() {
    //Grab necesssary elements - disable the new quote button until animation is finished
    const quoteButton = document.getElementById('new-quote');
    quoteButton.disabled = true;
    const quote = document.getElementById('text');
    const author = document.getElementById('author');

    //adding animation classes for fadeout
    quote.classList.add('animate__animated');
    quote.classList.add('animate__fadeOut');
    author.classList.add('animate__animated')
    author.classList.add('animate__fadeOut');
    quote.classList.add('animate__fadeOut');

    //after the new quote has been set, remove fadeout classes and add fadein classes, enable quote button
    setTimeout(() => {
      quote.classList.remove('animate__fadeOut');
      author.classList.remove('animate__fadeOut');
      quote.classList.add('animate__fadeIn');
      author.classList.add('animate__fadeIn');
      quoteButton.disabled = false;
    }, 2000)
  }

  return (
    <div id='app' className='container-fluid'>
      <h1 className='text-center'>Random Quote Machine</h1>
      <QuoteBox quoteIndex={index} handleClick={getRandomIndex}/>
    </div>
  );
}

function QuoteBox(props) {
  return (
    <div id='quote-box'>
      <div id='quote'>
        <h1 id='text' className='text-center'>{quotes[props.quoteIndex].content}</h1>
        <h4 id='author' className='text-center'>- {quotes[props.quoteIndex].author}</h4>
      </div>
      <div id='button-wrapper'>
        <div className='row'>
          <button id='new-quote' className='btn btn-primary' onClick={props.handleClick}>New Quote</button>
          <a id='tweet-quote' className='btn btn-info' role='button' href={"https://www.twitter.com/intent/tweet?hashtags=quotes&text="+quotes[props.quoteIndex].content+ ' -' + quotes[props.quoteIndex].author} target="_blank" rel='noreferrer'>Tweet Quote</a>
        </div>
      </div>
    </div>
  );
}

export default App;
