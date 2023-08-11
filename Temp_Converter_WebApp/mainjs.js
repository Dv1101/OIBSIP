//CLOCK
$(document).ready(function ()
{
    function clockTime() 
    {
        var x = document.getElementById("ktime").innerHTML;
        var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
        var today = new Date();

        var x = document.getElementById("ktime").innerHTML = (today.toLocaleDateString("en-GB", options)).replace('at', '|');
        console.log(x);
            setTimeout(function () 
            {
                clockTime();
            }, 1000);
    }
     clockTime();
});

//mouse_cursor_follower
document.addEventListener('DOMContentLoaded', function () {
    const isTouchDevice = matchMedia("(hover: none)").matches;

    if (!isTouchDevice) {
        const circle = document.querySelector('.cursor-circle');
        let mouseX = 0;
        let mouseY = 0;
        let circleX = 0;
        let circleY = 0;

        function updateCirclePosition() {
            const dx = mouseX - circleX;
            const dy = mouseY - circleY;
            const vx = dx / 4;
            const vy = dy / 4;

            circleX += vx;
            circleY += vy;

            circle.style.transform = `translate(${circleX}px, ${circleY}px)`;

            requestAnimationFrame(updateCirclePosition);
        }

        document.addEventListener('mousemove', function (event) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        });

        requestAnimationFrame(updateCirclePosition);
    }
});

//loader
window.addEventListener("load", function () {
    var loader = document.getElementById("preloader");
    loader.style.opacity = 0;
    setTimeout(function () {
        loader.style.display = "none";
    }, 1000);


});

function convertTemperature() {
    const inputUnit = document.getElementById("inputUnit").value;
    const targetUnit = document.getElementById("targetUnit").value;
    const temperatureInput = document.getElementById("temperature").value;
    
    if (!temperatureInput.trim()) {
        document.getElementById("result").innerText = "Please enter a temperature.";
        return;
    }
    
    const temperature = parseFloat(temperatureInput);
    
    if (isNaN(temperature)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }
    
    let convertedTemperature = 0;
    
    if (inputUnit === targetUnit) {
        convertedTemperature = temperature;
    } else if (inputUnit === "celsius" && targetUnit === "fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
    } else if (inputUnit === "fahrenheit" && targetUnit === "celsius") {
        convertedTemperature = (temperature - 32) * 5/9;
    } else if (inputUnit === "celsius" && targetUnit === "kelvin") {
        convertedTemperature = temperature + 273.15;
    } else if (inputUnit === "kelvin" && targetUnit === "celsius") {
        convertedTemperature = temperature - 273.15;
    } else if (inputUnit === "fahrenheit" && targetUnit === "kelvin") {
        convertedTemperature = (temperature - 32) * 5/9 + 273.15;
    } else if (inputUnit === "kelvin" && targetUnit === "fahrenheit") {
        convertedTemperature = (temperature - 273.15) * 9/5 + 32;
    }
    
    document.getElementById("result").innerHTML = `
        <p>Converted Temperature:</p>
        <p>${convertedTemperature.toFixed(2)} ${targetUnit}</p>
    `;
}
                     