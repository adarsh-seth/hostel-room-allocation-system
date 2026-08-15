const year = document.getElementById('year')
const roommateSection = document.getElementById('roommate-section')
const roommateRoll = document.getElementById('roommate-roll')

function updateRoommateSection() {
    if (year.value === "1") {
        roommateSection.style.display = "none";
        roommateRoll.disabled = true;
        roommateRoll.value = "";
    }
    else {
        roommateSection.style.display = "";
        roommateRoll.disabled = false;

    }
}

year.addEventListener("change", updateRoommateSection)

updateRoommateSection();


const paid = document.getElementById('paid');
const pending = document.getElementById('fees-pending')
const receiptNumber = document.getElementById('receipt-number')

function updateReceiptField() {
    if (paid.checked) {
        receiptNumber.disabled = false;
        receiptNumber.required = true;
    }
    else {

        receiptNumber.disabled = true;
        receiptNumber.required = false;
        receiptNumber.value = "";
    }

}
pending.addEventListener("change", updateReceiptField)
paid.addEventListener("change", updateReceiptField)

updateReceiptField();


// form validation -> we are using ragex to check the text 
const rollNo = document.getElementById('roll-number')
const phone = document.getElementById('phone')
const email = document.getElementById("email");



const rollPattern = /^[A-Z0-9]{9}$/
const phonePattern = /^[0-9]{10}$/
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const roommatePattern = /^[A-Z0-9]{9}$/;

const rollError = document.querySelector(".roll-error");
const phoneError = document.querySelector(".phone-error");
const emailError = document.querySelector(".email-error");
const roommateError = document.querySelector(".roommate-error");




function validateRollNumber() {
    if (rollPattern.test(rollNo.value)) {
        rollError.style.display = "none"
        rollNo.classList.remove("input-invalid");

        return true;
    }
    else {
        rollError.style.display = "block";
        rollError.textContent = "Roll number must contain exactly 9 letters or numbers.";
        rollNo.classList.add("input-invalid");

        return false;
    }
}

function validatePhoneNumber() {
    if (phonePattern.test(phone.value)) {
        phoneError.style.display = "none"
        phone.classList.remove("input-invalid")

        return true;
    }
    else {
        phoneError.style.display = "block"
        phoneError.textContent = "Phone Number must contain exactly 10 numbers"
        phone.classList.add("input-invalid")

        return false;
    }
}
function validateEmail() {
    if (emailPattern.test(email.value)) {
        emailError.style.display = "none"
        email.classList.remove("input-invalid")

        return true;
    }
    else {
        emailError.style.display = "block"
        emailError.textContent = "Please enter a valid email address.";
        email.classList.add("input-invalid")

        return false;
    }
}

function validateRoommateRollNumber() {
    if (roommateRoll.disabled) {
        return true;
    }
    else if (roommateRoll.value === "") {
        return true;
    }
    else {
        if (roommatePattern.test(roommateRoll.value)) {
            roommateError.style.display = "none"
            roommateRoll.classList.remove("input-invalid");

            return true;
        }
        else {
            roommateError.style.display = "block";
            roommateError.textContent = "Roll number must contain exactly 9 letters or numbers.";
            roommateRoll.classList.add("input-invalid");

            return false;
        }
    }
}



rollNo.addEventListener("blur", validateRollNumber)


const form = document.querySelector(".application-form");
const successMessage = document.getElementById('success-message');



form.addEventListener("submit", (event) => {
    if (!validateRollNumber() || !validatePhoneNumber() || !validateEmail() || !validateRoommateRollNumber()) {
        event.preventDefault()
    }
    else {
        event.preventDefault(); // because we have not implemented backend yet
        
        const formData = new FormData(form);
        const uuid = crypto.randomUUID();
        const shortID = uuid.slice(0, 6).toUpperCase();
        const applicationId = `HH-${new Date().getFullYear()}-${shortID}`;
        const applicationData = Object.fromEntries(formData)
        applicationData.applicationId = applicationId;
        applicationData.status = "Submitted";
        
        const savedApplication = localStorage.getItem("hostelApplications")
        const applications = savedApplication ? JSON.parse(savedApplication) : [];
        applications.push(applicationData);

        localStorage.setItem(
            "hostelApplications",
            JSON.stringify(applications)
        )
        successMessage.style.display = "block";

        // We will use it later to show application summary 
        /*  const applicationSummary = document.getElementById('application-summary')

        document.getElementById('summary-name').textContent = formData.get("fullName");

        applicationSummary.style.display = "block" */
    }


})

phone.addEventListener("blur", validatePhoneNumber)
email.addEventListener("blur", validateEmail)
roommateRoll.addEventListener("blur", validateRoommateRollNumber);







