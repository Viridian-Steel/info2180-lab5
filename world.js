
window.onload = () => {
    let button = document.getElementById("lookup")
    let resultsDiv = document.getElementById("result")

    button.onclick = () => {
        let x = new XMLHttpRequest;
        x.onload = () => resultsDiv.innerHTML = x.responseText;
        x.open("GET", "world.php?country=" + document.getElementById("country").value)
        x.send()
    }

    


}