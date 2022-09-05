let RandomNum = Math.floor(Math.random()*10);
document.querySelector("#buttonarea").addEventListener("click",clickguess);
function clickguess(){
    let userguess = Number(document.querySelector("#userguess").value);
    if(userguess < 1 || userguess >10){
        alert("enter a number between 1-10!");
    }
    let report = document.querySelector('#report');
    if(userguess == RandomNum){
        report.innerHTML = "Congradulation! You Won!";
        report.style.color="rgb(10,150,40)";
        userguess.disabled=true;
        document.querySelector("#restart").style.display="inline-block";
    }
    else{
        report.innerHTML = "Sorry! You Lost!";
        report.style.color="rgb(230,20,10)";
        document.querySelector('#userguess').disabled=true;
        document.querySelector("#restart").style.display="inline-block";
    }
}
document.querySelector("#restart").addEventListener("click",refresh);
function refresh(){
    window.location.reload();
}