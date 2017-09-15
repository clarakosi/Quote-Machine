$(document).ready(function() {
  
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en", function(json){
      $("#quote").text(json.quoteText);
      $("#quoteauthor").text(json.quoteAuthor)
    }); 
    
  
  $("#tweetquote").on("click", function(){ window.open("https://twitter.com/intent/tweet?text=" + '"' + $("#quote").text() + '" – ' + $("#quoteauthor").text()) });
  
  $("#newquote").on("click", function(){

  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en"
  
  $.getJSON(url, function(json){
      $("#quote").text(json.quoteText);
    $("#quoteauthor").text(json.quoteAuthor)
    });     

});

  });