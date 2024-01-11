// Declare and initialize the variables for exercise 1 here:

// BEFORE running the code, predict what will be printed to the console by the following statements:


let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true ;
let shuttleCabinReady = true ;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200
let shuttleSpeed = 15000


let commandOverride = true


if (commandOverride === false) {
   console.log ("Fuel and Engine check require")
}
   else if (commandOverride === true) {
      console.log ("Command Override: Ready to launch.")
   }


if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}


if (crewStatus) {
   console.log ("Crew Ready");
}
   else {
      console.log("Crew Not Ready");
   }


if (computerStatusCode === 200) {
   console.log ("Computer is rebooting.");
}
   else if (computerStatusCode === 400) {
      console.log("Success! Computer online.");
   }
   else {
      console.log ("Alert: Computer offline");
   }


if (shuttleSpeed > 17500) {
   console.log("Alert: Escape velocity reached!");
}
   else if (shuttleSpeed < 8000) {
      console.log ("Alert: Cannot maintain orbit!");
   }
      else {
         console.log ("Stable speed");
      }


let any = "any";
let nRB = "NOT red blinking"
let fuelLevel = 18000	;
let engineTemperature = 2500;
engineIndicatorLight =  nRB;


if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
      console.log ("ENGINE FAILURE IMMINENT!");
   }
      else if (fuelLevel <= 5000 || engineTemperature > 2500) {
      console.log ("Check fuel Level. Engines running hot.");
      }
      else if (fuelLevel >5000 && engineTemperature <= 2500) {
         console.log ("Fuel level above 25%. Engines good.");
      }
      else if (fuelLevel > 10000 && engineTemperature <= 2500) {
         console.log ("Fuel level above 50%. Engines good.");
      }
      else if (fuelLevel > 20000 && engineTemperature <= 2500) {
         console.log ("Full Tank. Engines good.");
      }
      else {
         console.log ("Fuel and engine status pending...");
      }


if (fuelLevel > 20000 && engineIndicatorLight === nRB || commandOverride === true) {
   console.log ("Clear to launch!") ;
}
   else {
    console.log("Launch scrubbed!") ;
   }
      