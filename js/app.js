// from data.js
var tableData = data;
var submit = d3.select("#filter-btn");
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
// console.log(tableData);
function updateTable(tableData) {
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      // console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}
// YOUR CODE HERE! Maybe switch #SUBMIT TO FLT_BUTTON(ID CLASS)

function datefilter(tableData){
  var filteredData = tableData.filter(function (data){
    return data.datetime === ('#datetime').value();
  });
  return filteredData;
}

updateTable(tableData)


submit.on("click", function() {

    d3.event.preventDefault();
    var result = datefilter(tableData);
    updateTable(result);
});

//     var inputElement = d3.select("#datetime").value;

//     var inputValue = inputElement.property("value");

//     console.log(inputValue);
//     console.log(tableData);

//     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

//     console.log(filteredData);



// });

// d3.select("#filter-btn").on("click", submit);