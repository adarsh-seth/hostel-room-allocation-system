const enteredApplicationId = document.getElementById('application-id');
const statusBtn = document.getElementById('status-btn');
const statusResult = document.getElementById('status-result');

statusBtn.addEventListener("click", () => {
    const savedApplication = localStorage.getItem("hostelApplication")
    if (savedApplication === null) {
        statusResult.style.display = "block";
        statusResult.textContent = "No Application found. Please submit a hostel application first."
    }
    else {
        const application = JSON.parse(savedApplication)

        if (application.applicationId === enteredApplicationId.value) {
            statusResult.style.display = "block";
            statusResult.textContent = `Application Found ${application.applicationId} ${application.status}`
        }
        else {
            statusResult.style.display = "block";
            statusResult.textContent = "Application Not Found , Please check your Application Id and try again."
        }
    }

})