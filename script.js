function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
  
    let bmi;
    if (unit === 'metric') {
      bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    } else {
      bmi = ((weight * 703) / (height ** 2)).toFixed(2);
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