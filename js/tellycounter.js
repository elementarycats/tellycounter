var counter = 000;
document.getElementById('button-sum').onclick = function() {
   counter++;
};
document.getElementById('button-difference').onclick = function() {
   counter--;
};
document.getElementById('counter-html').innerHTML = counter;