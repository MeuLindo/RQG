// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Array of all the quotes
var quotes = [
  {
    quote: "We probably are, in a simulation",
    source: "Elon Musk",
    citation: "Code conference",
    year: 2016,
    tags: ['Universe', ' Matrix', ' Mindblowing']
  },
  {
    quote: "Obviously this feels real, but it seams unlikely to be real.",
    source: "Elon Musk",
    citation: "Vanity Fair",
    year: 2014,
    tags: ['Universe ', ' Matrix ', ' Mindblowing']
  },
  {
    quote: "Our Sun is a second- or third-generation star. All of the rocky and metallic material we stand on, the iron in our blood, the calcium in our teeth, the carbon in our genes were produced billions of years ago in the interior of a red giant star. <strong><em>We are made of star-stuff.</em></strong>",
    source: "Carl Sagan",
    citation: "The Cosmic Connection: An Extraterrestrial Perspective",
    year: 1973,
    tags: ['Cosmos', ' Mindblowing ', ' Aliens ', ' Universe']
  },
  {
    quote: "There is no greater education than one that is self-driven. You go to the library, visit museums because you want to learn, and your quest for knowledge outside of school magnifies what happens when you are in school.",
    source: "Neil deGrasse Tyson",
    citatio: "University of Washington",
    year: 2011,
    tags: ['Education',' Self-driven']
  },
  {
    quote: "Do not take life too seriously - you will never get out of it alive.",
    source: "Elbert Hubbard",
    citatio: "A Thousand & One Epigrams: Selected from the Writings of Elbert Hubbard",
    year: 1911,
    tags: ['Writer',' Philosophy ',' Life']
  }
];

//Works just like Math.random in the way that can generate the lower value but it is asymptotic to max
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomQuote() {
  //As Math.Random excludes 1 we generate all the possible numbers from 0 to quotes.length-1.
  //Just perfect because of the 0 index array we never generate every value.
  var i = getRandomArbitrary(0,quotes.length);
  return quotes[i];

}

function printQuote() {
  var quoteObj = getRandomQuote();
  var html = '';

  for(key in quoteObj){ //this loop guarantees that all the properties in the quoteObj are printed
    if(key === 'quote') html += '<p class="quote">' + quoteObj[key] + '</p>';
    if(key === 'source') html += '<p class="source">' + quoteObj[key];
    if(key === 'citation') html += '<span class="citation">' + quoteObj[key] + '</span>';
    if(key === 'year') html += '<span class="year">' + quoteObj[key] + '</span>';
    if(key === 'tags') html += '<span class="tags">' + '<br />' + quoteObj[key] + '</span>';
    // if(key === 'tags'){
    //   html += '<span class="tags">';
    //   for(var i = 0 ; i < key.tags.length ; i++){
    //      var tag = key.tags[i];
    //      html += tag + ' ,';
    //
    //     }
    //   html += '</span>';
    //   }
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
   changeBackground();
}


 // Grabs the container div and changes it to a randomized RGB color.
function changeBackground(){
  var hex = [ ];
  for (var i = 0; i < 6; i++){
    if(i%2==0) hex.push(String.fromCharCode(getRandomArbitrary(97,102)));
    else hex.push(String.fromCharCode(getRandomArbitrary(48,57)));
  }
  let body = document.querySelector('body');

  body.style.backgroundColor = '#' + hex.join('');

}
