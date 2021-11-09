function displayInfo() {
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;

    var radioChecked;
    if(document.getElementById('Warm').checked) {
        radioChecked = document.getElementById('Warm').value;
    } else if(document.getElementById('Cold').checked) {
        radioChecked = document.getElementById('Cold').value;
    }

    var checkbox = document.getElementsByName("vacationType");
    var checkedbox;
    for(i = 0; i < checkbox.length; i++) {
        if(checkbox[i].checked) {
            checkedbox = checkbox[i].value;
        }
    }

    var visit = document.getElementById("visit").value;

    

    document.getElementById("info").innerHTML = ("Name: " + name + "<br>" + "Email: " + email + "<br>" + "You want to travel somewhere: "  + radioChecked
    + "<br>" + "You want to go on a: " + checkedbox + "<br>" + "You want to visit: " + visit);
}