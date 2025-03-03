document.addEventListener('DOMContentLoaded', function () {
    function calculateBMI() {
      // Get user input for weight and height
      let weight = parseFloat(document.getElementById('weight').value);
      let height = parseFloat(document.getElementById('height').value);
  
      // Get the selected units for weight and height
      const weightUnit = document.querySelector('input[name="weightUnit"]:checked').value;
      const heightUnit = document.querySelector('input[name="heightUnit"]:checked').value;
  
      // Check if weight and height are valid numbers
      if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers for weight and height.");
        return;
      }
  
      // Convert weight to kilograms if the unit is pounds
      if (weightUnit === 'lb') {
        weight = weight * 0.453592; // Convert pounds to kilograms
      }
  
      // Convert height to meters if the unit is inches
      if (heightUnit === 'in') {
        height = height * 0.0254; // Convert inches to meters
      }
  
      // Correct BMI Calculation (weight in kg, height in meters)
      const bmi = weight / (height * height); // Use height^2 (height * height)
  
      // Display the result
      document.getElementById('bmiResult').textContent = bmi.toFixed(2);
    }
  
    // Attach the function to the button
    document.getElementById('calculateBtn').addEventListener('click', calculateBMI);
  });
