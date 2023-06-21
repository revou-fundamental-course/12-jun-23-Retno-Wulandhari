/* Fahrenheit ke Celcius Rumus : ℃ = (℉ -32) /1.8*/
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
    document.getElementById("numFahrenheit").innerHTML=valNum; /*Nilai Input Fahrenheit */
  }
/* celcius ke Farenheit Rumus : ℉ = (℃ * 1.8) +32*/
  function temperatureConverter2(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
    document.getElementById("numCelcius").innerHTML=valNum; /*Nilai Input Celcius */
  }

