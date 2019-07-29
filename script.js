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
    quote: `When you are content to be simply yourself and don't compare or compete, everyone will respect you`,
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy', //Extra credit

  },
  //* 4th quote

  {
    quote: `The truth is not always beautiful, nor beautiful words the truth. `,
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy', //Extra credit
  },
  {
    quote: `A man with outward courage dares to die; a man with inner courage dares to live.`,
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy',
  },
  {
    quote: `Do you have the patience to wait until your mud settles and the water is clear?`,
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy',
  },
  {
    quote: `If you understand others you are smart.
If you understand yourself you are illuminated.
If you overcome others you are powerful.
If you overcome yourself you have strength.
If you know how to be satisfied you are rich.
If you can act with vigor, you have a will.
If you don't lose your objectives you can be long-lasting.
If you die without loss, you are eternal.`,
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy',
  },
  {
    quote: `The flame that burns Twice as bright burns half as long.`,
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy'
  },
  {
    quote: `If you try to change it, you will ruin it. Try to hold it, and you will lose it.`,
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy'
  },
  {
    quote: `A leader is best
When people barely know he exists
Of a good leader, who talks little,
When his work is done, his aim fulfilled,
They will say, “We did this ourselves.`,
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy'
  },
  {
    quote: `The wise man is one who, knows, what he does not know.`,
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy'
  },
  {
    quote: `Give evil nothing to oppose
and it will disappear by itself.`,
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: 'Published August 28, 1989,',
    tag: 'Philosophy'
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
  getImage();
  //randomPageColor();
}

printQuote();

//image will change everytime screen refresh
function getImage() {
  let randomInt = Math.floor(Math.random() * 100);
  //document.body.style.background = ["url('pics\1 - BG.jpg" + randomInt + "')", "url('pics\2 - BG.jpg" + randomInt + "')", "url('pics\3 - BG.jpg" + randomInt + "')", "url('pics\4 - BG.jpg" + randomInt + "')", "url('pics\5 - BG.jpg" + randomInt + "')" ]

 document.body.style.background = "url('https://source.unsplash.com/random?sig=" + randomInt + "')";
  document.body.style.backsize = "cover"
  // document.body.style.backgroundRepeat = "no-repeat"
};
//
// document.body.style.backgroundImage = "url(pics/1-BG.jpg) repeat-y center"
// $('body').css({"background-image": "url(pics/2-BG.jpg)"})
// let images = []
//this will change the color everytime screen refresh needs to happen when button clicked
// function randomPageColor() {
//   var x = Math.floor(Math.random() * 250);
//   var y = Math.floor(Math.random() * 250);
//   var z = Math.floor(Math.random() * 250);
//   var bgColor = "rgb(" + x + "," + y + "," + z + ")";


//   document.body.style.background = bgColor;
// }


//function to set the interval for my page color change. Extra Credit!!
setInterval('printQuote()', 20000);

//This button will change the quote everytime it is "clicked"

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
