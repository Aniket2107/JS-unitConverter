(function(){
  var conversionValue,measurement,selectOne,selectTwo,inputOne,inputTwo;

  conversionValue = [
      {
        measurement : "Length",
        units:[
            {name: "Kilometer" , multiplier: 0.001},
            {name: "Meter" , multiplier: 1},
            {name: "Centimeter" , multiplier: 100},
            {name: "Mile" , multiplier: 0.000621371},
            {name: "Foot" , multiplier: 3.28084},
        ]
    },

    {
        measurement : "Mass",
        units:[
            {name: "Kilogram" , multiplier: 1},
            {name: "US Ton" , multiplier: 0.00110231},
            {name: "Gram" , multiplier: 1000},
            {name: "Pound" , multiplier: 2.20462},
            {name: "Milligram" , multiplier: 1000000},
        ]
    },
   
    {
        measurement : "Time",
        units:[
            {name: "Second" , multiplier: 1},
            {name: "Minute" , multiplier: 0.01667},
            {name: "Hour" , multiplier: 0.0002778},
            {name: "Day" , multiplier: 1.157e-5},
            {name: "Year" , multiplier: 3.171e-8},
        ]

    }

];

measurement = document.querySelector("#measurement");
selectOne = document.querySelector("#select-one");
selectTwo = document.querySelector("#select-two");
inputOne = document.querySelector("#input-one");
inputTwo = document.querySelector("#input-two");

// loop 

for(let i = 0; i < conversionValue.length;  i++ ) {

    var option ;

    option = document.createElement("option");
    option.setAttribute("value" , i);
    option.textContent = conversionValue[i].measurement;

    measurement.appendChild(option);

}

// add eventlistner

measurement.addEventListener("change", initializeUnits);

selectOne.addEventListener("change",function(){
    calConversion(inputOne);
});

selectTwo.addEventListener("change",function(){
    calConversion(inputOne);
});

inputOne.addEventListener("change",function(){
    calConversion(inputOne);
});

inputTwo.addEventListener("change",function(){
    calConversion(inputTwo);
});

function initializeUnits(){
  
    var units;
    units = conversionValue[measurement.value].units;

    while(selectOne.firstChild){
        selectOne.removeChild(selectOne.firstChild);
    }

    while(selectTwo.firstChild){
        selectTwo.removeChild(selectTwo.firstChild);
    }

    for(let i = 0; i < units.length ; i++){

        var opt;

        opt = document.createElement("option");
        opt.setAttribute("value" ,units[i].multiplier );
        opt.textContent = units[i].name;

        selectOne.appendChild(opt);
        selectTwo.appendChild(opt.cloneNode(true));
    }
}

function calConversion(element){
    var input , outputField , multiplierOne , multiplierTwo;
    input = element.value;
    outputField = (element.id === "input-one") ? inputTwo : inputOne;
    multiplierOne = (element.id === "input-one")? +selectOne.value : +selectTwo.value;;
    multiplierTwo = (element.id === "input-one")? +selectTwo.value : +selectOne.value;
    output = (input / multiplierOne)*multiplierTwo;
    outputField.value = output;
}

initializeUnits();

})();


