/*
tellycounter.js
The script is so big that it deserved this introduction.
elementarycats.github.org/tellycounter
sebastiansaez.com
*/
console.log(document.cookie);
if (document.cookie == "") {
    var counter = 0;
}
else {
    var titleName = getCookie(title);
    var counter = getCookie(counter);
    var pUsed = document.createElement('p');
    var nodeforP = document.createTextNode(titleName);
    pUsed.appendChild(nodeforP);
    var child = document.getElementById('title');
    child.replaceWith(pUsed);
}
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
    var child = document.getElementById('title');
    child.replaceWith(pUsed);
    createCookieLOL(titleName, counter);
}

function createCookieLOL(titleName, counter) {
  document.cookie = "title=" + titleName + "; counter=" + counter + "; expires=Thu 16 Feb 2017 12:00:00 UTC; path=/";
}

// got this from w3schools. This is a quality and nasty bootleg.
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}