document.getElementById("submit").addEventListener("click",convert);
function convert(){
    var condition = document.getElementById("degree").value
    var input = document.getElementById("input").value
    var result = document.querySelector("#result")
    var change = document.getElementById("main")
    if (condition == "c"){
        result.innerHTML=(input*9/5) +32 + "&#8457"
        if (input<=10) {
            change.setAttribute("src","cold.jpeg")
        }
        else if (input>=40) {
            change.setAttribute("src","hot.jpeg")
        }
        else {
            change.setAttribute("src","sunny.jpeg")
        }
    }
    else {
        result.innerHTML=((input-32)*5)/9 + " &#x2103"
        if (input<=50) {
            change.setAttribute("src","cold.jpeg")
        }
        else if (input>=104) {
            change.setAttribute("src","hot.jpeg")
        }
        else {
            change.setAttribute("src","sunny.jpeg")
        }
    }
}