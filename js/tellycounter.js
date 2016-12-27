var counter = 0;
document.getElementById('counter-html').innerHTML = counter;
function sum() {
    counter++;
    document.getElementById('counter-html').innerHTML = counter;
}
function difference() {
    counter--;
    document.getElementById('counter-html').innerHTML = counter;
}
function replaceP() {
  var titleName = document.getElementById('title').value;
  var pUsed = document.createElement('p');
  var nodeforP = document.createTextNode(titleName);
  pUsed.appendChild(nodeforP);
  var parent = document.getElementsByTagName('title-div'); // testing this stuff
  var child = document.getElementById('title');
  parent.replaceChild(pUsed, child)
}
