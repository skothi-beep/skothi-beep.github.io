// Declaring two empty arrays
var people = []
var salaries = []

window.onload = function () {
    document.getElementById("employeeNames").focus();
}

function addSalary() {
    var person = document.getElementById("employeeNames").value;
    var salary = document.getElementById("salary").value;

    if(salary == "" || salary < 0) {
        alert("You must enter a salary value greater than 0");

    } else {
        people.push(person);
        salaries.push(salary);
    }
}

// https://stackoverflow.com/questions/29544371/finding-the-average-of-an-array-using-js
function displayResults() {
    var total = 0;
    var highest = 0;
    for(var i = 0; i < salaries.length; i++) {
        total += parseInt(salaries[i]);
    }
    var average = total / salaries.length ;

    for(j = 0; j < salaries.length; j++) {
        if(salaries[j] > highest) {
            highest = salaries[j];
        }
    } 

    document.getElementById("results").innerHTML = ("<h2>Results:</h2>" + "<p>Average: " + average + "</p>" +  "<p>Highest Salary: " + highest + "</p>");
}

// https://stackoverflow.com/questions/29335369/display-array-of-objects-in-a-dynamic-table-javascript
function displaySalary() {
    var table = "<tr> <th>Employee Name</th> <th>Salary</th> </tr>"
    for(i = 0; i < people.length; i++) {
        table += "<tr>";

        table += "<td>" + people[i] + "</td>";
        table += "<td>" + salaries[i] + "</td>";

        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("results_table").innerHTML = ("<h2>Employee Salaries</h2>" + table);
}