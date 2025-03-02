function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
  
    // Validate inputs
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      document.getElementById('bmiValue').textContent = 'Error';
      document.getElementById('bmiCategory').textContent = 'Invalid input';
      return;
    }
  
    let bmi;
    if (unit === 'metric') {
      bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    } else {
      bmi = ((weight * 703) / (height ** 2)).toFixed(2);
    }
  
    // Check for Infinity or invalid BMI
    if (!isFinite(bmi)) {
      document.getElementById('bmiValue').textContent = 'Error';
      document.getElementById('bmiCategory').textContent = 'Invalid input';
      return;
    }
  
    document.getElementById('bmiValue').textContent = bmi;
    document.getElementById('bmiCategory').textContent = getBMICategory(bmi);
  }
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obese';
  }