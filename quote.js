let pic = document.getElementById('pic');

document.addEventListener('DOMContentLoaded', function() {
getQuote();

})

function getQuote() {
    fetch("https://opentdb.com/api.php?amount=1").then(response => response.json()).then(data => {
    
   
        document.querySelector('#question').innerHTML = '"' + data.results[0].question  + '"' ;  
        document.querySelector('#category').innerHTML = "" +  data.results[0].category;  
        document.querySelector('#type').innerHTML = "Type: " +  data.results[0].type;  
        document.querySelector('#difficulty').innerHTML = "Difficulty: " +  data.results[0].difficulty;  
        document.querySelector('#correct_answer').innerHTML = "Answer: " + data.results[0].correct_answer;  
        document.querySelector('#ia1').innerHTML = "" + data.results[0].incorrect_answers[0]; 
        if (data.results[0].incorrect_answers[1] !== undefined)   
        {document.querySelector('#ia2').innerHTML = "" + data.results[0].incorrect_answers[1];} else {document.querySelector('#ia2').innerHTML = "";}
        if (data.results[0].incorrect_answers[2] !== undefined)      
        {document.querySelector('#ia3').innerHTML = "" + data.results[0].incorrect_answers[2];} else {document.querySelector('#ia3').innerHTML = "";}      
               
            
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