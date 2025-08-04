const authorElem = document.querySelector('.author')
const quoteElem = document.querySelector('.quote')


const quotes = [
  {
    content: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    content: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    content: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    content: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    content: "If you look at what you have in life, you'll always have more. If you look at what you don't have, you'll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    content: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
  },
  {
    content: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    content: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    content: "Don’t judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  {
    content: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
];


function showQuotes() {
  
  let maxLength = quotes.length;
  
  let randomNum = Math.floor(Math.random() * maxLength);
  
  quoteElem.textContent = quotes[randomNum].content;
  authorElem.textContent = quotes[randomNum].author;
  
}

window.addEventListener('load', showQuotes)