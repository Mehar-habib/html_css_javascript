function calculateAge() {
  var dobInput = document.getElementById("dob");
  var dob = new Date(dobInput.value);
  var today = new Date();

  if (isNaN(dob)) {
    alert("Invalid date of birth. Please enter a valid date.");
    return;
  }

  var age = today.getFullYear() - dob.getFullYear();
  var monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  var result = document.getElementById("result");
  result.innerHTML = "Your age is " + age + " Months " + monthDiff;
}
