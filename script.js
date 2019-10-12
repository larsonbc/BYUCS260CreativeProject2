/*global fetch*/
document.getElementById("nameSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("nameInput").value;
    if (value === "")
        return;
    console.log(value);
    const url = "https://api.genderize.io/?name=" + value;
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);

            let results = "";
            let percent = json.probability * 100;
            results += "<h2>Name entered: " + json.name + "</h2>";
            results += "<h2>Name gender: " + json.gender + "</h2>";
            results += "<h2>Probability of " + json.name + " being " + json.gender + "*: " + percent + "%</h2>";
            results += "<h2>Count**: " + json.count + "</h2>";
            
    document.getElementById("nameResults").innerHTML = results;
    });
    
    let footnotes = "<h3>*Probability indicates the ratio of males to females</h3>" + "<h3>**Count represents the number of data rows examined in order to calculate the response</h3>";
    document.getElementById("footnotes").innerHTML = footnotes;
    
});