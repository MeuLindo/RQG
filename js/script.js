// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {
    quote: "We probably are, in a simulation",
    source: "Elon Musk",
    citation: "Code conference",
    year: 2016
  },
  {
    quote: "Obviously this feels real, but it seams unlikely to be real.",
    source: "Elon Musk",
    citation: "Vanity Fair",
    year: 2014
  },
  {
    quote: "Our Sun is a second- or third-generation star. All of the rocky and metallic material we stand on, the iron in our blood, the calcium in our teeth, the carbon in our genes were produced billions of years ago in the interior of a red giant star. We are made of star-stuff.",
    source: "Carl Sagan",
    citation: "The Cosmic Connection: An Extraterrestrial Perspective"
    year: 1973
  }
];

function getRandomQuote() {
  var i = Math.floor(Math.random()*quotes.length);
  return quotes[i];

}

function printQuote() {
  var quoteObj = getRandomQuote();
  var html = '';

  for(key in quoteObj){
    if(key === 'quote') html += '<p class="quote">' + quoteObj[key] + '</p>';
    if(key === 'source') html += '<p class="source">' + quoteObj[key];
    if(key === 'citation') html += '<span class="citation">' + quoteObj[key] + '</span>';
    if(key === 'year') html += '<span class="year">' + quoteObj[key] + '</span>';
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;

}
