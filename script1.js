const form=document.getElementById("form");
const steps=document.querySelectorAll(".form-step");
const nextBtn=document.querySelectorAll("#next")
const backBtn=document.querySelectorAll("#back")
const progressBar=document.querySelector(".progress-bar")
const submitBtn=document.querySelector("#submit");
const summaryDiv=document.getElementById("summary");
const stepIndicators=document.querySelectorAll(".step")
let inputs=document.querySelectorAll("input")
let selects=document.querySelectorAll("select")

let currStep=0;
let formData={};
let genSumVal=false

// Regex to check email and phone number

const emailRgex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRgex=/^[6-9]\d{9}$/

// valid email function

function isValidEmail(email){
    return emailRgex.test(email);
}


// valid phone function

function isValidPhone(phone){
    return phoneRgex.test(phone)
}


// update the progress bar

function updateProgressBar(){
    let totalField=inputs.length;
     totalField+=selects.length;

    let count=0;

    inputs.forEach(input=>{
        if(input.value.trim()!=""){
            count++;
        }
    })

    selects.forEach(select=>{
        if(select.value.trim()!=""){
            count++;
        }
    })

    stepIndicators.forEach((p, index) => {
        p.classList.toggle("active", index === currStep);
    })

    const progress=(count/totalField)*100;
    console.log(progress)
    progressBar.style.width=progress+"%";

}


 // Function to show error message
 function showErrorMessage(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error-message")) {
        error = document.createElement("div");
        error.classList.add("error-message");
        input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = message;
    input.classList.add("error-border")
}

// Function to remove error message
function removeErrorMessage(input) {
    let error = input.nextElementSibling
    if (error && error.classList.contains("error-message")) {
        error.remove()
    }
    input.classList.remove("error-border");
}


// check every form details

form.addEventListener("input",function(e){
    const input=e.target;
    const value = input.value.trim();
    const type = input.getAttribute("type");
    if (!input.checkValidity()) {
        showErrorMessage(input, "This field is required or invalid.");
    } else if (type === "email" && !isValidEmail(value)) {
        showErrorMessage(input, "Please enter a valid email.");
    } else if (type === "tel" && !isValidPhone(value)) {
        showErrorMessage(input, "Please enter a valid 10-digit phone number.");
    } else {
        removeErrorMessage(input);
    }

    updateProgressBar()
})


// check when moving to next step

function validateStep(step){
    let valid = true;
    const inputField = steps[step].querySelectorAll("input, select");

    inputField.forEach(input => {
        const inputType = input.getAttribute("type");

        if (!input.checkValidity()) {
            showErrorMessage(input, "This field is required or invalid.");
            valid = false;
        } else if (inputType === "email" && !isValidEmail(input.value)) {
            showErrorMessage(input, "Please enter a valid email address.");
            valid = false;
        } else if (inputType === "tel" && !isValidPhone(input.value)) {
            showErrorMessage(input, "Please enter a valid 10-digit phone number.");
            valid = false;
        } else {
            removeErrorMessage(input);
        }
    });

    return valid;
}


// show the current step

function showCurStep(step){
    steps.forEach((s,index)=>{
        if(index==step){
            s.classList.add("active-step");
            s.classList.remove("hidden-step");
        }else{
            s.classList.remove("active-step");
            s.classList.add("hidden-step");
        }
    })
    updateProgressBar()
}


// next button 

nextBtn.forEach((btn,index)=>{
    btn.addEventListener("click",function(){
        if(validateStep(currStep)){
            currStep++;
            if(currStep==steps.length-1){
                generateSummary()
            }
            showCurStep(currStep)
        }
    })
})


// back button

backBtn.forEach((button) => {
    button.addEventListener("click", function () {
        currStep--;
        showCurStep(currStep);
    });
});

// summary 

function generateSummary(){
    if(!genSumVal){
        formData={};
        steps.forEach((step,idx)=>{
            if(idx<steps.length-1){
                let fields = [...step.querySelectorAll("input")]; 
                fields = fields.concat([...step.querySelectorAll("select")]); 
                console.log(fields);
                fields.forEach(field=>{
                    const p=document.createElement("p");
                    p.innerHTML=`<strong>${field.name}:</strong>${field.value}`

                    summaryDiv.appendChild(p)
                })
            }
        })
    }
    genSumVal=true;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");

    // Reset the form
    form.reset();
    formData = {};
    currStep=0;
    showCurStep(currStep)
});

showCurStep(currStep)