
  $(function(){

  var getQuote = $("#getquote");
  quotesCheck();

  getQuote.on("click", function(e){
    
        quotesCheck();
        e.preventDefault();
    
  })
  
  function quotesCheck(){
  
       apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
    
    $.getJSON(apiUrl, function (quote){

        var quotes='</p>'+quote.quoteText+'</p>'
        if (quote.quoteAuthor){
          var author ='</p> - '+quote.quoteAuthor+'</p>';
        }
        else var author ='</p> - Unknown </p>';
        
        $("#text").html(quotes);
        $("#author").html(author);

      });

  }
  

  })
  
  
  
