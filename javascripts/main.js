// might potentially need to switch to jquery
// later if this needs other library methods
// for now, my ajax functions are enough :P
var graph1 = {
  name: ".projects-bar-chart-svg",
  height: 400,
  width: 800
};

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    drawBarGraph(JSON.parse(xhr.responseText), graph1);
  }
};

xhr.open("GET", "./src/data/language_frequency_data.json", true);
xhr.send(null);


var graph2 = {
  name: ".loc-bar-chart-svg",
  height: 400,
  width: 800
};

var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function() {
  if (xhr2.readyState == 4 && xhr2.status == 200) {
    drawBarGraph(JSON.parse(xhr2.responseText), graph2);
  }
};
xhr2.open("GET", "./src/data/language_usage_data.json", true);
xhr2.send(null);
