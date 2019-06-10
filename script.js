/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//variables for my quotes
let quotes = [
  {
    quote: ' Knowing others is intelligence\; knowing yourself is true wisdom.\
              Mastering others is strength\, mastering yourself is true power.',
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy', //Extra credit
  },



  //*1st quote

  {
    quote: 'Those who know do not speak. Those who speak do not know.',
    source: 'Lao Tsu',
    citation: 'Tao Teh Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy', //Extra credit

  },
  //*2nd quote

  {
    quote: 'Simplicity, patience, compassion.\These three are your greatest treasures.\
            Simple in actions and thoughts, you return to the source of being.\
            Patient with both friends and enemies,\you accord with the way things are.\
            Compassionate toward yourself,\you reconcile all beings in the world.',
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy', //Extra credit

  },
  //* 3rd quote

  {
    quote: 'When you are content to be simply yourself and don\'t compare or compete, everyone will respect you.',
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy', //Extra credit

  },
  //* 4th quote

  {
    quote: 'A man with outward courage dares to die\; a man with inner courage dares to live.',
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy', //Extra credit
  }
];
//*5th quote


//Generating a random item number from a list to return a random quote

function getRandomList() {

  let randNum = Math.floor(Math.random() * quotes.length);
  let randObject = quotes[randNum];
  return randObject;

}


//This function prints the objects from the above referenced array in random order, an extra credit tag and conditional statement is created 
function printQuote() {
  let quoteHtml = getRandomList(quotes);
  let stringBlack = ' ';
  stringBlack = '<p class="quote">' + quoteHtml.quote + "</p>";
  stringBlack += '<p class="source">' + quoteHtml.source + "";

  if (typeof quoteHtml.citation != 'undefined') {

    stringBlack += '<span class="citation">' + quoteHtml.citation + " </span> ";
  }

  if (typeof quoteHtml.year !== 'undefined') {

    stringBlack += '<span class="year">' + quoteHtml.year + " </span> ";
  }

  if (typeof quoteHtml.tag != 'undefined') {
    stringBlack += '<span class = "tag" >' + quoteHtml.tag + "</span>";
  }
  stringBlack += "</p>";


  document.getElementById("quote-box").innerHTML = stringBlack;

}
printQuote();
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


