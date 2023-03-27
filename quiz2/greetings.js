//if the h1 header is clicked on
$("h1").click(function(){
    //open the json file
      $.getJSON('/greetings.json', function(data) {
        //make the header into a random greeting
        this = data.greetings[Math.floor(Math.random() * data.greetings.length)]});
      });