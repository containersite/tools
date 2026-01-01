function calculateBMI(){
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if(!weight || !height){
        alert("অনুগ্রহ করে সঠিক ওজন ও উচ্চতা লিখুন");
        return;
    }

    const h = height / 100;
    const bmi = (weight / (h * h)).toFixed(1);

    let status = "";
    if(bmi < 18.5){
        status = "🔹 কম ওজন (Underweight)";
    }else if(bmi < 25){
        status = "✅ স্বাভাবিক ওজন (Normal)";
    }else if(bmi < 30){
        status = "⚠️ অতিরিক্ত ওজন (Overweight)";
    }else{
        status = "❌ স্থূলতা (Obese)";
    }

    document.getElementById("bmiResult").innerText = "আপনার BMI: " + bmi;
    document.getElementById("bmiStatus").innerText = status;
    document.getElementById("resultBox").style.display = "block";
}
