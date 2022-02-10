'use strict';

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() { document.body.classList.toggle('dark-theme')

var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Switch to Night";
        document.getElementById("heading").innerHTML = "Good Morning Day time!";
        document.getElementById("msg").innerHTML = "Wake up!" + "<br>" + "Get Dressed!";

    }
    else {
        this.textContent = "Switch to Day";
        document.getElementById("heading").innerHTML = "Good Night Night time!";
        document.getElementById("msg").innerHTML = "Bed Time!" + "<br>" + "Go to Sleep!";
    }

    console.log('current class name: ' + className);

});


function count() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.current) {
            localStorage.current = Number(localStorage.current) + 1;
        } else {
            localStorage.current = 1;
        }
        document.getElementById("result").innerHTML = "You have switched " + localStorage.current + " times!";
    } else {
        alert("Sorry, your browser does not support Session Storage");
    }
}