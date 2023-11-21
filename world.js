
window.onload = () => {
    let countrybutton = document.getElementById("lookup")
    let citiesbutton = document.getElementById("cities")
    let resultsDiv = document.getElementById("result")

    countrybutton.onclick = () => {
        let x = new XMLHttpRequest;
        x.onload = () => resultsDiv.innerHTML = x.responseText;
        x.open("GET", "world.php?country=" + document.getElementById("country").value + "&lookup=nothing")
        x.send()
    }
    citiesbutton.onclick = () => {
        let x = new XMLHttpRequest;
        x.onload = () => resultsDiv.innerHTML = x.responseText;
        x.open("GET", "world.php?country=" + document.getElementById("country").value + "&lookup=cities")
        x.send() 
    }
    


}