function myFunction() {

var a = document.getElementById("value").value;
var ul = document.getElementById('result');

for (var i=1; i<=a; i++) {
var y = document.createElement("li");

 if ((i  % 3 === 0) && (i % 5 !== 0)) {
   y.appendChild(document.createTextNode('ping'));
   ul.appendChild(y);
 }

 else if ((i % 5 === 0) && (i % 3 !== 0)) {
   y.appendChild(document.createTextNode('pong'));
   ul.appendChild(y);
 }

 else if (i % 15 === 0) {
   y.appendChild(document.createTextNode('PINGPONG!'));
   ul.appendChild(y);
 }

 else {
   var t = document.createTextNode(i);
   y.appendChild(document.createTextNode(i));
   ul.appendChild(y);
   }
 }
};
