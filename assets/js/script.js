function moveContent()
{
    // FOR INDEX
    if(document.querySelector(".hero")) document.getElementsByClassName("hero")[0].style.marginTop = document.getElementsByTagName("nav")[0].offsetHeight + "px";
    if(document.querySelector(".hero")) document.getElementsByClassName("line")[0].style.height = document.getElementsByClassName("contact-form")[0].offsetHeight + "px";
    
    // FOR MENU
    if(document.querySelector(".our-menu")) document.getElementsByClassName("our-menu")[0].style.marginTop = document.getElementsByTagName("nav")[0].offsetHeight + "px";

    document.querySelector(".open-menu ul").style.marginTop = document.getElementsByTagName("nav")[0].offsetHeight + 24 + "px";
}

function ToggleMenu()
{
    if(document.getElementsByClassName("open-menu")[0].style.display == "block" || document.getElementsByClassName("open-menu")[0].style.display == "block!important") {
        document.getElementsByClassName("open-menu")[0].style.display = "none";
        document.getElementById("icon").innerHTML = '<i class="fa fa-bars"></i>';
    }
    else if(document.getElementsByClassName("open-menu")[0].style.display == "none" || document.getElementsByClassName("open-menu")[0].style.display == "none!important") {
        document.getElementsByClassName("open-menu")[0].style.display = "block";
        document.getElementById("icon").innerHTML = '<i class="fa fa-x"></i>';
    }
}

function showPopUp() 
{
    var name = prompt("Please enter your name", "Your name");
    if (name != null) {
      
        var question = prompt("What would you like to eat?");
        if (question != null) {
            alert("Okay " + name + "! Your order will be ready soon!");
        }
    }
}