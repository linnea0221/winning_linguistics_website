var count;
var count_2;

console.log('helllllo')
 var button = document.getElementById("clickme"),
   count = 0;
 button.onclick = function() {
   console.log('clicked')
   count += 1;
   button.innerHTML = "How many people like this fact: " + count;
 };

 var button_2 = document.getElementById("clickme2"),
   count_2 = 0;
 button_2.onclick = function() {
   count_2 += 1;
   button_2.innerHTML = "How many people like this: " + count_2;
 };


 $("fun_fact_submitted").on("submit",

 function() {
   alert("You submitted a fun fact!")
 });
