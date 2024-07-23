function home(){
    document.getElementById("homes").style.color="green";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("programs").style.color="white";
}

function program(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("programs").style.color="green";
}

function plan(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="green";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("programs").style.color="white";
}

function blog(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="green";
    document.getElementById("contacts").style.color="white";
    document.getElementById("programs").style.color="white";
}
function contact(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="green";
    document.getElementById("programs").style.color="white";
}

function Submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    if(name.value == ""){
    alert("please enter name")
}
    else if(number.value == "" && number.value == 10)
    {
        alert("please enter number")
    }
    else{
        alert("thanks to join : " + name.value + " we will contact on 24 hrs")
    }
}

