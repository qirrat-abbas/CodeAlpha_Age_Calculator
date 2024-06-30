function getAge() {
    var datePickerValue = document.getElementById("datePicker").value;
    var birthDate = new Date(datePickerValue);
    var now = new Date();

    var ageInYears = now.getFullYear() - birthDate.getFullYear();
    var ageInMonths = now.getMonth() - birthDate.getMonth();

    // Adjust age components if necessary
    if (now.getDate() < birthDate.getDate()) {
        ageInYears--;
        ageInMonths--;
    } else if (now.getDate() === birthDate.getDate() && now.getMonth() < birthDate.getMonth()) {
        ageInYears--;
    }

    // Calculate the difference in days
    var ageInDays = now.getDate() - birthDate.getDate();

    // Display age components
    document.getElementById("yearHeading").innerHTML = ageInYears;
    document.getElementById("monthHeading").innerHTML = ageInMonths;
    document.getElementById("dayHeading").innerHTML = ageInDays;
}