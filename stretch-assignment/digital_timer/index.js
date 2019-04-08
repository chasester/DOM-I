
var time = 0;
var running = false;
var ids = ["","msTens","msHundreds","secondOnes","secondTens"]
function settime()
{
    time += 10;
    let strtime = time.toString().split("").reverse();
    for(let i = 1; i < ids.length; i++)
    {
        if(i >= strtime.length) document.querySelector(".digits #"+ids[i]).textContent = "0";
        else document.querySelector(".digits #"+ids[i]).textContent = strtime[i];
    }
    if(running)setTimeout(settime, 10);
}

function starttime()
{
    running = true; setTimeout(settime, 10);
    let but = document.querySelector(".buttons .stop-reset")
    but.textContent = "Stop";
    but.style.color = 'black';
    but.setAttribute("onClick","stoptime()");
}

function stoptime()
{
    running = false;
    let but = document.querySelector(".buttons .stop-reset")
    but.textContent = "Reset";
    but.setAttribute("onClick","resettime()");
    but.style.color = 'black';
}
function resettime()
{
    time = 0;
    let but = document.querySelector(".buttons .stop-reset")
    but.style.color = 'grey';
    but.textContent = "Stop";
    but.setAttribute("onClick","");
    for(let i = 1; i < ids.length; i++) document.querySelector(".digits #"+ids[i]).textContent = "-";
}