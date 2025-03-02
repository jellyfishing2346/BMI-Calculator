document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get user input
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    // Get the selected units
    const weightUnit = document.querySelector('input[name="weightUnit"]:checked').value;
    const heightUnit = document.querySelector('input[name="heightUnit"]:checked').value;

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }

    // Convert weight to kilograms if in pounds
    if (weightUnit === 'lb') {
        weight = weight * 0.453592;
    }

    // Convert height to meters if in inches
    if (heightUnit === 'in') {
        height = height * 0.0254;
    }

    // BMI Calculation (weight in kg, height in meters)
    const bmi = weight / (height * height);
    
    // Display the result
    document.getElementById('bmiResult').textContent = bmi.toFixed(2);
});
