function calculateBMI(){


let height =
document.getElementById("height").value;


let weight =
document.getElementById("weight").value;



if(height=="" || weight==""){

alert("Please enter details");

return;

}


height = height / 100;


let bmi =
weight / (height * height);


bmi = bmi.toFixed(2);



document.getElementById("result")
.innerHTML =
"Your BMI is : " + bmi;



let status =
document.getElementById("status");


if(bmi < 18.5){

status.innerHTML="Underweight";

}

else if(bmi >=18.5 && bmi <25){

status.innerHTML="Normal Weight";

}

else{

status.innerHTML="Overweight";

}


}
