/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

//variables for my quotes
let quotes = [
  {
    quote: ` Knowing others is intelligence; knowing yourself is true wisdom.
              Mastering others is strength, mastering yourself is true power.`,

    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy', //Extra credit
  },



  //*1st quote

  {
    quote: 'Those who know do not speak. Those who speak do not know.',
    source: 'Lao Tsu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy', //Extra credit

  },
  //*2nd quote

  {

    quote: 'Simplicity, patience, compassion. These three are your greatest treasures. ',
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy', //Extra credit

  },
  //* 3rd quote

  {
    quote: ` Some days are just bad days, that's all.
            You have to experience sadness to know happiness, and I remind myself that not 
            every day is going to be a good day, that's just the way it is! `,
    source: 'Dita Von Teese',
    tag: ' Inspiration', //Extra credit

  },
  //* 4th quote

  {
    quote: `Success isn't always about 'Greatness', it's about consistency. Consistent, 
            hard work gains success. Greatness will come.`,
    source: 'Dwayne Johnson',
    tag: ' Inspiration', //Extra credit
  }
];
//*5th quote


//Generating a random item number from a list to return a random quote

function getRandomQuote(quotes) {


  let randNum = Math.floor(Math.random() * quotes.length);
  let randObject = quotes[randNum];
  return randObject;

}


//This function prints the objects from the above referenced array in random order, an extra credit tag and conditional statement is created 
function printQuote() {
  let quoteHtml = getRandomQuote(quotes);

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

  randomPageColor();
}

printQuote();

//this will change the color everytime screen refresh needs to happen when button clicked
function randomPageColor() {
  var x = Math.floor(Math.random() * 250);
  var y = Math.floor(Math.random() * 250);
  var z = Math.floor(Math.random() * 250);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";


  document.body.style.background = bgColor;
}


//function to set the interval for my page color change. Extra Credit!!
setInterval('printQuote()', 20000);

//This button will change the quote everytime it is "clicked"

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
