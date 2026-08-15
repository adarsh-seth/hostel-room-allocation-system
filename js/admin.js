const totalCount = document.getElementById('total-count');
const applicationContainer = document.getElementById('applications-container');
const searchValue = document.getElementById('search-id');

const savedApplications = localStorage.getItem("hostelApplications");

const applications = savedApplications ? JSON.parse(savedApplications) : [];

totalCount.textContent = applications.length;

function renderApplications(applicationsToRender){
    applicationContainer.innerHTML = ""
    applicationsToRender.forEach(application => {
    const card = document.createElement("div");
    card.classList.add("application-card");
    card.innerHTML = `
    <h3>${application.applicationId}</h3>
    <p>${application.fullName}</p>
    <p>${application.rollNumber}</p>
    <p>${application.email}</p>
    <p>${application.phone}</p>
    
    <label>Application Status</label>

    <select class="application-status"
        data-application-id="${application.applicationId}">
    <option value="Submitted" ${application.status === "Submitted" ? "selected" : ""}>Submitted</option>
    <option value="Under Review" ${application.status === "Under Review" ? "selected" : ""}>Under Review</option>
    <option value="Approved" ${application.status === "Approved" ? "selected" : ""}>Approved</option>
    <option value="Rejected" ${application.status === "Rejected" ? "selected" : ""}>Rejected</option>
</select>
   
`;
    applicationContainer.appendChild(card);
});

}
renderApplications(applications);

const statusSelect = document.querySelectorAll(".application-status");

statusSelect.forEach(select => {
    select.addEventListener("change", () => {
        const application = applications.find((application) => {
            return application.applicationId === select.dataset.applicationId;
        })
        application.status = select.value;
        localStorage.setItem(
            "hostelApplications",
            JSON.stringify(applications)
        )

    })
})

searchValue.addEventListener("input", () => {
    const filteredApplications = applications.filter((application) => {
        return application.applicationId.includes(searchValue.value);
    });
    renderApplications(filteredApplications);
})