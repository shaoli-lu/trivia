let pic = document.getElementById('pic');

document.addEventListener('DOMContentLoaded', function() {
getQuote();

})

function getQuote() {
    fetch("https://opentdb.com/api.php?amount=1").then(response => response.json()).then(data => {
    
   
        document.querySelector('#question').innerHTML = '"' + data.results[0].question  + '"' ;  
        document.querySelector('#category').innerHTML = "Category: " +  data.results[0].category;  
        document.querySelector('#type').innerHTML = "Type: " +  data.results[0].type;  
        document.querySelector('#difficulty').innerHTML = "Difficulty: " +  data.results[0].difficulty;  
        document.querySelector('#correct_answer').innerHTML = "Answer: " + data.results[0].correct_answer;    
       
        
            
    })  
}

pic.addEventListener('click', getQuote)

$(document).ready(function () {

    $('xdiv').hover(
    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('src');
            $(this).attr('src', $(this).attr('data-alt-src'));
            $(this).attr('data-alt-src', $temp);
        });

        $(this).fadeIn();
    },

    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('data-alt-src');
            $(this).attr('data-alt-src', $(this).attr('src'));
            $(this).attr('src', $temp);
        });

        $(this).fadeIn();

    });
});