
//detecting button press

var numberofDrumbuttons=document.querySelectorAll(".drum").length;

for (var i=0;i<numberofDrumbuttons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", 
    function()
    {
        var buttonInnerHTML= this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}


//detecting keyboard press


addEventListener("keypress", function(event)
{
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key)
{
    switch (key) 
    {
        case "w":
            var tom1= new Audio('sounds/tom-1.mp3');
            tom1.play();
            document.querySelector("h2").textContent="You Choose The Key W";
            break;
        case "a":
            var tom2= new Audio('sounds/tom-2.mp3');
            tom2.play();
            document.querySelector("h2").textContent="You Choose The Key A";
            break;
        case "s":
            var tom3= new Audio('sounds/tom-3.mp3');
            tom3.play();
            document.querySelector("h2").textContent="You Choose The Key S";
            break;
        case "d":
            var tom4= new Audio('sounds/tom-4.mp3');
            tom4.play();
            document.querySelector("h2").textContent="You Choose The Key D";
            break;
        case "j":
            var snare= new Audio('sounds/snare.mp3');
            snare.play();
            document.querySelector("h2").textContent="You Choose The Key J";
            break;
        case "k":
            var crash= new Audio('sounds/crash.mp3');
            crash.play();
            document.querySelector("h2").textContent="You Choose The Key K";
            break;
        case "l":
            var kick= new Audio('sounds/kick-bass.mp3');
            kick.play();
            document.querySelector("h2").textContent="You Choose The Key L";
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currrentKey)
{
    var activeButton=document.querySelector("."+currrentKey);
    activeButton.classList.add("pressed");
    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    },100)
}


