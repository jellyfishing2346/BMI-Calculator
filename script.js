document.addEventListener('DOMContentLoaded', function () {
  function calculateBMI() {
    // Get user input for weight and height
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    console.log(`Input - Weight: ${weight}, Height: ${height}`); // Debugging line

    // Get the selected units for weight and height
    const weightUnit = document.querySelector('input[name="weightUnit"]:checked').value;
    const heightUnit = document.querySelector('input[name="heightUnit"]:checked').value;

    console.log(`Selected Units - Weight: ${weightUnit}, Height: ${heightUnit}`); // Debugging line

    // Check if weight and height are valid numbers and greater than 0
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Please enter valid numbers for weight and height (greater than 0).");
      return;
    }

    // Convert weight to kilograms if the unit is pounds
    if (weightUnit === 'lb') {
      weight = weight * 0.453592; // Convert pounds to kilograms
      console.log(`Weight after conversion: ${weight} kg`); // Debugging line
    }

    // Convert height to meters if the unit is centimeters or inches
    if (heightUnit === 'cm') {
      height = height / 100; // Convert cm to meters
      console.log(`Height after conversion: ${height} m`); // Debugging line
    } else if (heightUnit === 'in') {
      height = height * 0.0254; // Convert inches to meters
      console.log(`Height after conversion: ${height} m`); // Debugging line
    }

    // Check if height is still 0 after conversion (e.g., if input was 0)
    if (height === 0) {
      alert("Height cannot be 0. Please enter a valid height.");
      return;
    }

    // Correct BMI Calculation (weight in kg, height in meters)
    const bmi = weight / (height * height); // Use height^2 (height * height)

    console.log(`Calculated BMI: ${bmi}`); // Debugging line

    // Display the result
    document.getElementById('bmiValue').textContent = bmi.toFixed(2);
    document.getElementById('bmiCategory').textContent = getBMICategory(bmi);
  }

  function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obese';
  }

  // Attach the function to the button
  document.getElementById('calculateBtn').addEventListener('click', calculateBMI);
});