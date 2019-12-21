// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.getElementById("formSubmit");
   form.addEventListener("click", function(event) {
      let pilotName = document.querySelector("input[name = pilotName]");
      let copilotName = document.querySelector("input[name = copilotName]");
      let fuelLevel = document.querySelector("input[name = fuelLevel]");
      let cargoMass = document.querySelector("input[name = cargoMass]");
      //console.log("test");
      if (pilotName.value === "" || isNaN(pilotName.value) === false || copilotName.value === "" || isNaN(copilotName.value) === false || isNaN(fuelLevel.value) || fuelLevel.value === "" || isNaN(cargoMass.value) || cargoMass.value === "")
      {
         alert("All fields are required! Pilot Name and Co-pilot Name must be text! Numbers are required for Fuel Level and Cargo Mass!");
         event.preventDefault();
         return;
      }

      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus  = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      // faultyItems.style.visibility = "visible";
      pilotStatus.innerText = `${pilotName.value} is ready for launch`;
      copilotStatus.innerText = `${copilotName.value} is ready for launch`;

      if (fuelLevel.value < 10000) 
      {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerText = `Fuel level is too low for journey`;
         launchStatus.innerText = `Shuttle not ready for launch`;
         launchStatus.style.color = "red";
         //console.log("test");
         event.preventDefault();
      }
      
      if (cargoMass.value > 10000)
      {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerText = `Cargo mass is too much for the shuttle to take off`;
         launchStatus.innerText = `Shuttle not ready for launch`;
         launchStatus.style.color = "red";
         event.preventDefault();
      }

      if (fuelLevel.value >= 10000 && cargoMass.value <= 10000)
      {
         launchStatus.style.color = "green";
         launchStatus.innerText = `Shuttle is ready for launch`;
         event.preventDefault();
      }

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");
         let planet = Math.floor(Math.random() * 6) + 1;
         // form.addEventListener("click", function() {
            missionTarget.innerHTML = `
            <div>
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[planet].name}</li>
                  <li>Diameter: ${json[planet].diameter}</li>
                  <li>Star: ${json[planet].star}</li>
                  <li>Distance from Earth: ${json[planet].distance}</li>
                  <li>Number of Moons: ${json[planet].moons}</li>
               </ol>
               <img src = "${json[planet].image}">
            </div>`;

            event.preventDefault();
         // });
      });
   });

      // alert("pilot name: " + pilotName.value);
      // alert("copilot name: " + copilotName.value);
      // alert("fuel level: " + fuelLevel.value);
      // alert("cargo mass: " + cargoMass.value);
      event.preventDefault();
      //console.log("test");
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
