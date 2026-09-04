const year = document.getElementById('year')
const roommateSection = document.getElementById('roommate-section')
const roommateRoll = document.getElementById('roommate-roll')

const duplicateError = document.getElementById("duplicate-error");
const closeError = document.getElementById("close-error");

closeError.addEventListener("click", () => {
    duplicateError.style.display = "none";
});

const hostelPreference1 = document.getElementById("hostelPreference1");
const hostelPreference2 = document.getElementById("hostelPreference2");


const hostelEligibility = {
    male: {
        1: ["ABH", "BH-3"],
        2: ["BH-4", "BH-8", "BH-1"],
        3: ["BH-6", "BH-7", "BH-9"],
        4: ["BH-6", "BH-7", "BH-9"]
    },
    female: {
        1: ["GH-3"],
        2: ["GH-5"],
        3: ["GH-1", "GH-2", "GH-4"],
        4: ["GH-1", "GH-2", "GH-4"]
    }


}

function updateHostelOptions() {

    const selectedGender = document.querySelector('input[name="gender"]:checked').value
    const selectedYear = year.value

    if (selectedYear === "") {
        return;
    }

    const eligibleHostels = hostelEligibility[selectedGender][selectedYear];

    hostelPreference1.innerHTML = '<option value="" disabled selected>Select your hostel</option>';
    hostelPreference2.innerHTML = '<option value="" disabled selected>Select your hostel</option>';

    if (eligibleHostels.length === 1) {
        hostelPreference2.disabled = true
        hostelPreference2.required = false
    }
    else {
        hostelPreference2.disabled = false
        hostelPreference2.required = true

    }

    eligibleHostels.forEach((hostel) => {
        const option = document.createElement("option");
        option.value = hostel
        option.textContent = hostel
        hostelPreference1.appendChild(option)
    });
    eligibleHostels.forEach((hostel) => {
        const option = document.createElement("option");
        option.value = hostel
        option.textContent = hostel
        hostelPreference2.appendChild(option)
    });

}


year.addEventListener("change", () => {
    updateHostelOptions()
})
document.querySelectorAll('input[name="gender"]').forEach((gender) => {

    gender.addEventListener("change", () => {
        updateHostelOptions()
    });

});

hostelPreference1.addEventListener("change", () => {

    const selectedHostel = hostelPreference1.value;

    Array.from(hostelPreference2.options).forEach((option) => {

        if (option.value === selectedHostel) {
            option.disabled = true
        }
        else {
            option.disabled = false
        }

    })

})





function updateRoommateSection() {
    if (year.value === "1" || year.value === "4") {
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
const applicationIdDisplay = document.getElementById("application-id");



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
        applicationData.submittedAt = new Date().toISOString();

        const savedApplication = localStorage.getItem("hostelApplications")
        const applications = savedApplication ? JSON.parse(savedApplication) : [];

        const alreadySubmitted = applications.some((application) => {
            return application.rollNumber === rollNo.value;
        })
        if (alreadySubmitted) {

            duplicateError.style.display = "flex";

            duplicateError.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            setTimeout(() => {
                duplicateError.style.display = "none";
            }, 5000);

            return;
        }
        applications.push(applicationData);

        localStorage.setItem(
            "hostelApplications",
            JSON.stringify(applications)
        )

        successMessage.style.display = "block";
        applicationIdDisplay.textContent = applicationId;
        document.getElementById("summary-name").textContent = formData.get("fullName");
       

        form.reset();
        updateRoommateSection();
        updateReceiptField();
    }


})

phone.addEventListener("blur", validatePhoneNumber)
email.addEventListener("blur", validateEmail)
roommateRoll.addEventListener("blur", validateRoommateRollNumber);







