let button = document.getElementById("btn");

button.addEventListener("click", function () {
  const grams = parseInt(document.getElementById("grams").value);
  const type = document.getElementById("type").value;

  if (grams === "" || isNaN(grams)) {
    grams.focus();
    document.getElementById("error").innerHTML = "Please provide a valid gram";
    document.getElementById("output").innerHTML = "";
  } else {
    document.getElementById("error").innerHTML = "";
    switch (type) {
      case "Pounds":
        convert_pounds(grams);
        break;
      case "Kilograms":
        convert_kilogram(grams);
        break;
      case "Ounces":
        convert_ounces(grams);
        break;
      case "Stones":
        convert_stones(grams);
        break;
      default:
        alert("Error");
    }

    function convert_pounds(grams) {
      let rate = 0.0022,
        pounds;
      pounds = grams * rate;
      document.getElementById("output").innerHTML =
        grams + " grams = " + pounds.toFixed(3) + " pounds.";
    }
    function convert_kilogram(grams) {
      let rate = 0.001,
        kilogram;
      kilogram = grams * rate;
      document.getElementById("output").innerHTML =
        grams + " grams = " + kilogram.toFixed(3) + " kg.";
    }
    function convert_ounces(grams) {
      let rate = 0.035274,
        ounces;
      ounces = grams * rate;
      document.getElementById("output").innerHTML =
        grams + " grams = " + ounces.toFixed(3) + " ounces.";
    }
    function convert_stones(grams) {
      let rate = 0.00015747,
        stones;
      stones = grams * rate;
      document.getElementById("output").innerHTML =
        grams + " grams = " + stones.toFixed(3) + " stones.";
    }
  }
});
