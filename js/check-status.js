const enteredApplicationId = document.getElementById('application-id');
const statusBtn = document.getElementById('status-btn');
const statusResult = document.getElementById('status-result');

const resultApplicationId = document.getElementById('result-application-id')
const resultStudentName = document.getElementById('result-student-name');
const resultStatus = document.getElementById('result-status')

statusBtn.addEventListener("click", () => {
    const savedApplication = localStorage.getItem("hostelApplications")
    
    if (savedApplication === null) {
        statusResult.style.display = "block";
        statusResult.textContent = "No Application found. Please submit a hostel application first."
    }
    else {
        const applications = JSON.parse(savedApplication);

        const application = applications.find((application) => {
           return application.applicationId === enteredApplicationId.value;
        })

        if (application) {
            statusResult.style.display = "block";
            statusResult.classList.remove("status-error");
            statusResult.classList.add("status-success");
            statusResult.innerHTML = `
        <div class="status-header">
            <h3>Application Found</h3>
            <p>Your application has been found.</p>
        </div>

        <div class="status-details">

            <div class="status-item">
                <span>Application ID</span>
                <strong id="result-application-id"></strong>
            </div>

            <div class="status-item">
                <span>Student Name</span>
                <strong id="result-student-name"></strong>
            </div>

            <div class="status-item">
                <span>Application Status</span>
                <strong id="result-status"></strong>
            </div>

        </div>
    `;

            document.getElementById("result-application-id").textContent = application.applicationId;

            document.getElementById("result-student-name").textContent =
                application.fullName;

            document.getElementById("result-status").textContent =
                application.status;
        }
        else {
            statusResult.style.display = "block";
            statusResult.classList.remove('status-success')
            statusResult.classList.add('status-error')
            statusResult.innerHTML = `
        <div class="status-header">
            <h3>Application Not Found</h3>
            <p>We couldn't find an application with this Application ID.</p>
        </div>
    `
        }
    }

})

enteredApplicationId.addEventListener("input", () => {
    statusResult.style.display = "none"
    statusResult.classList.remove("status-success")
    statusResult.classList.remove("status-error")
})