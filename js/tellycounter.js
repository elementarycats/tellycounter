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