// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {
    quote: "We probably are, in a simulation",
    source: "Elon Musk",
    citation: "Code conference",
    year: 2016,
    tags: ['Universe', 'Matrix', 'Mindblowing']
  },
  {
    quote: "Obviously this feels real, but it seams unlikely to be real.",
    source: "Elon Musk",
    citation: "Vanity Fair",
    year: 2014,
    tags: ['Universe', 'Matrix', 'Mindblowing']
  },
  {
    quote: "Our Sun is a second- or third-generation star. All of the rocky and metallic material we stand on, the iron in our blood, the calcium in our teeth, the carbon in our genes were produced billions of years ago in the interior of a red giant star. <strong><em>We are made of star-stuff.</em></strong>",
    source: "Carl Sagan",
    citation: "The Cosmic Connection: An Extraterrestrial Perspective",
    year: 1973,
    tags: ['Cosmos', 'Mindblowing', 'Aliens', 'Universe']
  }
];

function getRandomNumber(upper) {
  return Math.floor(Math.random()*upper);
}
function getRandomQuote() {
  var i = getRandomNumber(quotes.length);
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
    if(key === 'tags'){
      html += '<span class="tags">';
      for(var i = 0 ; i < key.length ; i++){
         var tag = key[i].tags;
         html += tag + ' ,';

        }
      html += '</span>';
      }
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
  changeBackground();
}


 // Grabs the container div and changes it to a randomized RGB color.
function changeBackground(){
  var r = getRandomNumber(255);
  var g = getRandomNumber(255);
  var b = getRandomNumber(255);
  var color = '(' + r + ',' + g + ',' +  b + ')';
  document.getElementsByClassName('container').style.color = 'black';

}
