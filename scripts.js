var count;
var count_2;

console.log('helllllo')
 var button = document.getElementById("clickme"),
   count = 0;
 button.onclick = function() {
   console.log('clicked')
   count += 1;
   button.innerHTML = "Number of times you've liked this fact: " + count;
 };

 var button_2 = document.getElementById("clickme2"),
   count_2 = 0;
 button_2.onclick = function() {
   count_2 += 1;
   button_2.innerHTML = "Number of times you've liked this fact: " + count_2;
 };

 var button_3 = document.getElementById("clickme3"),
   count_3 = 0;
 button_3.onclick = function() {
   count_3 += 1;
   button_3.innerHTML = "Number of times you've liked this fact: " + count_3;
 };


 $("fun_fact").on("click", function() {
  alert("You submitted a fun fact!")
});

 function() {
   alert("You submitted a fun fact!")
 });
